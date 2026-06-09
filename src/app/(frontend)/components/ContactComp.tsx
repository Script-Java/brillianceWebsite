"use client";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function ContactComp({ data }: { data?: any }) {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = data?.title || "Contact Us";
  const description = data?.description || "Email us, give us a call, or fill out our contact form to discover how we can help you achieve your beauty and wellness goals. We're here to provide personalized solutions and answer any questions you may have!";
  const email = data?.email || "brillianceskinandlaser@gmail.com";
  const phone = data?.phone || "(469) 450-0012";
  const address = data?.address || "City Salon Suites & Spa - Plano,\n5813 Preston Rd 554 Unit 202, Plano, TX 75093";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const postData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setShowToast(true);
        e.currentTarget.reset();
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="max-w-3xl flex flex-col justify-center gap-6">
            <h1 className="text-3xl lg:text-6xl text-center lg:text-start font-bold text-primary">
              {title}
            </h1>
            <p className="text-base text-center lg:text-start lg:text-xl text-gray-700">
              {description}
            </p>
            <div className="flex flex-col gap-4 items-center lg:items-start text-gray-800">
              <p className="flex flex-row gap-2 text-base lg:text-xl items-center">
                <MdAlternateEmail /> {email}
              </p>
              <p className="flex flex-row gap-2 text-base lg:text-xl items-center">
                <FaPhone /> {phone}
              </p>
              <p className="flex flex-row gap-2 text-base lg:text-xl items-start text-center lg:text-left whitespace-pre-line">
                <FaLocationDot className="mt-1 flex-shrink-0" /> {address}
              </p>
            </div>
          </div>

          <div className="max-w-3xl rounded-xl bg-gray-950 p-10 h-auto text-white">
            <h2 className="text-3xl font-bold my-4">Get in Touch</h2>
            <p className="text-xl my-4 text-gray-300">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full text-white bg-gray-900 border-gray-700 focus:border-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full text-white bg-gray-900 border-gray-700 focus:border-primary"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered w-full text-white bg-gray-900 border-gray-700 focus:border-primary"
                required
              />
              <textarea
                name="message"
                className="textarea textarea-bordered h-52 text-white bg-gray-900 border-gray-700 focus:border-primary"
                placeholder="How can we help?"
                required
              ></textarea>
              <button className="btn btn-primary w-full" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {showToast && (
          <div className="toast toast-end toast-bottom z-50">
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
