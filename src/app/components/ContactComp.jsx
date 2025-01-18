"use client";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactComp() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"), // Added phone field to data
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        e.target.reset();
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="mt-96"> {/* Adjusted margin to better suit layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-6xl text-center lg:text-start font-bold text-primary">
              Contact Us
            </h1>
            <p className="text-base text-center lg:text-start lg:text-xl my-4">
              Email us, give us a call, or fill out our contact form to discover
              how we can help you achieve your beauty and wellness goals. We're
              here to provide personalized solutions and answer any questions
              you may have!
            </p>
            <div className="flex flex-col gap-4 justify-center">
              <p className="flex flex-row gap-2 text-base lg:text-xl items-center">
                <MdAlternateEmail /> brillianceskinandlaser@gmail.com
              </p>
              <p className="flex flex-row gap-2 text-base lg:text-xl items-center">
                <FaPhone /> (469) 450-0012
              </p>
              <p className="flex flex-row gap-2 text-base lg:text-xl items-center">
                <FaLocationDot /> City Salon Suites & Spa - Plano, 5813 Preston Rd 554 Unit 202, Plano, TX 75093
              </p>
            </div>
          </div>

          <div className="max-w-3xl rounded-xl bg-gray-950 p-10 h-auto"> {/* Adjusted height */}
            <h2 className="text-3xl font-bold text-white my-4">Get in Touch</h2>
            <p className="text-xl text-white my-4">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input w-full"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input w-full"
                required
              />
              <textarea
                name="message"
                className="textarea h-52"
                placeholder="How can we help?"
                required
              ></textarea>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        {showToast && (
          <div className="toast toast-end toast-bottom">
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ContactComp;
