import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const personalInfo = {
    name: "Dainwi Kumar",
    role: "Full-stack Developer",
    email: "danwichoudhary@gmail.com",
    phone: "+91 9905308845",
    location: "India",
    linkedin: "https://www.linkedin.com/in/dainwi-choudhary-80612a325/",
    github: "https://github.com/iamdanwi",
  };

  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Chakra UI",
    ],
    backend: ["Node.js", "Express.js", "Flask", "FastAPI"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
    orm: ["Prisma", "SQLAlchemy", "Mongoose"],
    baas: ["Firebase", "Supabase", "AWS Amplify"],
    cloud: [
      "Vercel",
      "Google Cloud",
      "AWS",
      "Netlify",
      "Heroku",
      "Render",
      "Digital Ocean",
    ],
  };

  const experience = [
    {
      title: "Full-stack Developer Intern",
      company: "Renderverse",
      period: "February 2025 - Present",
      responsibilities: [
        "Led development of scalable web applications.",
        "Implemented microservices architecture.",
        "Optimized frontend performance and backend efficiency.",
      ],
    },
    {
      title: "Full-stack Developer Intern",
      company: "Lawazia Tech",
      period: "January 2025 - February 2025",
      responsibilities: [
        "Developed responsive web applications.",
        "Collaborated with cross-functional teams.",
        "Implemented RESTful APIs and database integrations.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      university: "Galgotias University",
      period: "2024 - 2027",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      university: "Government Polytechnic Ranchi",
      period: "2020 - 2023",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0F1624] text-white font-mono px-4 py-12 sm:px-8">
      {/* Blurry Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-green-500 opacity-40 blur-[80px] top-20 left-5 sm:left-10 md:w-[400px] md:h-[400px]"></div>
        <div className="absolute w-[250px] h-[250px] bg-blue-500 opacity-40 blur-[80px] bottom-20 right-5 sm:right-10 md:w-[350px] md:h-[350px]"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Sidebar - Personal Info */}
        <div className="bg-[#1E2634] p-6 rounded-lg shadow-md">
          <div className="text-gray-400 text-sm">// personal-info</div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Name</span>
              </div>
              <div className="text-[#4CCD99]">{personalInfo.name}</div>
            </div>
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Role</span>
              </div>
              <div className="text-[#4CCD99]">{personalInfo.role}</div>
            </div>
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Contact</span>
              </div>
              <div className="space-y-2">
                <Link
                  to={`mailto:${personalInfo.email}`}
                  className="text-[#4CCD99] block"
                >
                  {personalInfo.email}
                </Link>
                <div className="text-[#4CCD99]">{personalInfo.phone}</div>
              </div>
            </div>

            {/* Short Bio */}
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">About Me</span>
              </div>
              <p className="text-gray-300 text-sm">
                Passionate about coding, problem-solving, and building scalable
                web applications. Always eager to learn new technologies!
              </p>
            </div>

            {/* Tech Expertise */}
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Expertise</span>
              </div>
              <div className="text-gray-300 text-sm">
                Full-stack Development, Backend Architecture, REST APIs, Cloud
                Deployment.
              </div>
            </div>

            {/* Languages Spoken */}
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Languages</span>
              </div>
              <div className="text-gray-300 text-sm">English, Hindi</div>
            </div>

            {/* Interests */}
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Interests</span>
              </div>
              <div className="text-gray-300 text-sm">
                Tech Blogging, Open-Source, Gaming, AI/ML.
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-gray-400 text-sm">// find me in</div>
              <div className="flex space-x-4 mt-2">
                <Link
                  to={personalInfo.github}
                  target="_blank"
                  className="text-gray-300 hover:text-[#4CCD99]"
                >
                  GitHub
                </Link>
                <Link
                  to={personalInfo.linkedin}
                  target="_blank"
                  className="text-gray-300 hover:text-[#4CCD99]"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - CV Details */}
        <div className="md:col-span-2 bg-[#1E2634] p-6 rounded-lg shadow-md">
          <div className="text-gray-400 text-sm">// about-me</div>
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            {">"} Hi there! I'm{" "}
            <span className="text-[#4CCD99] font-bold">
              {personalInfo.name}
            </span>
            , a passionate Full-stack Developer with a knack for building
            scalable, high-performance applications. My expertise spans frontend
            and backend technologies, ensuring seamless user experiences.
          </p>

          {/* Experience Section */}
          <div className="mt-6">
            <div className="text-gray-400 text-sm">// experience</div>
            {experience.map((job, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-white text-sm sm:text-base">{job.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {job.company} | {job.period}
                </p>
                <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm mt-2">
                  {job.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <div className="text-gray-400 text-sm">// skills</div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-xs sm:text-sm">
              {Object.entries(skills).map(([category, techs]) => (
                <div
                  key={category}
                  className="bg-[#252D3A] p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-[#4CCD99] mb-2 font-semibold">
                    {">"} {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#4CCD99] text-[#0F1624] px-3 py-1 rounded-md text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-6">
            <div className="text-gray-400 text-sm">// education</div>
            <div className="mt-2">
              {education.map((edu, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-white text-sm sm:text-base">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {edu.university} | {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
