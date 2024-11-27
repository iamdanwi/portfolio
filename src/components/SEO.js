import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dainwi Choudhary",
    "jobTitle": "Full Stack Developer",
    "description": "Expert Full Stack Developer with proficiency in MERN Stack, Next.js, and modern web technologies",
    "url": "https://dainwi.vercel.app",
    "image": "https://dainwi.vercel.app/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/dainwi-choudhary-80612a325/",
      "https://github.com/dainwi",
      "https://instagram.com/iamdainwichoudhary"
    ],
    "skills": [
      "Full Stack Development",
      "MERN Stack",
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "Java",
      "C++",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Full Stack Developer"
    },
    "knowsAbout": [
      "Web Development",
      "Software Engineering",
      "Database Design",
      "API Development",
      "UI/UX Design",
      "System Architecture"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dainwi Choudhary - Full Stack Developer Portfolio",
    "url": "https://dainwi.vercel.app",
    "description": "Professional portfolio of Dainwi Choudhary, a Full Stack Developer specializing in modern web technologies",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dainwi.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>Dainwi Choudhary | Expert Full Stack Developer | MERN Stack Specialist</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="description" content="Expert Full Stack Developer specializing in MERN Stack, Next.js, and modern web technologies. 
        Building scalable web applications with React, Node.js, MongoDB, and PostgreSQL. Hire a professional full stack developer." />
      
      {/* Keywords - carefully chosen for relevance */}
      <meta name="keywords" content="Full Stack Developer, MERN Stack Developer, Web Developer, React Developer, 
        Next.js Expert, Node.js Developer, MongoDB Expert, PostgreSQL Developer, Full Stack Engineer, 
        JavaScript Developer, Python Developer, Java Developer, C++ Programmer, API Developer, 
        Frontend Developer, Backend Developer, Full Stack Development India, Hire Full Stack Developer" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dainwi Choudhary - Full Stack Developer" />
      <meta property="og:title" content="Expert Full Stack Developer | MERN Stack Specialist" />
      <meta property="og:description" content="Professional Full Stack Developer specializing in MERN Stack and modern web technologies. 
        View my portfolio of innovative full-stack solutions and web applications." />
      <meta property="og:url" content="https://dainwi.vercel.app/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://dainwi.vercel.app/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dainwichoudhary" />
      <meta name="twitter:creator" content="@dainwichoudhary" />
      <meta name="twitter:title" content="Expert Full Stack Developer | MERN Stack Specialist" />
      <meta name="twitter:description" content="Professional Full Stack Developer specializing in MERN Stack and modern web technologies. 
        Hire me for your next web development project." />
      <meta name="twitter:image" content="https://dainwi.vercel.app/og-image.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Dainwi Choudhary" />
      <meta name="copyright" content="Dainwi Choudhary" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dainwi Choudhary - Full Stack Dev" />
      <meta name="theme-color" content="#4F46E5" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://dainwi.vercel.app/" />
      
      {/* Alternate Languages */}
      <link rel="alternate" href="https://dainwi.vercel.app/" hreflang="x-default" />
      <link rel="alternate" href="https://dainwi.vercel.app/" hreflang="en" />
    </Helmet>
  );
} 