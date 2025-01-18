import ContactComp from "../components/ContactComp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="">
        <Navbar />
      <div className="container py-20 m-auto">
        <div className="">
          <ContactComp></ContactComp>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
