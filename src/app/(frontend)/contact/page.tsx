import React, { cache } from "react";
import type { Metadata } from "next";
import ContactComp from "../components/ContactComp";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

const queryContactData = cache(async () => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: 'contact',
      },
    },
  })
  return result.docs?.[0] || null
})

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryContactData()
  const title = page?.meta?.title || "Contact Brilliance Skin and Laser | Plano, TX"
  const description = page?.meta?.description || "Get in touch with Brilliance Skin and Laser in Plano, TX. Call (469) 450-0012 or submit our online contact form."
  return {
    title,
    description,
  }
}

export default async function ContactPage() {
  const pageData = await queryContactData()
  const brillianceContact = pageData?.brillianceContact || null

  return (
    <div className="container py-12 m-auto px-4">
      <ContactComp data={brillianceContact} />
    </div>
  );
}

