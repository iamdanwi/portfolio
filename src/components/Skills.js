import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, ServerIcon, CommandLineIcon, CpuChipIcon,
  WindowIcon, CloudIcon, ShieldCheckIcon, PaintBrushIcon 
} from '@heroicons/react/24/outline';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <WindowIcon className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", proficiency: "Advanced", projects: 15 },
        { name: "Next.js", proficiency: "Intermediate", projects: 10 },
        { name: "Tailwind CSS", proficiency: "Advanced", projects: 20 },
        { name: "JavaScript", proficiency: "Advanced", projects: 25 }
      ]
    },
    {
      title: "Backend Development",
      icon: <ServerIcon className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", proficiency: "Intermediate", projects: 12 },
        { name: "MongoDB", proficiency: "Intermediate", projects: 10 },
        { name: "PostgreSQL", proficiency: "Intermediate", projects: 8 },
        { name: "PHP", proficiency: "Intermediate", projects: 5 }
      ]
    },
    {
      title: "Programming",
      icon: <CodeBracketIcon className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", proficiency: "Intermediate", projects: 8 },
        { name: "Java", proficiency: "Intermediate", projects: 6 },
        { name: "C++", proficiency: "Intermediate", projects: 5 },
        { name: "TypeScript", proficiency: "Intermediate", projects: 10 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <CloudIcon className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", proficiency: "Advanced", projects: 30 },
        { name: "Docker", proficiency: "Intermediate", projects: 5 },
        { name: "AWS", proficiency: "Intermediate", projects: 4 },
        { name: "Linux", proficiency: "Intermediate", projects: 15 }
      ]
    },
    {
      title: "System Architecture",
      icon: <CpuChipIcon className="h-8 w-8" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "System Design", proficiency: "Intermediate", projects: 8 },
        { name: "Microservices", proficiency: "Intermediate", projects: 5 },
        { name: "API Design", proficiency: "Intermediate", projects: 12 },
        { name: "Performance Optimization", proficiency: "Intermediate", projects: 10 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <PaintBrushIcon className="h-8 w-8" />,
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "Figma", proficiency: "Intermediate", projects: 10 },
        { name: "User Research", proficiency: "Intermediate", projects: 6 },
        { name: "Prototyping", proficiency: "Intermediate", projects: 8 },
        { name: "Design Systems", proficiency: "Intermediate", projects: 7 }
      ]
    }
  ];

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

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
            A comprehensive overview of my technical expertise and hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg group"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 
                            group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} 
                                text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                      className="group/skill relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium text-white rounded-full
                                     ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                      <div className="absolute right-0 top-0 opacity-0 group-hover/skill:opacity-100 
                                  transition-opacity text-xs text-slate-500 dark:text-slate-400">
                        {skill.projects} projects
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs", "GraphQL", "Redux", "Jest", "CI/CD", "Agile",
              "UI/UX Design", "Responsive Design", "Performance Optimization",
              "SEO", "Web Security", "Database Design"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 shadow-md
                         text-slate-700 dark:text-slate-300 text-sm font-medium
                         hover:transform hover:-translate-y-1 transition-transform"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 