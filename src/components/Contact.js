import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: "Email",
      value: "ia5danwichoudhary@gmail.com",
      href: "mailto:ia5danwichoudhary@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9905308845",
      href: "tel:+919905308845",
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 group flex items-center 
                       justify-between hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 
                              flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {info.label}
                  </p>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">
                    {info.value}
                  </p>
                </div>
              </div>
              <ArrowTopRightOnSquareIcon 
                className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 
                         dark:group-hover:text-indigo-400 transition-colors"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Looking forward to hearing from you! Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 
                       transition-colors flex items-center gap-2"
            >
              Connect on LinkedIn
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
            Based in India • Available for Remote Work • Open to Relocation
          </p>
        </div>
      </div>
    </section>
  );
} 