import { Badge } from '@/components/ui/badge';

const skills = [
  {
    title: 'React',
  },
  {
    title: 'Next.js',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'Tailwind',
  },
  {
    title: 'SwiftUI',
  },
  {
    title: 'SwiftData',
  },
  {
    title: 'SwiftUI',
  },
  {
    title: 'CoreData',
  },
  {
    title: 'Node.js',
  },
  {
    title: 'Express.js',
  },
  {
    title: 'PostgreSQL',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'FastAPI',
  },
  {
    title: 'Flask',
  },
  {
    title: 'MySQL',
  },
  {
    title: 'Firebase',
  },
];

const Skills = () => {
  return (
    <div>
      <section className="my-6">
        <h2 className="font-bold text-2xl font-raleway mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <Badge className="text-black text-sm  font-syne">
                {skill.title}
              </Badge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
