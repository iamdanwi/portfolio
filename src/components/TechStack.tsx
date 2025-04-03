'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion, type Variants } from 'framer-motion';

const techStacks = [
  {
    title: 'React',
    description: 'Frontend library for building user interfaces',
    alt: 'reactjs',
    image: '/react.svg',
  },
  {
    title: 'Next.js',
    description: 'The React framework for production',
    alt: 'nextjs',
    image: '/nextjs.svg',
  },
  {
    title: 'TypeScript',
    description: 'JavaScript with syntax for types',
    alt: 'typescript',
    image: '/typescript.svg',
  },
  {
    title: 'Tailwind',
    description: 'Utility-first CSS framework',
    alt: 'tailwind',
    image: '/tailwind.svg',
  },
  {
    title: 'Node.js',
    description: 'JavaScript runtime environment',
    alt: 'nodejs',
    image: '/nodejs.svg',
  },
  {
    title: 'Express.js',
    description: 'Fast, unopinionated web framework',
    alt: 'expressjs',
    image: '/expressjs.svg',
  },
  {
    title: 'PostgreSQL',
    description: 'Advanced open source database',
    alt: 'postgresql',
    image: '/postgresql.svg',
  },
  {
    title: 'MongoDB',
    description: 'NoSQL database',
    alt: 'mongodb',
    image: '/mongodb.svg',
  },
  {
    title: 'FastAPI',
    description: 'Fast and modern API framework',
    alt: 'fastapi',
    image: '/fastapi.svg',
  },
  {
    title: 'Flask',
    description: 'Lightweight web framework',
    alt: 'flask',
    image: '/flask.svg',
  },
  {
    title: 'MySQL',
    description: 'Open source relational database',
    alt: 'mysql',
    image: '/mysql.svg',
  },
  {
    title: 'Firebase',
    description: 'Backend as a service',
    alt: 'firebase',
    image: '/firebase.svg',
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const TechStack = () => {
  return (
    <div id="skills" className="py-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-center mb-8 font-[family-name:var(--font-lustria)] text-[#333]"
        >
          Tools I Use Daily to Boost My Productivity
        </motion.h2>

        <TooltipProvider delayDuration={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {techStacks.map((techStack, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-center"
                  >
                    <Avatar className="h-24 w-24 transition-all duration-300 hover:scale-110 cursor-pointer bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg">
                      <AvatarImage
                        src={techStack.image}
                        alt={techStack.alt}
                        className="p-2"
                      />
                      <AvatarFallback className="text-sm">
                        {techStack.title}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-white p-3 shadow-xl border border-gray-100">
                  <p className="font-medium mb-1 text-[#222]">
                    {techStack.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {techStack.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </motion.div>
    </div>
  );
};

export default TechStack;
