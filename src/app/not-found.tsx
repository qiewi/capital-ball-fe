import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Header";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        videoSrc="/videos/video-2.mp4"
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist."
      />
    </main>
  );
}