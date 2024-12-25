import Audio from "@/components/Audio";
import CTA from "@/components/CTA";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import MoreFeatures from "@/components/MoreFeatures";
import Navbar from "@/components/Navbar";
import TrendingTools from "@/components/TrendingTools";
import WhyWe from "@/components/WhyWe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TrendingTools />
      <Images />
      <Audio />
      <MoreFeatures />
      {/* <CTA2 /> */}
      {/* <Connectivity /> */}
      <WhyWe />
      <CTA />
      <Footer />
    </>
  );
}
