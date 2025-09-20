import { HeroSection } from "@/components/layout/HeroSection";
import { CharacterSection } from "@/components/About/CharacterSection";
import { ProfileSection } from "@/components/About/ProfileSection";
import { Navbar } from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        videoSrc="/videos/video-2.mp4"
        title="The CapitalBall Way."
        subtitle="Discover the story behind our commitment to building lasting wealth and meaningful relationships"
      />
      <CharacterSection />
      <ProfileSection />
    </main>
  );
}