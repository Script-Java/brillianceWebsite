import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import img4 from "../assets/s4.jpg";
import img5 from "../assets/s5.jpg";
import img6 from "../assets/7.jpg";
import Link from "next/link";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";

export default function Specials() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="py-52 container m-auto ">
          <div className="">
            <h1 className="text-3xl lg:text-6xl text-primary my-10 font-bold text-center">
              Specials Deals!
            </h1>

            <div className="flex gap-4 justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="card bg-gray-950 text-white w-96 shadow-xl">
                  <figure>
                    <Image src={img1} alt="special1"></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Laser Hair Removal Full Body (Six Sessions)
                    </h2>
                    <p>
                      Achieve smooth, hair-free skin with our Laser Hair Removal
                      Full Body (Six Sessions), a safe and effective treatment
                      designed to provide long-lasting results for all skin
                      types.
                    </p>
                    <div className="flex gap-4">
                      <span className="text-xl line-through">$ 1900.00</span>
                      <span className="text-xl text-primary">$ 1599.00</span>
                    </div>
                    <div className="card-actions mt-4 justify-start">
                      <Link
                        className="btn btn-secondary px-12"
                        href={
                          "https://www.vagaro.com/brilliantskinandlazer"
                        }
                        passHref
                      >
                        Schedule Appointment
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card bg-gray-950 text-white w-96 shadow-xl">
                  <figure>
                    <Image src={img2} alt="special2"></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Laser Hair Removal Beach Body (Six Sessions)
                    </h2>
                    <p>
                      Get beach-ready with our Laser Hair Removal Beach Body
                      (Six Sessions), targeting key areas for a smooth, flawless
                      look that lasts all season.
                    </p>
                    <div className="flex gap-4">
                      <span className="text-xl line-through">$ 1200.00</span>
                      <span className="text-xl text-primary">$ 999.00</span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link
                        className="btn btn-secondary px-12"
                        href={
                          "https://www.vagaro.com/brilliantskinandlazer"
                        }
                        passHref
                      >
                        Schedule Appointment
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card bg-gray-950 text-white w-96 shadow-xl">
                  <figure>
                    <Image src={img4} alt="special3"></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Laser Hair Removal Half Arm and Half Legs (Six Sessions)
                    </h2>
                    <p>
                      Enjoy effortless smoothness with our Laser Hair Removal
                      Half Arm and Half Legs (Six Sessions), expertly designed
                      for long-lasting results in key areas.
                    </p>
                    <div className="flex gap-4">
                      <span className="text-xl line-through">$ 799.00</span>
                      <span className="text-xl text-primary">$ 599.00</span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link
                        className="btn btn-secondary px-12"
                        href={
                          "https://www.vagaro.com/brilliantskinandlazer"
                        }
                        passHref
                      >
                        Schedule Appointment
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card bg-gray-950 text-white w-96 shadow-xl">
                  <figure>
                    <Image src={img3} alt="special4"></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">IPL Photo Facial Face</h2>
                    <p>
                      Revitalize your skin with our IPL Photo Facial Face, a
                      non-invasive treatment that reduces discoloration, sun
                      damage, and signs of aging for a radiant, even complexion.
                    </p>
                    <div className="flex gap-4">
                      <span className="text-xl line-through">$ 129.00</span>
                      <span className="text-xl text-primary">$ 99.00</span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link
                        className="btn btn-secondary px-12"
                        href={
                          "https://www.vagaro.com/brilliantskinandlazer"
                        }
                        passHref
                      >
                        Schedule Appointment
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card bg-gray-950 text-white w-96 shadow-xl">
                  <figure>
                    <Image src={img6} alt="special1"></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Skinpen Microneedling Face</h2>
                    <p>
                      Rejuvenate your skin with our SkinPen Microneedling Face
                      treatment, designed to boost collagen production, reduce
                      fine lines, and improve texture for a smooth, glowing
                      complexion.
                    </p>
                    <div className="flex gap-4">
                      <span className="text-xl line-through">$ 299.00</span>
                      <span className="text-xl text-primary">$ 250.00</span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link
                        className="btn btn-secondary px-12"
                        href={
                          "https://www.vagaro.com/brilliantskinandlazer"
                        }
                        passHref
                      >
                        Schedule Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}