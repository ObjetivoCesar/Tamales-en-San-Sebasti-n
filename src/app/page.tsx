import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import CafeteriaSection from '@/components/CafeteriaSection';
import AuthoritySection from '@/components/AuthoritySection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VideoSection />
      <ProductShowcase />
      <CafeteriaSection />
      <TestimonialsSection />
      <AuthoritySection />
      <Footer />
    </main>
  );
}
