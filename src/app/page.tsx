import { Navbar } from "@/components/layout/Header";
import { HeroSection } from "@/components/layout/HeroSection";
import { ContentSection } from "@/components/Home/ContentSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ContentSection
        variant="right"
        contentType="video"
        videoLink="https://www.youtube.com/embed/cd-w9H0G6nQ?si=O4c-ms4hWahwaFZd"
        title="Welcome to a journey shaped by foresight"
        subtitle="AT A GLANCE"
        description={[
          "To see beyond the noise of today and focus on what truly matters tomorrow. Our belief that every decision, every asset, every opportunity plays a part in building not just wealth — but a legacy.",
          "At Capitalball, we believe discipline and timing are everything. The agility to act when opportunities arise. The patience to construct a portfolio that reflects the ambitions. Because in investing, every moment counts."
        ]}
        videoTitle="Becoming Warren Buffett Interview | Rule #1: Never Lose Money"
        videoCaption="Strategy on Building Wealth"
      />
      <ContentSection
        bgColor="gray"
        variant="left"
        contentType="image"
        title="Insights you'll find deeply meaningful"
        subtitle="OUR INSIGHTS"
        description={[
          "Building, protecting, and passing on wealth requires more than just market knowledge.",
          "It calls for a deep understanding of your goals, your family, and the future you want to shape.",
          "At Capitalball, we pair disciplined analysis with a thoughtful view of the world — helping you navigate change, uncover opportunities, and stay ahead of the curve. Our commitment is to craft strategies that not only perform today, but endure across generations."
        ]}
        imageSrc="/images/Home/content-1.png"
        imageAlt="Professional consultation meeting"
      />
    </main>
  );
}
