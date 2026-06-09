import React, { cache } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import aboutceo from "../assets/about_ceo.jpg";
import abouthero from "../assets/abouthero.jpg";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

const queryAboutData = cache(async () => {
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
        equals: 'about',
      },
    },
  })
  return result.docs?.[0] || null
})

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryAboutData()
  const title = page?.meta?.title || "About Ariana Darvish & Brilliance Skin and Laser"
  const description = page?.meta?.description || "Learn about Ariana Darvish's 10+ years of skincare experience and the mission of Brilliance Skin and Laser in Plano, TX."
  return {
    title,
    description,
  }
}

export default async function AboutPage() {
  const pageData = await queryAboutData()
  const brillianceAbout = pageData?.brillianceAbout || null

  const ceoTitle = brillianceAbout?.ceo?.title || "The Passion Behind the Brilliance"
  const ceoName = brillianceAbout?.ceo?.name || "Ariana Darvish"
  const ceoDescription = brillianceAbout?.ceo?.description || "With over 10 years of experience in advanced skincare, I specialize in providing safe and effective treatments, including Laser Hair Removal, IPL Photofacial, and Microneedling. As a certified technician, I’m committed to delivering personalized care and transformative results that help you look and feel your best. Your journey to radiant, confident skin starts here—book your consultation today!"

  const ceoImage = brillianceAbout?.ceo?.image
  const ceoImageSrc = (ceoImage && typeof ceoImage === 'object' && 'url' in ceoImage && ceoImage.url) ? ceoImage.url : aboutceo
  const ceoImageAlt = (ceoImage && typeof ceoImage === 'object' && 'alt' in ceoImage && ceoImage.alt) ? ceoImage.alt : "Ariana Darvish - CEO of Brilliance"

  const clinicTitle = brillianceAbout?.clinic?.title || "About Brilliance Skin and Laser"
  const clinicImage = brillianceAbout?.clinic?.image
  const clinicImageSrc = (clinicImage && typeof clinicImage === 'object' && 'url' in clinicImage && clinicImage.url) ? clinicImage.url : abouthero
  const clinicImageAlt = (clinicImage && typeof clinicImage === 'object' && 'alt' in clinicImage && clinicImage.alt) ? clinicImage.alt : "Inside Brilliance Skin and Laser clinic"
  const clinicDesc1 = brillianceAbout?.clinic?.description1 || "Brilliance Skin and Laser is a premier med spa dedicated to helping clients achieve radiant, healthy skin and renewed confidence. Specializing in advanced skincare treatments and laser therapies, Brilliance Skin and Laser combines cutting-edge technology with personalized care to deliver outstanding results. The spa’s mission is to empower clients by enhancing their natural beauty and providing customized solutions tailored to their unique needs and goals."
  const clinicDesc2 = brillianceAbout?.clinic?.description2 || "In addition to its core skincare treatments, Brilliance Skin and Laser features an array of specialized services to elevate the spa experience. These include medical-grade facials, chemical peels, microneedling, and state-of-the-art laser procedures for hair removal and pigmentation correction. The spa also provides tailored skincare consultations and product recommendations, ensuring that every client has access to a personalized regimen for long-lasting results."
  const clinicDesc3 = brillianceAbout?.clinic?.description3 || "What sets Brilliance Skin and Laser apart is its dedication to client satisfaction and safety. The spa’s team of experienced professionals ensures that every treatment is performed with precision and care, prioritizing the comfort and well-being of each client. With a focus on education and innovation, the team stays at the forefront of industry advancements to provide the most effective and safe treatments available."

  return (
    <div className="container py-12 m-auto p-4">
      <h1 className="text-3xl lg:text-6xl text-primary font-bold my-10 text-center">
        {ceoTitle}
      </h1>

      <div className="my-16 lg:my-24">
        <div className="flex flex-col items-center gap-6">
          <Image
            className="rounded-full shadow-xl w-60 h-60 object-cover"
            src={ceoImageSrc}
            alt={ceoImageAlt}
            width={240}
            height={240}
            priority
          />
          <h2 className="text-3xl font-bold text-gray-900">{ceoName}</h2>
          <p className="max-w-3xl text-center text-lg text-gray-700 leading-relaxed">
            {ceoDescription}
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl lg:text-6xl text-primary font-bold my-10 text-center">
          {clinicTitle}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              className="rounded-xl shadow-xl w-full max-w-lg h-auto object-cover"
              src={clinicImageSrc}
              alt={clinicImageAlt}
              width={512}
              height={384}
            />
          </div>
          <div className="flex flex-col text-center lg:text-start gap-6 text-lg text-gray-700 leading-relaxed">
            {clinicDesc1 && <p>{clinicDesc1}</p>}
            {clinicDesc2 && <p>{clinicDesc2}</p>}
            {clinicDesc3 && <p>{clinicDesc3}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

