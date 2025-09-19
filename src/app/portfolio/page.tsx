import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { OutlookSection } from "@/components/Portfolio/OutlookSection";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <HeroSection />
      <OutlookSection />
    </main>
  );
}