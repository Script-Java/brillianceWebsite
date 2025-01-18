import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Brilliance Skin and Laser",
              description: "A premier medspa offering advanced skin and beauty treatments in Plano, TX.",
              url: "https://www.brillianceskin.us/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5813 Preston Rd 554 Unit 202",
                addressLocality: "Plano",
                addressRegion: "TX",
                postalCode: "75093",
                addressCountry: "US",
              },
              image: "https://www.brillianceskin.us/images/s2.jpg", // Replace with your image URL
              telephone: "+1-469-450-0012", // Replace with your phone number
              priceRange: "$",
            }),
          }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.brillianceskin.us/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="medspa Plano, laser treatments, skin rejuvenation, Botox Plano, anti-aging treatments" />
        <meta name="author" content="Brilliance Skin and Laser" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About/>
        <Services />
        <Testimonial/>
        <Footer />
      </main>
    </div>
  );
}
