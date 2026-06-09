import React from "react";
import lotion from "../assets/lotion.png";
import Image from "next/image";

export function About({ data }: { data?: any }) {
  const title = data?.title || "Welcome to Brilliance Skin and Laser";
  const description = data?.description || "At Brilliance Skin and Laser, we specialize in advanced skincare and laser treatments tailored to your unique needs. Our team of experienced professionals is passionate about delivering results-driven services, using the latest technology to rejuvenate your skin and boost your confidence. Whether you're looking for laser hair removal, skin rejuvenation, or personalized skincare solutions, we are here to help you shine brilliantly.";
  
  const imageSrc = data?.image?.url || lotion;
  const imageAlt = data?.image?.alt || "lotion";

  return (
    <section className="my-40">
      <div className="container m-auto my-40 lg:my-80 p-8 lg:p-12 bg-gray-950 text-white rounded-2xl shadow-xl relative">
        {/* Text Section */}
        <div className="relative lg:flex lg:items-center lg:h-[30rem] lg:justify-end">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              {title}
            </h2>
            <p className="text-lg lg:text-xl mt-4 lg:mt-8 text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 w-full lg:w-1/2 h-auto mt-8 lg:mt-0">
          <Image
            className="object-contain mx-auto"
            src={imageSrc}
            width={800}
            height={800}
            alt={imageAlt}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
