import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import Link from 'next/link'

function Testimonial() {
  return (
    <section className='container p-12 mb-40 m-auto'>
        <div className="">
            <div className="text-center my-20">
                <h2 className='text-4xl font-bold text-primary'>Hear what our clients have to say…</h2>
                <p className='text-xl mt-4'>Explore our services.</p>
            </div>
            <div className="">
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="bg-gray-950 text-white text-center rounded-xl p-8 max-w-96">
                        <p>“I have had a wonderful experience with Ariana ! She is professional, flexible, and has made the laser hair removal process comfortable. I have already experienced noticeable improvements after a couple of sessions and I am so happy with my results and experience here!”</p>
                        <div className="">
                            <h3 className="text-xl mt-4">— Maryam Amiri</h3>
                            <div className="flex gap-2 items-center mt-4 justify-center text-accent text-xl">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-950 text-white text-center rounded-xl p-8 max-w-96">
                        <p>“I love this place! Arianna is so good at her job. She is kind and has great customer service skills. I have been doing full body hair removal for 3 months  and am very happy with her services!”</p>
                        <div className="">
                            <h3 className="text-xl mt-4">— Lisa Martin</h3>
                            <div className="flex gap-2 items-center mt-4 justify-center text-accent text-xl">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-950 text-white text-center rounded-xl p-8 max-w-96">
                        <p>“I was a little nervous about my first spa day, but Ariana at Brilliance skin made me feel completely comfortable. She really listened to my needs and provided a customized treatment.”</p>
                        <div className="">
                            <h3 className="text-xl mt-4">— Sherry Haile</h3>
                            <div className="flex gap-2 items-center mt-4 justify-center text-accent text-xl">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Link target='_blank' className='btn btn-outline' href={'https://www.google.com/maps/place/Brilliance+Skin+and+Laser/@33.0534268,-96.7994774,17z/data=!4m8!3m7!1s0x864c2331271e8601:0x4d54928f7a88ad8b!8m2!3d33.0534223!4d-96.7969025!9m1!1b1!16s%2Fg%2F11y8g6sygx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'} passHref>View More Reviews</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial