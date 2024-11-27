import { motion } from 'framer-motion';

export default function ProjectFilters({ activeFilter, setActiveFilter }) {
  const filters = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "Mobile",
    "UI/UX"
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
} 