import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import aboutceo from "../assets/about_ceo.jpg";
import abouthero from "../assets/abouthero.jpg";

export default function About() {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="container py-52 m-auto p-4">
        <h1 className="text-3xl lg:text-6xl text-primary font-bold my-10 text-center">
          The Passion Behind the Brilliance
        </h1>

        <div className="my-20 lg:my-40">
          <div className="flex flex-col items-center gap-4">
            <Image
              className="rounded-full shadow-xl w-60"
              src={aboutceo}
              alt="about Brilliance"
            ></Image>
            <h2 className="text-3xl font-bold">Ariana Darvish</h2>
            <p className="max-w-3xl text-center">
              With over 10 years of experience in advanced skincare, I
              specialize in providing safe and effective treatments, including
              Laser Hair Removal, IPL Photofacial, and Microneedling. As a
              certified technician, I’m committed to delivering personalized
              care and transformative results that help you look and feel your
              best. Your journey to radiant, confident skin starts here—book
              your consultation today!
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="text-3xl lg:text-6xl text-primary font-bold my-10 text-center">
            About Brilliance Skin and Laser
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="">
              <Image
                className="rounded-xl shadow-xl"
                src={abouthero}
                alt="about Brilliance"
              ></Image>
            </div>
            <div className="flex flex-col text-center lg:text-start max-w-3xl gap-4">
              <p className="text-base lg:text-xl">
                Brilliance Skin and Laser is a premier med spa dedicated to
                helping clients achieve radiant, healthy skin and renewed
                confidence. Specializing in advanced skincare treatments and
                laser therapies, Brilliance Skin and Laser combines cutting-edge
                technology with personalized care to deliver outstanding
                results. The spa’s mission is to empower clients by enhancing
                their natural beauty and providing customized solutions tailored
                to their unique needs and goals. Whether addressing skin
                rejuvenation, hair removal, or anti-aging concerns, Brilliance
                Skin and Laser offers a wide range of services designed to
                promote wellness and self-confidence.
              </p>
              <p className="text-base lg:text-xl">
                In addition to its core skincare treatments, Brilliance Skin and
                Laser features an array of specialized services to elevate the
                spa experience. These include medical-grade facials, chemical
                peels, microneedling, and state-of-the-art laser procedures for
                hair removal and pigmentation correction. The spa also provides
                tailored skincare consultations and product recommendations,
                ensuring that every client has access to a personalized regimen
                for long-lasting results. By combining the latest innovations in
                skincare with a commitment to excellence, Brilliance Skin and
                Laser delivers transformative outcomes in a relaxing and
                luxurious environment.
              </p>
              <p className="text-base lg:text-xl">
                What sets Brilliance Skin and Laser apart is its dedication to
                client satisfaction and safety. The spa’s team of experienced
                professionals ensures that every treatment is performed with
                precision and care, prioritizing the comfort and well-being of
                each client. With a focus on education and innovation, the team
                stays at the forefront of industry advancements to provide the
                most effective and safe treatments available. Whether you’re
                seeking to refresh your look or address specific skin concerns,
                Brilliance Skin and Laser is your trusted partner in achieving
                beauty and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
