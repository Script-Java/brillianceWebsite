import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";

export function Footer() {
  return (
    <section className="footer mt-40 bg-gray-950 text-base-content p-10">
      <footer className="footer container m-auto text-neutral-content flex flex-col md:flex-row justify-between items-center p-4">
        <aside className="flex flex-row items-center gap-4">
          <Image src={logo} alt="logo" width={100} />
          <p className="text-white">Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav className="flex gap-4 text-2xl text-white mt-4 md:mt-0">
          <Link href="https://www.instagram.com/brilliance_skinandlaser/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61572003144681" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link href="https://www.google.com/maps/place/Brilliance+Skin+and+Laser/@33.0534268,-96.7994774,17z/data=!4m6!3m5!1s0x864c2331271e8601:0x4d54928f7a88ad8b!8m2!3d33.0534223!4d-96.7969025!16s%2Fg%2F11y8g6sygx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
            <FaGoogle />
          </Link>
        </nav>
      </footer>
    </section>
  );
}

export default Footer;
