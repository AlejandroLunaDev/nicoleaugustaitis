import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import InfoTeraphy from "@/components/infoTeraphy/InfoTeraphy";
import InstagramFeed from "@/components/Instagram/InstagramFeed";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <section
    className="pt-16">
      <Hero />
      <About />
      <Reviews />
      <InstagramFeed />
      <InfoTeraphy />
    </section>
  );
}
