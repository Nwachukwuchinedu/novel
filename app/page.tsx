import HeroSection from '@/components/hero-section';
import StoryGrid from '@/components/story-grid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent z-50 opacity-50" />
      <HeroSection />
      <StoryGrid />
    </main>
  );
}
