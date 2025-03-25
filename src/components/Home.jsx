import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-screen flex items-center justify-center min-h-screen px-6 bg-[#0d1117]">
      {/* Blurry Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-green-500 opacity-40 blur-[100px] top-20 left-5 sm:left-10 md:w-[500px] md:h-[500px]"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-40 blur-[100px] bottom-20 right-5 sm:right-10 md:w-[400px] md:h-[400px]"></div>
      </div>

      <div className="relative flex flex-col justify-center max-w-2xl w-full text-white text-center sm:text-left">
        {/* Intro Section */}
        <div className="px-4 sm:px-6">
          <span className="text-[#b1bac3] text-lg sm:text-base">
            Hello, I am
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#e5e9f0] font-extralight">
            Dainwi Kumar
          </h1>
          <h2 className="flex justify-center sm:justify-start items-center text-lg sm:text-2xl text-[#4d5bce] mt-2">
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            Full-stack developer
          </h2>
          <p className="text-[#b1bac3] mt-4 text-sm sm:text-base leading-relaxed">
            I am a passionate and dedicated full-stack developer with a strong
            focus on creating innovative and efficient solutions.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-left text-sm sm:text-base mt-6">
          <p className="text-[#b1bac3]">// my number</p>
          <p className="text-[#4d5bce]">
            const telephoneNum = "+91 9905308845";
          </p>

          <p className="text-[#b1bac3] mt-2">// my e-mail</p>
          <p className="text-[#4d5bce]">
            const email ={" "}
            <Link to="mailto:danwichoudhary@gmail.com" className="underline">
              "danwichoudhary@gmail.com";
            </Link>
          </p>

          <p className="text-[#b1bac3] mt-2">// my GitHub</p>
          <p className="text-[#4d5bce]">
            const githubLink ={" "}
            <Link to="https://github.com/iamdanwi" className="underline">
              "github.com/iamdanwi";
            </Link>
          </p>

          <p className="text-[#b1bac3] mt-2">// my LinkedIn</p>
          <p className="text-[#4d5bce]">
            const linkedinPage ={" "}
            <Link
              to="https://www.linkedin.com/in/dainwi-choudhary-80612a325/"
              className="underline"
            >
              "linkedin.com/in/dainwi-choudhary";
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
