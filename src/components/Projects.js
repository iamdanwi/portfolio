import { motion } from 'framer-motion';
import ImageLoader from '../components/ImageLoader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "Full-stack e-commerce platform with admin dashboard, user authentication, and payment integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      tags: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
      link: "https://github.com/dainwi",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Order Management"]
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates and team collaboration features",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind CSS"],
      link: "https://github.com/dainwi",
      features: ["Real-time Updates", "Team Collaboration", "Task Analytics", "File Sharing"]
    },
    {
      title: "Social Media Analytics",
      description: "Python-based social media analytics tool with data visualization and sentiment analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "React", "MySQL", "Data Analysis"],
      link: "https://github.com/dainwi",
      features: ["Sentiment Analysis", "Data Visualization", "Report Generation"]
    },
    {
      title: "Inventory Management",
      description: "Java-based inventory management system with barcode scanning and stock tracking",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "REST API"],
      link: "https://github.com/dainwi",
      features: ["Barcode Scanning", "Stock Tracking", "Supplier Management"]
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather forecast application with location-based services",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "APIs", "Geolocation"],
      link: "https://github.com/dainwi",
      features: ["Location Services", "Real-time Updates", "5-Day Forecast"]
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with video courses and progress tracking",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      tags: ["React", "PHP", "MySQL", "Redux"],
      link: "https://github.com/dainwi",
      features: ["Video Streaming", "Progress Tracking", "Quiz System"]
    }
  ];

  return (
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-700">
                <ImageLoader
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 
                               text-indigo-600 dark:text-indigo-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mb-4 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 
                           hover:underline font-medium"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects; 