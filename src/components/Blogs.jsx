import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Building a Full-Stack Task Manager with FastAPI & MongoDB",
    description:
      "Learn how to create a task management app using FastAPI, MongoDB, and React.js.",
    tags: ["Backend", "FastAPI", "MongoDB"],
    date: "March 10, 2025",
    link: "https://dainwi.com/blogs/fullstack-task-manager",
    image: "https://source.unsplash.com/400x250/?coding,backend",
    featured: true,
  },
  {
    title: "Next.js vs React: When to Choose What?",
    description:
      "Understand the key differences between Next.js and React.js and when to use each.",
    tags: ["Frontend", "Next.js", "React.js"],
    date: "February 28, 2025",
    link: "https://dainwi.com/blogs/next-vs-react",
    image: "https://source.unsplash.com/400x250/?nextjs,react",
    featured: false,
  },
  {
    title: "Optimizing Your Website for Lightning-Fast Performance",
    description:
      "Explore best practices to boost your website’s speed and SEO ranking.",
    tags: ["Web Performance", "SEO", "Optimization"],
    date: "February 15, 2025",
    link: "https://dainwi.com/blogs/web-performance-optimization",
    image: "https://source.unsplash.com/400x250/?website,performance",
    featured: true,
  },
  {
    title: "Getting Started with Firebase Authentication in Next.js",
    description:
      "Step-by-step guide to implementing Firebase Authentication in a Next.js project.",
    tags: ["Firebase", "Next.js", "Authentication"],
    date: "January 30, 2025",
    link: "https://dainwi.com/blogs/firebase-auth-nextjs",
    image: "https://source.unsplash.com/400x250/?firebase,auth",
    featured: false,
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Cloud",
  "SEO",
  "Performance",
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || blog.tags.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-[#0F1624] text-white font-mono p-8">
      {/* Blurry Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-40 blur-[120px] top-20 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-40 blur-[120px] bottom-20 right-10"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Sidebar - Blog Info */}
        <div className="bg-[#1E2634] p-6 rounded-lg shadow-md">
          <div className="text-gray-400">// blog-info</div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Total Blogs</span>
              </div>
              <div className="text-[#4CCD99]">{blogs.length}+</div>
            </div>
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Topics Covered</span>
              </div>
              <div className="text-gray-300 text-sm">
                Web Development, Cloud, Backend, Performance Optimization.
              </div>
            </div>
            <div>
              <div className="text-gray-500">
                {">"} <span className="text-white">Writing Experience</span>
              </div>
              <div className="text-gray-300 text-sm">
                Writing tech blogs for 3+ years.
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-2 bg-[#252D3A] text-white rounded-md outline-none focus:ring-2 focus:ring-[#4CCD99]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories Filter */}
          <div className="mt-4">
            <div className="text-gray-400">// categories</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-md text-xs font-bold ${
                    selectedCategory === category
                      ? "bg-[#4CCD99] text-[#0F1624]"
                      : "bg-[#252D3A] text-gray-300"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Blog List */}
        <div className="md:col-span-2 bg-[#1E2634] p-6 rounded-lg">
          <div className="text-gray-400">// featured-blogs</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs
              .filter((blog) => blog.featured)
              .map((blog, index) => (
                <div
                  key={index}
                  className="bg-[#252D3A] p-4 rounded-lg shadow-md"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-lg mb-3"
                  />
                  <h3 className="text-white font-semibold">{blog.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {blog.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#4CCD99] text-[#0F1624] px-3 py-1 rounded-md text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{blog.date}</span>
                    <Link
                      to={blog.link}
                      target="_blank"
                      className="text-gray-300 hover:text-[#4CCD99] text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-gray-400 mt-8">// all-blogs</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-[#252D3A] p-4 rounded-lg shadow-md"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg mb-3"
                />
                <h3 className="text-white font-semibold">{blog.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{blog.description}</p>
                <Link
                  to={blog.link}
                  target="_blank"
                  className="text-gray-300 hover:text-[#4CCD99] text-sm"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
