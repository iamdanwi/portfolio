import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Process from '@/components/Process';
import Blog from '@/components/Blog';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-2">
        <Hero />
        <TechStack />
        <Process />
        <Projects />
        <Resume />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
