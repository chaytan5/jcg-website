import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

import {
  FaDiscord,
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaPatreon,
  FaTelegram,
} from "react-icons/fa6";
import InfoSection from "@/components/InfoSection";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ReviewSection from "@/components/ReviewSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaFileDownload from "@/components/CtaFileDownload";
import CourseInfoSection from "@/components/CourseInfoSection";
import PricingSection from "@/components/PricingSection";
import JamesInfoSection from "@/components/JamesInfoSection";
import TopicsSection from "@/components/TopicsSection";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-[90px] scroll-smooth bg-primary text-white md:space-y-32">
        <HeroSection />
        <InfoSection />
        <VideoSection />
        <ReviewSection />
        <AdvantagesSection />
        <TestimonialSection />
        <CtaFileDownload />
        <CourseInfoSection />
        <PricingSection />
        <JamesInfoSection />
        <TopicsSection />
        <CTA />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
