import React, { cache } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import img4 from "../assets/s4.jpg";
import img6 from "../assets/7.jpg";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

const querySpecialsData = cache(async () => {
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
        equals: 'specials',
      },
    },
  })
  return result.docs?.[0] || null
})

export async function generateMetadata(): Promise<Metadata> {
  const page = await querySpecialsData()
  const title = page?.meta?.title || "Special Deals & Packages | Brilliance Skin and Laser"
  const description = page?.meta?.description || "Check out our special pricing on Laser Hair Removal, IPL Photo Facials, and SkinPen Microneedling packages in Plano, TX."
  return {
    title,
    description,
  }
}

export default async function SpecialsPage() {
  const pageData = await querySpecialsData()
  const brillianceSpecials = pageData?.brillianceSpecials || null

  const title = brillianceSpecials?.title || "Special Deals!"

  const staticDeals = [
    {
      title: "Laser Hair Removal Full Body (Six Sessions)",
      description: "Achieve smooth, hair-free skin with our Laser Hair Removal Full Body (Six Sessions), a safe and effective treatment designed to provide long-lasting results for all skin types.",
      originalPrice: "$1,900.00",
      promoPrice: "$1,599.00",
      image: img1,
      alt: "Full Body Laser Hair Removal Deal"
    },
    {
      title: "Laser Hair Removal Beach Body (Six Sessions)",
      description: "Get beach-ready with our Laser Hair Removal Beach Body (Six Sessions), targeting key areas for a smooth, flawless look that lasts all season.",
      originalPrice: "$1,200.00",
      promoPrice: "$999.00",
      image: img2,
      alt: "Beach Body Laser Hair Removal Deal"
    },
    {
      title: "Laser Hair Removal Half Arm & Half Legs (Six Sessions)",
      description: "Enjoy effortless smoothness with our Laser Hair Removal Half Arm and Half Legs (Six Sessions), expertly designed for long-lasting results in key areas.",
      originalPrice: "$799.00",
      promoPrice: "$599.00",
      image: img4,
      alt: "Half Arm and Half Legs Laser Hair Removal Deal"
    },
    {
      title: "IPL Photo Facial Face",
      description: "Revitalize your skin with our IPL Photo Facial Face, a non-invasive treatment that reduces discoloration, sun damage, and signs of aging for a radiant, even complexion.",
      originalPrice: "$129.00",
      promoPrice: "$99.00",
      image: img3,
      alt: "IPL Photo Facial Deal"
    },
    {
      title: "Skinpen Microneedling Face",
      description: "Rejuvenate your skin with our SkinPen Microneedling Face treatment, designed to boost collagen production, reduce fine lines, and improve texture for a smooth, glowing complexion.",
      originalPrice: "$299.00",
      promoPrice: "$250.00",
      image: img6,
      alt: "Skinpen Microneedling Deal"
    }
  ];

  const dealsList = brillianceSpecials?.deals && brillianceSpecials.deals.length > 0
    ? brillianceSpecials.deals.map((deal: any) => ({
        title: deal.title,
        description: deal.description,
        originalPrice: deal.originalPrice,
        promoPrice: deal.promoPrice,
        image: deal.image?.url || img1,
        alt: deal.alt || deal.title || "Deal Image",
      }))
    : staticDeals;

  return (
    <div className="container py-12 m-auto">
      <h1 className="text-3xl lg:text-6xl text-primary my-10 font-bold text-center">
        {title}
      </h1>

      <div className="flex justify-center mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealsList.map((deal, idx) => (
            <div key={idx} className="card bg-gray-950 text-white w-full max-w-sm shadow-xl flex flex-col justify-between rounded-xl overflow-hidden">
              <figure className="relative h-64 w-full">
                <Image
                  src={deal.image}
                  alt={deal.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </figure>
              <div className="card-body p-6 flex flex-col gap-4 flex-grow justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="card-title text-2xl font-bold text-primary">
                    {deal.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {deal.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <span className="text-xl line-through text-gray-500">{deal.originalPrice}</span>
                    <span className="text-2xl text-primary font-bold">{deal.promoPrice}</span>
                  </div>
                  <div className="card-actions justify-start">
                    <Link
                      className="btn btn-secondary w-full"
                      href="https://www.vagaro.com/brillianceskinandlaser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

