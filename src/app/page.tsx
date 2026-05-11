import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <WhoWeHelp />
        <WhyUs />
        <Process />
        <Testimonials />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
