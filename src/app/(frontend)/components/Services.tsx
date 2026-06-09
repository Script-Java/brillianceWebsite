import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

export function Services({ data }: { data?: any[] }) {
  const staticServices = [
    {
      title: "Laser Hair Removal",
      description: "Achieve smooth, hair-free skin with laser hair removal. This safe and effective treatment targets hair follicles to reduce unwanted hair growth, leaving your skin silky and flawless. Perfect for long-lasting results and a hassle-free routine.",
      image: img1,
      ctaText: "Book Appointment",
      ctaLink: "https://www.vagaro.com/brillianceskinandlaser",
      secondaryText: "Learn More",
      secondaryLink: "/specials"
    },
    {
      title: "IPL Photo Facial",
      description: "Achieve smooth, hair-free skin with laser hair removal. This safe and effective treatment targets hair follicles to reduce unwanted hair growth, leaving your skin silky and flawless. Perfect for long-lasting results and a hassle-free routine.",
      image: img2,
      ctaText: "Book Appointment",
      ctaLink: "https://www.vagaro.com/brillianceskinandlaser",
      secondaryText: "Learn More",
      secondaryLink: "/specials"
    },
    {
      title: "Skinpen Microneedling",
      description: "Achieve smooth, hair-free skin with laser hair removal. This safe and effective treatment targets hair follicles to reduce unwanted hair growth, leaving your skin silky and flawless. Perfect for long-lasting results and a hassle-free routine.",
      image: img3,
      ctaText: "Book Appointment",
      ctaLink: "https://www.vagaro.com/brillianceskinandlaser",
      secondaryText: "Learn More",
      secondaryLink: "/specials"
    }
  ];

  const servicesList = data && data.length > 0 ? data.map(s => ({
    title: s.title,
    description: s.description,
    image: s.image?.url || img1,
    imageAlt: s.image?.alt || s.title,
    ctaText: s.ctaText || "Book Appointment",
    ctaLink: s.ctaLink || "https://www.vagaro.com/brillianceskinandlaser",
    secondaryText: s.secondaryText || "Learn More",
    secondaryLink: s.secondaryLink || "/specials"
  })) : staticServices.map(s => ({
    ...s,
    imageAlt: s.title
  }));

  return (
    <section className="container m-auto p-12 my-40">
      <div className="">
        <h2 className="text-3xl font-bold text-center uppercase mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row justify-center text-center lg:text-left items-center bg-gray-950 p-8 rounded-xl text-white gap-8 max-w-2xl">
              <div className="flex-shrink-0">
                <Image 
                  src={service.image} 
                  alt={service.imageAlt} 
                  width={200}
                  height={200}
                  className="rounded-full w-48 h-48 object-cover mx-auto" 
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-primary">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <Link 
                    className="btn btn-primary" 
                    href={service.ctaLink}
                    target={service.ctaLink.startsWith('http') ? "_blank" : undefined}
                    rel={service.ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {service.ctaText}
                  </Link>
                  <Link className="btn btn-secondary" href={service.secondaryLink}>
                    {service.secondaryText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
