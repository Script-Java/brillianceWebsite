import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import About from "./components/About";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <Hero />
        <About></About>
        <Services />
        <Testimonial></Testimonial>
        <Footer />
      </div>
    </div>
  );
}
