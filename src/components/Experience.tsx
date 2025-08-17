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
    company: 'SecPen Labs',
    duration: 'May 2025 - August 2025',
    description: [
      'Directed end-to-end execution of cybersecurity projects, from planning to deployment, ensuring timely delivery',
      'Led a cross-functional team of 6+ members, improving collaboration and reducing project delays by 20%',
      'Contributed to open-source cybersecurity initiatives, strengthening SecPen Labs’ developer community presence',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Renderverse',
    duration: 'February 2025 - May 2025',
    description: [
      'Built and deployed scalable web applications handling 5k+ concurrent users with MERN stack',
      'Implemented microservices architecture, reducing server downtime and improving deployment efficiency',
      'Optimized frontend rendering speed by 30% and backend query performance through caching and indexing',
    ],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Lawazia Tech',
    duration: 'January 2025 - February 2025',
    description: [
      'Developed responsive, mobile-first web applications improving client engagement by 25%',
      'Collaborated with designers and backend engineers to streamline feature rollouts',
      'Integrated RESTful APIs and database systems, reducing data retrieval latency by 15%',
    ],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'TripleHash',
    duration: 'January 2024 - June 2024',
    description: [
      'Developed and maintained full-stack features for enterprise-grade applications',
      'Improved system reliability by refactoring legacy codebases and implementing reusable components',
      'Collaborated with product and QA teams to release 10+ production-ready features within deadlines',
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
