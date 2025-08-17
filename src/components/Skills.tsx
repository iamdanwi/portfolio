import { Badge } from '@/components/ui/badge';

const skills = [
  // Frontend
  { title: 'React' },
  { title: 'Next.js' },
  { title: 'TypeScript' },
  { title: 'Tailwind CSS' },
  { title: 'jQuery' },

  // Backend
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'PHP' },
  { title: 'FastAPI' },
  { title: 'Flask' },

  // Databases
  { title: 'MySQL' },
  { title: 'PostgreSQL' },
  { title: 'MongoDB' },
  { title: 'Firebase' },

  // AI & Integration
  { title: 'AI/ML Integration' },
  { title: 'REST APIs' },
  { title: 'GraphQL' },
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
