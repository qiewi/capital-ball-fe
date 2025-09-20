import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Header";
import { OutlookSection } from "@/components/Portfolio/OutlookSection";

export default function PortfolioPage() {
  return (
    <main>
      <Navbar/>
      <HeroSection
        videoSrc="/videos/video-3.mp4"
        title="Investment Playbook."
        subtitle="Explore our strategic approach to building diversified portfolios that stand the test of time"
      />
      <OutlookSection />
    </main>
  );
}