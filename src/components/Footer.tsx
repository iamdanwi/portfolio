import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="font-syne-mono text-xl font-medium">
            DC.
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-8 text-xl">
          <nav className="flex space-x-6 -mb-2">
            <Link href="https://medium.com/@danwichoudhary">
              <Image src="/medium.svg" alt="Medium" width={32} height={32} />
            </Link>
            <Link
              href="https://github.com/iamdanwi"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://x.com/danwichoudhary"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com/iamdainwichoudhary">
              <FaInstagram />
            </Link>
          </nav>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <p>© {currentYear} Dainwi Choudhary. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
