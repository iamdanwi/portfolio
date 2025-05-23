import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-10 flex-wrap">
      <h1 className="font-raleway md:text-2xl font-medium">
        {/* DAINWI CHOUDHARY. */}
        DC.
      </h1>

      <div className="flex items-center md:text-2xl gap-6 flex-wrap my-2">
        <Link href="https://medium.com/@danwichoudhary">
          <Image src="/medium.svg" alt="LinkedIn" width={32} height={32} />
        </Link>
        <Link href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/">
          <FaLinkedin />
        </Link>
        <Link href="https://x.com/danwichoudhary">
          <FaXTwitter />
        </Link>
        <Link href="https://github.com/iamdanwi">
          <FaGithub />
        </Link>
        <Link href="https://instagram.com/iamdainwichoudhary">
          {/* <FaFileLines /> */}
          <FaInstagram />
        </Link>
        <Link
          href="mailto:danwichoudhary@gmail.com"
          className="underline md:text-xl"
        >
          danwichoudhary@gmail.com
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
