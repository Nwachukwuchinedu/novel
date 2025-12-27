import HeroSection from '@/components/hero-section';
import StoryGrid from '@/components/story-grid';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FeaturesSection } from '@/components/features-section';
import { NewsletterSection } from '@/components/newsletter-section';
import { TestimonialsSection } from '@/components/testimonials-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 pb-20 relative">
      {/* Uneven Grid Background - Faded & Limited */}
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-grid-zinc pointer-events-none z-0 opacity-100 dark:opacity-80" />

      <SiteHeader />
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent z-50 opacity-50" />
      <HeroSection />
      <FeaturesSection />
   
      <StoryGrid />
         {/* Another Grid patch for Testimonials */}
      <div className="relative">
        <div className="absolute inset-0 bg-grid-zinc pointer-events-none z-0 opacity-50" />
        <TestimonialsSection />
      </div>
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
