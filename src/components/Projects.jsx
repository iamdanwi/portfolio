import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Task Management App",
    description: "A full-stack app to manage projects and tasks efficiently.",
    tech: ["FastAPI", "MongoDB", "React.js", "Tailwind CSS"],
    github: "https://github.com/iamdanwi/task-management-app",
    demo: "https://task-manager.dainwi.com",
  },
  {
    name: "Job Portal",
    description: "A job portal listing job openings from reputed companies.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/iamdanwi/job-portal",
    demo: "https://job-portal.dainwi.com",
  },
  {
    name: "Personal Blog Platform",
    description:
      "A blogging platform with authentication and real-time updates.",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/iamdanwi/blog-platform",
    demo: "https://blog.dainwi.com",
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing projects and skills.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/iamdanwi/portfolio",
    demo: "https://dainwi.com",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-[#0F1624] text-white font-mono p-8">
      {/* Blurry Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-40 blur-[120px] top-20 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-40 blur-[120px] bottom-20 right-10"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Sidebar - Project Info */}
        <div className="bg-[#1E2634] p-6 rounded-lg shadow-md">
          <div className="text-gray-400">// projects-info</div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Total Projects</span>
              </div>
              <div className="text-[#4CCD99]">{projects.length}+</div>
            </div>
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Tech Stack</span>
              </div>
              <div className="text-gray-300 text-sm">
                Full-stack, Cloud, Backend APIs, Frontend UI/UX.
              </div>
            </div>
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Experience</span>
              </div>
              <div className="text-gray-300 text-sm">
                Building projects for 4+ years.
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Project List */}
        <div className="md:col-span-2 bg-[#1E2634] p-6 rounded-lg">
          <div className="text-gray-400">// projects</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#252D3A] p-4 rounded-lg shadow-md"
              >
                <h3 className="text-white font-semibold">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#4CCD99] text-[#0F1624] px-3 py-1 rounded-md text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex space-x-4">
                  <Link
                    to={project.github}
                    target="_blank"
                    className="text-gray-300 hover:text-[#4CCD99]"
                  >
                    GitHub
                  </Link>
                  <Link
                    to={project.demo}
                    target="_blank"
                    className="text-gray-300 hover:text-[#4CCD99]"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
