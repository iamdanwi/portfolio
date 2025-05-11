import Link from 'next/link';
import { Badge } from './ui/badge';
// import { Separator } from './ui/separator';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'GreenThumb',
    description:
      'A gardening guide offering detailed vegetable care tips, pest control, and growing info with an easy search feature.',
    link: 'https://green-thumb-chi.vercel.app',
    gitHub: 'https://github.com/iamdanwi/green-thumb',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'FreshGroceries',
    description:
      'Fresh Groceries is an online platform offering fresh produce, daily essentials, and convenient delivery with easy, user-friendly navigation.',
    link: 'https://fresh-groceries.vercel.app',
    gitHub: 'https://github.com/iamdanwi/ecommerce',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'ShadcnUi'],
  },
];

const Projects = () => {
  return (
    <section className="my-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mt-13">
            <h3 className="text-lg font-semibold mb-2">
              {index + 1}. {project.title}
            </h3>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div>
              {project.techStack.map((tech, index) => (
                <Badge key={index} className="mr-2 mb-4">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Stylish link buttons with icons */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href={project.link}
                className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              >
                <FaExternalLinkAlt />
                Live
              </Link>

              <Link
                href={project.gitHub}
                className="inline-flex items-center gap-2 text-sm text-white bg-gray-800 hover:bg-gray-900 px-3 py-1 rounded"
              >
                <FaGithub />
                GitHub
              </Link>
            </div>

            {/* <Separator className="my-4" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
