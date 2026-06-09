import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import Link from 'next/link'

export function Testimonial({ data }: { data?: any[] }) {
  const staticTestimonials = [
    {
      quote: "“I have had a wonderful experience with Ariana ! She is professional, flexible, and has made the laser hair removal process comfortable. I have already experienced noticeable improvements after a couple of sessions and I am so happy with my results and experience here!”",
      author: "— Maryam Amiri",
      stars: 5
    },
    {
      quote: "“I love this place! Arianna is so good at her job. She is kind and has great customer service skills. I have been doing full body hair removal for 3 months and am very happy with her services!”",
      author: "— Lisa Martin",
      stars: 5
    },
    {
      quote: "“I was a little nervous about my first spa day, but Ariana at Brilliance skin made me feel completely comfortable. She really listened to my needs and provided a customized treatment.”",
      author: "— Sherry Haile",
      stars: 5
    }
  ];

  const testimonialsList = data && data.length > 0 ? data.map(t => ({
    quote: t.quote,
    author: t.author,
    stars: t.stars || 5
  })) : staticTestimonials;

  return (
    <section className="container p-12 mb-40 m-auto">
      <div className="">
        <div className="text-center my-20">
          <h2 className="text-4xl font-bold text-primary">Hear what our clients have to say…</h2>
          <p className="text-xl mt-4 text-gray-600">Explore our services.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {testimonialsList.map((t, idx) => (
            <div key={idx} className="bg-gray-950 text-white text-center rounded-xl p-8 max-w-96 flex flex-col justify-between">
              <p className="italic text-gray-300 leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold">{t.author}</h3>
                <div className="flex gap-2 items-center mt-4 justify-center text-yellow-500 text-xl">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <IoStarSharp key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            target="_blank"
            className="btn btn-outline border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            href="https://www.google.com/maps/place/Brilliance+Skin+and+Laser/@33.0534268,-96.7994774,17z/data=!4m8!3m7!1s0x864c2331271e8601:0x4d54928f7a88ad8b!8m2!3d33.0534223!4d-96.7969025!9m1!1b1!16s%2Fg%2F11y8g6sygx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            rel="noopener noreferrer"
          >
            View More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
