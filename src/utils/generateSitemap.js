const fs = require('fs');
const path = require('path');

const baseUrl = 'https://dainwi.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: currentDate,
    images: [
      {
        loc: '/og-image.png',
        title: 'Dainwi Choudhary - Full Stack Developer',
        caption: 'Expert Full Stack Developer specializing in MERN stack'
      }
    ]
  },
  {
    url: '/#about',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: currentDate,
    images: [
      {
        loc: '/profile.jpg',
        title: 'About Dainwi Choudhary',
        caption: 'Full Stack Developer Profile'
      }
    ]
  },
  {
    url: '/#skills',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: currentDate
  },
  {
    url: '/#projects',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: currentDate,
    images: [
      {
        loc: '/project1.jpg',
        title: 'E-commerce Platform',
        caption: 'Full-stack e-commerce solution with advanced features'
      },
      {
        loc: '/project2.jpg',
        title: 'Task Management System',
        caption: 'Real-time task management application'
      },
      {
        loc: '/project3.jpg',
        title: 'AI Analytics Dashboard',
        caption: 'Machine learning powered analytics platform'
      }
    ]
  },
  {
    url: '/#contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: currentDate
  },
  {
    url: '/resume.pdf',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: currentDate
  }
];

function generateSitemap() {
  // Create sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.images ? page.images.map(image => `
    <image:image>
      <image:loc>${baseUrl}${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`).join('') : ''}
  </url>`).join('')}
</urlset>`;

  // Write sitemap
  fs.writeFileSync(
    path.join(__dirname, '../../public/sitemap.xml'),
    sitemap.trim()
  );

  console.log('✅ Sitemap generated successfully!');

  // Generate robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Specific rules for Google
User-agent: Googlebot
Allow: /
Allow: /*.js$
Allow: /*.css$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.ico$
Allow: /*.woff$
Allow: /*.woff2$

# Block certain paths
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /*.env
Disallow: /*.config.js
Disallow: /*.json$

# Crawl-delay
Crawl-delay: 1

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`;

  // Write robots.txt
  fs.writeFileSync(
    path.join(__dirname, '../../public/robots.txt'),
    robotsTxt
  );

  console.log('✅ robots.txt generated successfully!');
}

// Run the generator
generateSitemap(); 