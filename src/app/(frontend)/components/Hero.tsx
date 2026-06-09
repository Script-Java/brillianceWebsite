import React from "react";
import Image from "next/image";
import heroImg from "../assets/hero.png";
import Link from "next/link";

export function Hero({ data }: { data?: any }) {
  const title = data?.title || "Enhancing Natural Beauty, Restoring Inner Confidence";
  const description = data?.description || "Experience advanced treatments in a serene setting, designed to rejuvenate your skin, enhance your beauty, and boost your confidence.";
  const ctaText = data?.ctaText || "Get Started";
  const ctaLink = data?.ctaLink || "https://www.vagaro.com/brillianceskinandlaser";
  const secondaryText = data?.secondaryText || "Learn More";
  const secondaryLink = data?.secondaryLink || "/specials";
  
  const imageSrc = data?.image?.url || heroImg;
  const imageAlt = data?.image?.alt || "spa hero Image";

  return (
    <section className="container pt-24 lg:pt-36 pb-32 p-12 m-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image 
            className="rounded-2xl object-cover h-[30rem] w-full" 
            width={800} 
            height={600} 
            src={imageSrc} 
            alt={imageAlt} 
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-start flex flex-col gap-6">
          <h1 className="text-primary font-bold text-3xl lg:text-6xl leading-tight">
            {title}
          </h1>
          <p className="text-lg lg:text-2xl text-gray-700">
            {description}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mt-4">
            <Link 
              className="btn btn-primary px-12" 
              href={ctaLink} 
              target={ctaLink.startsWith('http') ? "_blank" : undefined} 
              rel={ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
            >
              {ctaText}
            </Link>
            <Link className="btn btn-secondary px-12" href={secondaryLink}>
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
