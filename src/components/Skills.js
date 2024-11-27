import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "PHP", "MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "AJAX", "jQuery", "REST APIs", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and programming knowledge
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 
                             dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 