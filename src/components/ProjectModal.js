import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import OptimizedImage from './OptimizedImage';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="min-h-screen px-4 py-12"
          onClick={e => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video relative">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm
                         hover:bg-white/20 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 
                                 dark:text-indigo-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-600 dark:text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Development Process
                </h3>
                <div className="space-y-4">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 
                                    dark:bg-indigo-900/30 flex items-center justify-center 
                                    text-indigo-600 dark:text-indigo-400 font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {project.challenges && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Challenges & Solutions
                  </h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl"
                      >
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                          Challenge: {challenge.problem}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Solution: {challenge.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                           transition-colors"
                >
                  View Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 
                           dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 
                           transition-colors"
                >
                  View Source Code
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 