import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: t('contact.email'),
      value: "iamdainwichoudhary@gmail.com",
      href: "mailto:iamdainwichoudhary@gmail.com",
      ariaLabel: "Send email to Dainwi"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: t('contact.phone'),
      value: "+91 9905308845",
      href: "tel:+919905308845",
      ariaLabel: "Call Dainwi"
    }
  ];

  const handleContactClick = (href) => {
    window.open(href, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="contact" className="py-8 xs:py-12 sm:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-2 xs:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 xs:mb-8 sm:mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 xs:mb-3 sm:mb-4 font-serif">
            {t('contact.title')}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 xs:gap-4 sm:gap-8">
          {contactInfo.map((info, index) => (
            <motion.button
              key={index}
              onClick={() => handleContactClick(info.href)}
              aria-label={info.ariaLabel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 xs:p-4 sm:p-6 rounded-lg xs:rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800 
                       group flex items-center justify-between hover:shadow-lg 
                       transition-all duration-300 cursor-pointer w-full"
            >
              <div className="flex items-center gap-2 xs:gap-4">
                <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 
                              flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  {info.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs xs:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {info.label}
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg font-medium text-slate-900 dark:text-white break-all xs:break-normal">
                    {info.value}
                  </p>
                </div>
              </div>
              <ArrowTopRightOnSquareIcon 
                className="h-4 w-4 xs:h-5 xs:w-5 text-slate-400 group-hover:text-indigo-600 
                         dark:group-hover:text-indigo-400 transition-colors flex-shrink-0 ml-2"
              />
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 xs:mt-8 sm:mt-16 text-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="inline-flex items-center px-3 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                     bg-indigo-600 text-white hover:bg-indigo-700 transition-colors 
                     gap-2 text-xs xs:text-sm sm:text-base"
          >
            {t('contact.connect')}
            <ArrowTopRightOnSquareIcon className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 