import React from "react";
import Image from "next/image";
import heroImg from "../assets/hero.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="container py-52 p-12 m-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="">
          <Image className="rounded-2xl " width={800} src={heroImg} alt="spa hero Image" />
        </div>

        <div className="text-center lg:text-start">
          <h1 className="text-primary font-bold text-3xl lg:text-6xl">Enhancing Natural Beauty, Restoring Inner Confidence</h1>
          <p className="text-lg lg:text-2xl my-8">
            Experience advanced treatments in a serene setting, designed to
            rejuvenate your skin, enhance your beauty, and boost your
            confidence.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link className="btn btn-primary px-12" href={"https://gklrs.myaestheticrecord.com/online-booking/h/Ml8yNTEyMF9jbGluaWNz"} passHref>Get Started</Link>
            <Link className="btn btn-secondary px-12" href={"/specials"} passHref>Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
