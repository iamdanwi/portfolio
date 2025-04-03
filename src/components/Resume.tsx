'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const experiences = [

  {
    title: 'Full-stack Developer Intern',
    company: 'Renderverse',
    duration: 'February 2025 - Present',
    description: [
      'Led development of scalable web applications',
      'Implemented microservices architecture',
      'Optimized frontend performance and backend efficiency',
    ],
  },
  {
    title: 'Full-stack Developer Intern',
    company: 'Lawazia Tech',
    duration: 'January 2025 - February 2025',
    description: [
      'Developed responsive web applications',
      'Collaborated with cross-functional teams',
      'Implemented RESTful APIs and database integrations',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: 'TripleHash',
    duration: 'December 2024 - March 2025',
    description: [
      'Developed responsive web applications',
      'Worked on full-stack development projects',
      'Collaborated with development team on feature implementation',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Galgotias University',
    duration: '2024 - Present',
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Government Polytechnic Ranchi',
    duration: '2020 - 2023',
  },
];

const Resume = () => {
  return (
    <section id="about" className="py-16 px-4">
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
          About Me & Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-[#222] font-[family-name:var(--font-poppins)] leading-relaxed font-semibold">
              Hi there! I&apos;m Dainwi Kumar, a passionate Full-stack Developer
              with a knack for building scalable, high-performance applications.
              My expertise spans frontend and backend technologies, ensuring
              seamless user experiences.
            </p>
          </motion.div>

          <div className="relative border-l-2 border-gray-200 ml-3">
            <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-lustria)] text-[#333] pl-6">
              Professional Experience
            </h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 ml-6"
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px]" />
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#222]">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-[#222] font-[family-name:var(--font-poppins)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-lustria)] text-[#333] pl-6 mt-12">
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 ml-6"
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px]" />
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-[#222]">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
