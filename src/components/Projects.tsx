'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: 'Task Management App',
    description:
      'A full-stack application for managing tasks and projects efficiently',
    image: '/project1.svg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    liveUrl: 'https://task-app.demo',
    githubUrl: 'https://github.com/username/task-app',
  },
  {
    title: 'E-commerce Platform',
    description:
      'Modern e-commerce solution with real-time inventory management',
    image: '/project2.jpg',
    tech: ['Next.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://shop.demo',
    githubUrl: 'https://github.com/username/shop',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="py-16 px-4">
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
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-lustria)] text-[#333]">
                  {project.title}
                </h3>
                <p className="mb-4 font-[family-name:var(--font-poppins)] text-[#222] font-semibold">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={project.liveUrl}>
                    <Button variant="default" className="cursor-pointer">
                      View Live
                    </Button>
                  </Link>
                  <Link href={project.githubUrl}>
                    <Button variant="outline" className="cursor-pointer">
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
