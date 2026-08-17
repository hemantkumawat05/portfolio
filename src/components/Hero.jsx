import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/myimg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white pt-20"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="order-2 lg:order-1">

            <div className="mb-7 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-gray-500">
                Available for opportunities
              </span>
            </div>

            <p className="mb-3 text-base font-medium text-gray-500 sm:text-lg">
              Hello, I'm
            </p>

            <h1 className="text-[3.4rem] font-extrabold leading-[0.95] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-[5.5rem]">
              Hemant
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Kumawat
              </span>
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 sm:text-base">
                MERN Stack Developer
              </p>
            </div>
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              I design and develop{" "}
              <span className="font-semibold text-gray-900">
                modern, scalable web applications
              </span>{" "}
              with React.js, Node.js, Express.js and MongoDB, with a strong
              focus on clean architecture, responsive interfaces and
              practical AI integrations.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">

              <a
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-lg bg-gray-950 px-5 text-sm font-semibold text-white no-underline transition-all duration-200 hover:bg-blue-600"
              >
                Get In Touch
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="../src/assets/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-gray-200 px-5 text-sm font-semibold text-gray-700 no-underline transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="h-[390px] w-[290px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[480px] sm:w-[350px] lg:h-[540px] lg:w-[400px]">
                <img
                  src={profileImage}
                  alt="Hemant Kumawat - MERN Stack Developer"
                  className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;