import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import Manifesto from "@/components/site/Manifesto";
import Capabilities from "@/components/site/Capabilities";
import ProductDeepDives from "@/components/site/ProductDeepDives";
import IndustriesMarquee from "@/components/site/IndustriesMarquee";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import About from "@/components/site/About";
import EnquiryForm from "@/components/site/EnquiryForm";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main data-testid="home-main" className="relative">
      <Header />
      <Hero />
      <TrustStrip />
      <Manifesto />
      <Capabilities />
      <ProductDeepDives />
      <IndustriesMarquee />
      <WhyChooseUs />
      <About />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
