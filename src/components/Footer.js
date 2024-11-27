import SocialLink from "./SocialLink";
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dainwi-choudhary-80612a325/",
      icon: "linkedin",
      ariaLabel: "Visit LinkedIn Profile"
    },
    {
      href: "https://github.com/dainwi",
      icon: "github",
      ariaLabel: "Visit GitHub Profile"
    },
    {
      href: "https://instagram.com/iamdainwichoudhary",
      icon: "instagram",
      ariaLabel: "Visit Instagram Profile"
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:iamdainwichoudhary@gmail.com";
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-serif mb-4">
              DC
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-sm">
              {t('footer.brand')}
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {t('footer.connect')}
            </h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))}
            </div>
            <button
              onClick={handleEmailClick}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 
                       dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              iamdainwichoudhary@gmail.com
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            © {currentYear} Dainwi Choudhary. {t('footer.rights')}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            {t('footer.location')}
          </p>
        </div>
      </div>
    </footer>
  );
}
