"use client";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-950 fixed top-0 w-full z-10 rounded-b-3xl">
      <nav className="container bg-gray-950 m-auto p-4">
        <div className="navbar flex justify-between items-center">
          <div className="flex-1">
            <Link className="" href="/">
              <Image src={logo} width={150} alt="logo" priority />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-2 text-white items-center">
              <li>
                <Link className="btn btn-ghost hover:bg-gray-800 text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost hover:bg-gray-800 text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost hover:bg-gray-800 text-white" href="/specials">
                  Specials
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost hover:bg-gray-800 text-white" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="btn btn-primary text-white" href="https://www.vagaro.com/brillianceskinandlaser" target="_blank" rel="noopener noreferrer">
                  Schedule Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-square text-white btn-ghost text-3xl"
              aria-label="Toggle navigation menu"
            >
              <IoMenu />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden">
            <div className="bg-gray-950 h-screen mt-10 p-4">
              <ul className="flex flex-col text-white items-center justify-center gap-4">
                <li onClick={() => setMenuOpen(false)}>
                  <Link className="btn btn-ghost hover:bg-gray-800 text-white w-full text-center" href="/">
                    Home
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link className="btn btn-ghost hover:bg-gray-800 text-white w-full text-center" href="/about">
                    About
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link className="btn btn-ghost hover:bg-gray-800 text-white w-full text-center" href="/specials">
                    Specials
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link className="btn btn-ghost hover:bg-gray-800 text-white w-full text-center" href="/contact">
                    Contact
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link className="btn btn-primary text-white w-full text-center" href="https://www.vagaro.com/brillianceskinandlaser" target="_blank" rel="noopener noreferrer">
                    Schedule Appointment
                  </Link>
                </li>
              </ul>
              <div className="flex gap-4 justify-center mt-8 text-white text-xl">
                <Link
                  href="https://www.instagram.com/brilliance_skinandlaser/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61572003144681"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.google.com/maps/place/Brilliance+Skin+and+Laser/@33.0534268,-96.7994774,17z/data=!4m6!3m5!1s0x864c2331271e8601:0x4d54928f7a88ad8b!8m2!3d33.0534223!4d-96.7969025!16s%2Fg%2F11y8g6sygx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                >
                  <FaGoogle />
                </Link>
              </div>
              <p className="flex flex-row gap-2 justify-center text-center text-white mt-8 text-sm items-center">
                <FaLocationDot /> City Salon Suites & Spa - Plano, 5813 Preston Rd 554 Unit 202, Plano, TX 75093
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
