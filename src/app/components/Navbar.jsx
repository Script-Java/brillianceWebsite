"use client";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-950 fixed top-0 w-full z-10 rounded-b-3xl">
      <nav className="container bg-gray-950 m-auto p-4">
        <div className="navbar">
          <div className="flex-1">
            <Link className="" href={"/"}>
              <Image src={logo} width={150} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-4 text-white">
              <li className="btn btn-ghost ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="btn btn-ghost">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="btn btn-ghost">
                <Link href={"/specials"}>Specials</Link>
              </li>
              <li className="btn btn-secondary">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <button
              onClick={toggleMenu}
              className="btn btn-square block text-white lg:hidden btn-ghost text-3xl"
            >
              <IoMenu />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="">
            <div className="bg-gray-950 h-screen mt-10 p-4">
              <ul className="flex flex-col text-white items-center justify-center gap-4">
                <li className="btn btn-ghost">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="btn btn-ghost">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="btn btn-ghost">
                  <Link href={"/specials"}>Specials</Link>
                </li>
                <li className="btn btn-secondary">
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
              <div className="flex gap-4 justify-center mt-8 text-white text-xl">
                <Link
                  href={"https://www.instagram.com/brilliance_skinandlaser/"}
                  passHref
                  target="_blank"
                >
                  <FaInstagram></FaInstagram>
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61572003144681"
                  }
                  passHref
                  target="_blank"
                >
                  <FaFacebookF></FaFacebookF>
                </Link>
                <Link
                  href={
                    "https://www.google.com/maps/place/Brilliance+Skin+and+Laser/@33.0534268,-96.7994774,17z/data=!4m6!3m5!1s0x864c2331271e8601:0x4d54928f7a88ad8b!8m2!3d33.0534223!4d-96.7969025!16s%2Fg%2F11y8g6sygx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                  }
                  passHref
                  target="_blank"
                >
                  <FaGoogle></FaGoogle>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
