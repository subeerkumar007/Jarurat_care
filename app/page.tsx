import HeroBanner from "../components/herobanner";
import Features from "../components/Features";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}
