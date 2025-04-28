import About from '@/components/About';
import Experience from '@/components/Experience';
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
    </main>
  );
}
