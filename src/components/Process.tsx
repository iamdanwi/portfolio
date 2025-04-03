'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const processes = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Understanding your needs, goals, and project requirements through in-depth consultation.',
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'Creating detailed project roadmap, wireframes, and technical specifications.',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'Building your solution with clean, scalable code and regular progress updates.',
  },
  {
    step: '04',
    title: 'Testing',
    description:
      'Thorough quality assurance and performance optimization across devices.',
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'Deploying your project and providing necessary training and documentation.',
  },
];

const Process = () => {
  return (
    <div id="process" className="py-16 px-4">
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
          className="text-2xl md:text-3xl font-semibold text-center mb-12 font-[family-name:var(--font-lustria)] text-[#333]"
        >
          My Development Process
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-6 bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-6 bg-black text-white text-sm px-3 py-1 rounded-full">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2 font-[family-name:var(--font-lustria)] text-[#333]">
                {process.title}
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-[#222] font-semibold text-sm">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Process;
