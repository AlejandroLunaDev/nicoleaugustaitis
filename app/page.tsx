// pages/Home.tsx

import {
  Hero,
  About,
  Reviews,
  InstagramFeed,
  InfoTeraphy,
  Faqs,
  Contact,
  Footer
} from '@/features';

export default function Home() {
  return (
    <section className='pt-16'>
      <Hero />
      <About />
      <Reviews />
      <InstagramFeed />
      <InfoTeraphy />
      <Faqs />
      <Contact />
      <Footer />
    </section>
  );
}
