import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main>
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Experience />
      <Separator />
      <Projects />
    </main>
  );
}
