import SocialLink from "./SocialLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-serif mb-4">
              DC
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-sm">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              <SocialLink
                href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/"
                icon="linkedin"
              />
              <SocialLink href="https://github.com/dainwi" icon="github" />
              <SocialLink
                href="https://instagram.com/iamdainwichoudhary"
                icon="instagram"
              />
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              iamdanwichoudhary@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            © {currentYear} Dainwi Choudhary. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            Based in India • Available for Remote Work • Open to Relocation
          </p>
        </div>
      </div>
    </footer>
  );
}
