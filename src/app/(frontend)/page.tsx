import React, { cache } from "react";
import type { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

const queryHomeData = cache(async () => {
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
        equals: 'home',
      },
    },
  })
  return result.docs?.[0] || null
})

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryHomeData()
  const title = page?.meta?.title || "Brilliance Skin and Laser | Plano, TX Medspa"
  const description = page?.meta?.description || "A premier medspa offering advanced skin and beauty treatments, laser hair removal, IPL photo facials, and Skinpen microneedling in Plano, TX."
  return {
    title,
    description,
    alternates: {
      canonical: "https://www.brillianceskin.us/",
    },
    keywords: ["medspa Plano", "laser treatments", "skin rejuvenation", "Botox Plano", "anti-aging treatments"],
    authors: [{ name: "Brilliance Skin and Laser" }],
  }
}

export default async function Home() {
  const pageData = await queryHomeData()
  const brillianceHome = pageData?.brillianceHome || null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Brilliance Skin and Laser",
    "description": "A premier medspa offering advanced skin and beauty treatments in Plano, TX.",
    "url": "https://www.brillianceskin.us/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5813 Preston Rd 554 Unit 202",
      "addressLocality": "Plano",
      "addressRegion": "TX",
      "postalCode": "75093",
      "addressCountry": "US",
    },
    "image": "https://www.brillianceskin.us/images/s2.jpg",
    "telephone": "+1-469-450-0012",
    "priceRange": "$$",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-grow">
        <Hero data={brillianceHome?.hero || undefined} />
        <About data={brillianceHome?.about || undefined} />
        <Services data={brillianceHome?.services || undefined} />
        <Testimonial data={brillianceHome?.testimonials || undefined} />
      </main>
    </div>
  );
}

