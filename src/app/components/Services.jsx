import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'


function Services() {
  return (
    <section className="container m-auto p-12 my-40">
        <div className="">
            <h2 className="text-3xl font-bold text-center uppercase">Our Services</h2>
            <div className="">
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <div className="flex flex-col lg:flex-row justify-center text-center items-center bg-gray-950 p-8 rounded-xl text-white gap-8 max-w-2xl">
                        <Image src={img1} alt="service" className="rounded-full max-w-56" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold">Laser Hair Removal</h3>
                            <p>Achieve smooth, hair-free skin with laser hair removal. This safe and effective treatment targets hair follicles to reduce unwanted hair growth, leaving your skin silky and flawless. Perfect for long-lasting results and a hassle-free routine.</p>
                            <div className="flex justify-center items-center gap-4">
                                <Link className="btn btn-primary" href={'https://www.vagaro.com/brilliantskinandlazer'} passHref>Book Appointment</Link>
                                <Link className="btn btn-secondary" href={'/specials'} passHref>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center text-center items-center bg-gray-950 p-8 rounded-xl text-white gap-8 max-w-2xl">
                        <Image src={img2} alt="service" className="rounded-full max-w-56" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold">IPL Photo Facial</h3>
                            <p>Achieve smooth, hair-free skin with laser hair removal. This safe and effective treatment targets hair follicles to reduce unwanted hair growth, leaving your skin silky and flawless. Perfect for long-lasting results and a hassle-free routine.</p>
                            <div className="flex justify-center items-center gap-4">
                                <Link className="btn btn-primary" href={'https://www.vagaro.com/brilliantskinandlazer'} passHref>Book Appointment</Link>
                                <Link className="btn btn-secondary" href={'/specials'} passHref>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center text-center items-center bg-gray-950 p-8 rounded-xl text-white gap-8 max-w-2xl">
                        <Image src={img3} alt="service" className="rounded-full max-w-56" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold">Skinpen Microneedling</h3>
                            <p>Achieve smooth, hair-free skin with laser hair removal. This safe and effective treatment targets hair follicles to reduce unwanted hair growth, leaving your skin silky and flawless. Perfect for long-lasting results and a hassle-free routine.</p>
                            <div className="flex justify-center items-center gap-4">
                                <Link className="btn btn-primary" href={'https://www.vagaro.com/brilliantskinandlazer'} passHref>Book Appointment</Link>
                                <Link className="btn btn-secondary" href={'/specials'} passHref>Learn More</Link>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </section>
  )
}

export default Services