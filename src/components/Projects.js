import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import SkeletonLoader from './SkeletonLoader';
import ProjectModal from './ProjectModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "Tailwind CSS"],
      features: [
        "User Authentication & Authorization",
        "Real-time Inventory Management",
        "Secure Payment Processing",
        "Advanced Admin Dashboard",
        "Order Tracking System",
        "Product Reviews & Ratings"
      ],
      process: [
        {
          title: "Requirements Analysis",
          description: "Conducted thorough market research and gathered client requirements to define project scope"
        },
        {
          title: "Design & Architecture",
          description: "Created wireframes, user flows, and designed scalable system architecture"
        },
        {
          title: "Frontend Development",
          description: "Built responsive UI with React and implemented state management with Redux"
        },
        {
          title: "Backend Integration",
          description: "Developed RESTful APIs and integrated MongoDB for data persistence"
        }
      ],
      challenges: [
        {
          problem: "Complex State Management",
          solution: "Implemented Redux with middleware for efficient state handling and real-time updates"
        },
        {
          problem: "Payment Security",
          solution: "Integrated Stripe with custom security measures and error handling"
        }
      ],
      liveUrl: "https://github.com/dainwi",
      githubUrl: "https://github.com/dainwi"
    },
    {
      title: "Task Management System",
      description: "A collaborative project management platform with real-time updates, team collaboration features, and automated task tracking.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["Next.js", "PostgreSQL", "WebSocket", "Prisma", "Tailwind CSS", "TypeScript"],
      features: [
        "Real-time Collaboration",
        "Task Dependencies",
        "Time Tracking",
        "Team Management",
        "File Sharing",
        "Progress Analytics"
      ],
      process: [
        {
          title: "Planning Phase",
          description: "Defined project scope and created detailed technical specifications"
        },
        {
          title: "Database Design",
          description: "Designed efficient database schema with Prisma and PostgreSQL"
        },
        {
          title: "Frontend Implementation",
          description: "Developed responsive UI with Next.js and TypeScript"
        },
        {
          title: "Real-time Features",
          description: "Implemented WebSocket for live updates and collaboration"
        }
      ],
      challenges: [
        {
          problem: "Real-time Synchronization",
          solution: "Implemented WebSocket with custom state reconciliation"
        },
        {
          problem: "Data Consistency",
          solution: "Developed robust error handling and data validation systems"
        }
      ],
      liveUrl: "https://github.com/dainwi",
      githubUrl: "https://github.com/dainwi"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that processes and visualizes large datasets with machine learning insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["Python", "React", "TensorFlow", "MySQL", "Docker", "AWS"],
      features: [
        "Machine Learning Models",
        "Real-time Data Processing",
        "Interactive Visualizations",
        "Automated Reports",
        "Custom Alerts",
        "Data Export Options"
      ],
      process: [
        {
          title: "Data Architecture",
          description: "Designed scalable data processing pipeline and storage solutions"
        },
        {
          title: "ML Model Development",
          description: "Implemented and trained machine learning models for predictions"
        },
        {
          title: "Frontend Development",
          description: "Created interactive dashboards with React and D3.js"
        },
        {
          title: "Cloud Deployment",
          description: "Deployed using Docker containers on AWS infrastructure"
        }
      ],
      challenges: [
        {
          problem: "Large Dataset Processing",
          solution: "Implemented efficient data processing with Python multiprocessing"
        },
        {
          problem: "Real-time Analysis",
          solution: "Developed streaming data pipeline with Apache Kafka"
        }
      ],
      liveUrl: "https://github.com/dainwi",
      githubUrl: "https://github.com/dainwi"
    }
  ];

  useEffect(() => {
    try {
      setTimeout(() => setIsLoading(false), 1000);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return (
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-600 dark:text-red-400">
            Error loading projects. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <SkeletonLoader type="title" count={1} />
          <div className="mt-8">
            <SkeletonLoader type="text" count={1} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map(i => (
              <div key={i}>
                <SkeletonLoader type="image" count={1} />
                <div className="mt-4">
                  <SkeletonLoader type="text" count={3} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise across different technologies
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects?.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg 
                         cursor-pointer transform transition-transform duration-300"
                onClick={() => project && setSelectedProject(project)}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-700">
                  {project?.image && (
                    <OptimizedImage
                      src={project.image}
                      alt={project.title || 'Project Image'}
                      className="object-cover w-full h-full"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {project?.title || 'Untitled Project'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {project?.description || 'No description available'}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 
                                 text-indigo-600 dark:text-indigo-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.technologies?.length > 3 && (
                      <span className="px-2 py-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
} 