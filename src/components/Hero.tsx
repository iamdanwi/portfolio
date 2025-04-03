import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto mt-10 py-16 px-4 md:py-24 md:mt-0">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-8">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 max-w-2xl">
          <Badge className="w-fit text-sm bg-[#333] hover:bg-[#444] transition-colors">
            ✨ Available for Projects
          </Badge>

          <h1 className="font-[family-name:var(--font-lustria)] text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#333] to-[#555] bg-clip-text text-transparent">
            I build Websites & Apps that truly work for You.
          </h1>

          <p className="text-lg md:text-xl text-[#555] max-w-xl">
            Helping startups and brands to craft expressive and engaging
            solutions for their software needs.
          </p>

          <div className="flex gap-4 mt-2">
            <Link href="mailto:iamdainwichoudhary@gmail.com">
              <Button className="cursor-pointer px-8 py-6 text-lg bg-[#222] hover:bg-[#333] transition-all hover:scale-105">
                Book a Call
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" className="cursor-pointer px-8 py-6 text-lg border-[#333] text-[#333] hover:bg-[#f5f5f5] transition-all hover:scale-105">
                View Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent to-[#33333320] rounded-full blur-sm"></div>
          <div className="relative">
            <Image
              src="/boy.png"
              height={400}
              width={400}
              alt="Dainwi Choudhary"
              className="hidden xl:block object-contain"
              priority
            />
            <Image
              src="/boy2.png"
              height={350}
              width={350}
              alt="Dainwi Choudhary"
              className="block xl:hidden object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;