interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Project Manager',
    company: 'Secpen Labs',
    duration: 'May 2025 - Present',
    description: [
      'Managed cybersecurity projects from planning to deployment',
      'Coordinated cross-functional teams to meet delivery milestones',
      'Contributed to open-source initiatives under Secpen Labs',
    ],
  },
  {
    id: 2,
    title: 'Full-stack Developer Intern',
    company: 'Renderverse',
    duration: 'February 2025 - May 2025',
    description: [
      'Led development of scalable web applications',
      'Implemented microservices architecture',
      'Optimized frontend performance and backend efficiency',
    ],
  },
  {
    id: 3,
    title: 'Full-stack Developer Intern',
    company: 'Lawazia Tech',
    duration: 'January 2025 - February 2025',
    description: [
      'Developed responsive web applications',
      'Collaborated with cross-functional teams',
      'Implemented RESTful APIs and database integrations',
    ],
  },
  {
    id: 4,
    title: 'Full-stack Developer',
    company: 'TripleHash',
    duration: 'December 2023 - March 2024',
    description: [
      'Developed responsive web applications',
      'Worked on full-stack development projects',
      'Collaborated with development team on feature implementation',
    ],
  },
];

export default function ExperienceShowcase() {
  return (
    <section className="my-6">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>

      <div className="space-y-12">
        {experiences.map(exp => (
          <div key={exp.id} className="group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold">
                  {exp.id}. {exp.title}
                </h3>
                <p className="text-gray-300">{exp.company}</p>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                {exp.duration}
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
