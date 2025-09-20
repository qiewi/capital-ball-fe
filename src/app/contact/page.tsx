import { HeroSection } from "@/components/layout/HeroSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Navbar } from "@/components/layout/Header";

export default function ContactPage() {
  return (
    <main>
      <Navbar/>
      <HeroSection
        videoSrc="/videos/video-1.mp4"
        title="Start the Conversation."
        subtitle="Ready to start your wealth-building journey? Let's discuss how we can help you achieve your financial goals"
      />
      <ContactSection />
    </main>
  );
}