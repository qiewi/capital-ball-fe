import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Header";
import { OutlookSection } from "@/components/Portfolio/OutlookSection";

export default function PortfolioPage() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <OutlookSection />
    </main>
  );
}