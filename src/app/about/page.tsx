import { HeroSection } from "@/components/layout/HeroSection";
import { CharacterSection } from "@/components/About/CharacterSection";
import { ProfileSection } from "@/components/About/ProfileSection";
import { Navbar } from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CharacterSection />
      <ProfileSection />
    </main>
  );
}