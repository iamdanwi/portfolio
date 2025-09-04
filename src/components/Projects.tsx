/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { Badge } from './ui/badge';
// import { Separator } from './ui/separator';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Shiv PG House',
    description:
      'Paying Guest accommodation offering fully furnished rooms with attached washrooms, 24×7 electricity, flexible rental options—available for both boys and girls in Dankaur.',
    link: 'https://shivpghouse.com/',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'ShadcnUi'],
  },
  {
    title: 'Spidefy',
    description:
      'Creative digital agency offering full-stack design and development: custom branding, UI/UX design, landing pages, CMS/CRM solutions, plus performance optimization (speed, SEO, security). Transparent, collaborative process—Discover→Design→Develop→Launch & Optimize.',
    link: 'https://spidefy-final.vercel.app/',
    techStack: ['React', 'Laravel', 'WordPress', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'SoftBro-D',
    description:
      'Organic, nature-inspired digital agency offering UI/UX design, responsive web development, digital strategy, brand identity—known for flowing, natural aesthetics and client alignment.',
    link: 'https://soft-bro-d.vercel.app/',
    techStack: ['Next.js', 'React', 'CSS'], // adjust if specifics known
  },

  {
    title: 'GreenThumb',
    description:
      'A gardening guide offering detailed vegetable care tips, pest control, and growing info with an easy search feature.',
    link: 'https://green-thumb-chi.vercel.app',
    // gitHub: 'https://github.com/iamdanwi/green-thumb',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Finius (prototype)',
    description:
      'Placeholder interface for a personal finance app; login form only, no visible functionality features.',
    link: 'https://finius-seven.vercel.app/',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
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

              {/* <Link
                href={project.gitHub}
                className="inline-flex items-center gap-2 text-sm text-white bg-gray-800 hover:bg-gray-900 px-3 py-1 rounded"
              >
                <FaGithub />
                GitHub
              </Link> */}
            </div>

            {/* <Separator className="my-4" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
