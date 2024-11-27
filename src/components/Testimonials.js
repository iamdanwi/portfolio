import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Startup",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "Working with Dainwi was an excellent experience. Their technical expertise and problem-solving skills are outstanding.",
      company: "TechCorp Inc."
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Dainwi delivered our project on time and exceeded our expectations. Their attention to detail is remarkable.",
      company: "Innovation Labs"
    },
    {
      name: "Mike Johnson",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "The full-stack solutions provided by Dainwi have significantly improved our business processes.",
      company: "Digital Solutions"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
            Client Testimonials
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 
                       dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 
                       dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 