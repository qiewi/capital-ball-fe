import { HeroSection } from "@/components/layout/HeroSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Navbar } from "@/components/layout/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <HeroSection />
      <ContactSection />
    </main>
  );
}