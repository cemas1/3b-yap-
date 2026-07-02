import content from '@/data/content.json';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Showcase id="winsa" data={content.winsa_products} />
      <Showcase id="mirrors" data={content.mirrors} />
      <Contact />
    </main>
  );
}
