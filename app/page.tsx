// pages/Home.tsx

import {
  Hero,
  About,
  Reviews,
  InstagramFeed,
  InfoTerapy,
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
      <InfoTerapy />
      <Faqs />
      <Contact />
      <Footer />
    </section>
  );
}
