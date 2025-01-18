import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";


function Footer() {
  return (
    <section className="footer mt-40 bg-gray-950 text-base-content p-10">
      <footer className="footer container m-auto text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <Image src={logo} alt="logo" width={100}></Image>

          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col place-self-center mt-4 gap-4 text-2xl md:place-self-center md:justify-self-end">
          <Link href={'https://www.instagram.com/brilliance_skinandlaser/'} passHref target="_blank">
            <FaInstagram></FaInstagram>
          </Link>
          <Link href={'https://www.facebook.com/profile.php?id=61572003144681'} passHref target="_blank">
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link href={'https://www.google.com/maps/place/Brilliance+Skin+and+Laser/@33.0534268,-96.7994774,17z/data=!4m6!3m5!1s0x864c2331271e8601:0x4d54928f7a88ad8b!8m2!3d33.0534223!4d-96.7969025!16s%2Fg%2F11y8g6sygx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'} passHref target="_blank">
            <FaGoogle></FaGoogle>
          </Link>
        </nav>
      </footer>
    </section>
  );
}

export default Footer;
