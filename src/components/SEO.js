import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dainwi Choudhary",
    "jobTitle": "Full Stack Developer",
    "url": "https://your-portfolio-url.com",
    "sameAs": [
      "https://www.linkedin.com/in/dainwi-choudhary-80612a325/",
      "https://github.com/dainwi",
      "https://instagram.com/iamdainwichoudhary"
    ],
    "skills": [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "Java",
      "C++",
      "Full Stack Development"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Dainwi Choudhary | Full Stack Developer</title>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="description" content="Full Stack Developer specializing in React, Next.js, and modern web technologies. Expert in building scalable web applications and innovative solutions." />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dainwi Choudhary Portfolio" />
      
      {/* Twitter Tags */}
      <meta name="twitter:creator" content="@dainwichoudhary" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="Full Stack Developer, React Developer, Next.js Expert, Web Development, JavaScript Expert, Node.js Developer, MongoDB, PostgreSQL, Python Developer, Java Developer, C++ Programming, Software Engineer India" />
      <meta name="author" content="Dainwi Choudhary" />
      <meta name="copyright" content="Dainwi Choudhary" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
} 