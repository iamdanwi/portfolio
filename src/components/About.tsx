import { Badge } from './ui/badge';

const About = () => {
  return (
    <section className="my-8">
      <h2 className="font-bold text-3xl font-raleway mb-4">About Me</h2>
      <div className="space-y-3 md:text-lg">
        <p>
          Hello! I&apos;m Dainwi Choudhary, a{' '}
          <Badge className="md:text-lg">Full-stack &amp; iOS Developer</Badge>{' '}
          specializing in high-performance applications.
        </p>
        <p>
          I combine Next.js with FastAPI for web, and Swift with SwiftUI for
          mobile, delivering seamless experiences across all platforms.
        </p>
        {/* <p>
          With expertise in ARKit and Combine, I create immersive AR features
          and reactive interfaces that keep pace with the latest innovations
          like iOS 18.
        </p> */}
      </div>
    </section>
  );
};

export default About;
