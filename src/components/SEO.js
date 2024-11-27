import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const baseUrl = 'https://dainwi.vercel.app';
  const name = 'Dainwi Choudhary';
  const title = 'Dainwi Choudhary | Full Stack Developer | MERN Specialist';
  const description = 'Expert Full Stack Developer specializing in React, Node.js, Next.js, and modern web technologies. Building scalable web applications with focus on performance and user experience.';

  const keywords = [
    // Personal Brand Keywords
    'Dainwi Choudhary', 'Dainwi', 'Dainwi Developer', 'Dainwi Choudhary Developer',
    
    // Role-based Keywords
    'Full Stack Developer', 'MERN Stack Developer', 'Frontend Developer', 'Backend Developer',
    'React Developer', 'Node.js Developer', 'JavaScript Developer', 'Web Developer',
    
    // Technology Keywords
    'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'TypeScript',
    'Tailwind CSS', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'REST API',
    
    // Location Keywords
    'Developer in India', 'Remote Developer', 'Freelance Developer',
    
    // Skill-based Keywords
    'Web Development', 'API Development', 'Database Design', 'UI/UX Development',
    'Frontend Development', 'Backend Development', 'Full Stack Development',
    
    // Project-related Keywords
    'E-commerce Development', 'Task Management System', 'Analytics Dashboard',
    'Real-time Applications', 'Web Applications', 'Custom Software Development',
    
    // Industry Keywords
    'Software Development', 'Web Development Services', 'Technical Solutions',
    'Digital Transformation', 'Custom Web Applications', 'Enterprise Solutions'
  ].join(', ');

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": name,
        "jobTitle": "Full Stack Developer",
        "description": description,
        "image": `${baseUrl}/profile.jpg`,
        "sameAs": [
          "https://github.com/dainwi",
          "https://www.linkedin.com/in/dainwi-choudhary-80612a325/",
          "https://instagram.com/iamdainwichoudhary"
        ],
        "url": baseUrl
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": title,
        "publisher": {
          "@id": `${baseUrl}/#person`
        }
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": title,
        "about": {
          "@id": `${baseUrl}/#person`
        },
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "contentUrl": `${baseUrl}/og-image.png`
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={baseUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      {/* Preconnect to Important Origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#4f46e5" />
      
      {/* Language Tags */}
      <html lang="en" />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
} 