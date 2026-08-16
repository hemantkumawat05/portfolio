// import React from 'react';
// import { Mail, ChevronDown, Phone, MapPin } from 'lucide-react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center bg-white pt-20">
//       <div className="max-w-6xl mx-auto px-6 w-full py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Content */}
//           <div className="flex flex-col gap-6">
//             <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full w-fit border border-blue-100">
//               <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
//               Available for Work
//             </div>

//             <div>
//               <p className="text-gray-500 font-medium text-lg mb-2">Hello, I'm</p>
//               <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
//                 Hemant
//                 <br />
//                 <span className="text-brand-gradient">Kumawat</span>
//               </h1>
//             </div>

//             <div className="flex items-center gap-3">
//               <span className="w-10 h-0.5 bg-blue-600 rounded-full"></span>
//               <p className="text-blue-600 font-semibold text-lg tracking-wide">MERN Stack Developer</p>
//             </div>

//             <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
//               I build responsive, full-stack web applications using <strong className="text-gray-800">React.js, Node.js, Express.js</strong>, and <strong className="text-gray-800">MongoDB</strong>. Focused on scalable architecture and modern AI integrations.
//             </p>

//             {/* Info row */}
//             <div className="flex flex-wrap gap-4 text-sm text-gray-500">
//               <span className="flex items-center gap-1.5"><Phone size={14} className="text-blue-600" /> +91-7737364751</span>
//               <span className="flex items-center gap-1.5"><Mail size={14} className="text-blue-600" /> kumawathemant059@gmail.com</span>
//               <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-600" /> Jaipur, Rajasthan</span>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center gap-4 mt-2">
//               <a
//                 href="mailto:kumawathemant059@gmail.com"
//                 className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl no-underline transition-all duration-200 shadow-md hover:shadow-blue-200 hover:shadow-lg"
//               >
//                 <Mail size={18} /> Get In Touch
//               </a>
//               <a
//                 href="https://github.com/hemantkumawat05"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl no-underline transition-all duration-200"
//               >
//                 <FaGithub size={18} /> GitHub
//               </a>
//               <a
//                 href="https://linkedin.com/in/hemant-kumawat-93196b35a"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl no-underline transition-all duration-200"
//               >
//                 <FaLinkedin size={18} /> LinkedIn
//               </a>
//             </div>
//           </div>

//           {/* Right: Avatar */}
//           <div className="flex justify-center">
//             <div className="relative">
//               {/* Decorative rings */}
//               <div className="absolute inset-0 rounded-full border-2 border-blue-100 scale-110 animate-ping opacity-20"></div>
//               <div className="absolute inset-0 rounded-full border border-blue-200 scale-105"></div>
              
//               <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-50 to-sky-100 border-4 border-white shadow-2xl shadow-blue-100 flex flex-col items-center justify-center gap-2">
//                 <span className="text-7xl lg:text-8xl font-extrabold text-brand-gradient leading-none">HK</span>
//                 <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">MERN Developer</span>
//               </div>

//               {/* Floating badges */}
//               <div className="absolute -top-4 -right-4 bg-white border border-gray-200 shadow-lg rounded-xl px-3 py-2 text-xs font-bold text-gray-700">
//                 ⚡ React.js
//               </div>
//               <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 shadow-lg rounded-xl px-3 py-2 text-xs font-bold text-gray-700">
//                 🟢 Node.js
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="flex justify-center mt-16">
//           <a href="#skills" className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 no-underline transition-colors group">
//             <span className="text-xs font-medium tracking-wide">Scroll Down</span>
//             <ChevronDown size={20} className="animate-bounce" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


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
      className="relative min-h-screen overflow-hidden bg-white pt-10"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[10%] top-[30%] h-2 w-2 rounded-full bg-blue-300" />

        <div className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-sky-300" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col">

            {/* Available Badge */}
            <div className="mb-6 w-fit">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                Available for Work
              </div>
            </div>

            <p className="mb-2 text-lg font-medium text-gray-500">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Hemant
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Kumawat
              </span>
            </h1>

            {/* Role */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[3px] w-12 rounded-full bg-blue-600" />

              <p className="text-base font-bold tracking-wide text-blue-600 sm:text-lg">
                MERN Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              I build{" "}
              <strong className="font-semibold text-gray-900">
                scalable, responsive and modern web applications
              </strong>{" "}
              using React.js, Node.js, Express.js and MongoDB. I also
              integrate AI-powered solutions to create smarter and more
              efficient digital experiences.
            </p>

            {/* Contact Information */}
            <div className="mt-7 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

              <div className="flex items-center gap-2">
                <Phone
                  size={15}
                  className="shrink-0 text-blue-600"
                />
                <span>+91 7737364751</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail
                  size={15}
                  className="shrink-0 text-blue-600"
                />
                <span>kumawathemant059@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  size={15}
                  className="shrink-0 text-blue-600"
                />
                <span>Jaipur, Rajasthan</span>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              {/* Get In Touch */}
              <a
                href="mailto:kumawathemant059@gmail.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white no-underline shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
              >
                <Mail size={18} />

                Get In Touch

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Resume */}
              <a
                href="/Hemant-Kumawat-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
              >
                <Download size={18} />

                Resume
              </a>
              
            </div>
          </div>

          {/* ================= RIGHT SIDE PHOTO ================= */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">

    {/* Profile Image */}
    <div className="relative h-[380px] w-[290px] overflow-hidden rounded-2xl border-4 border-white bg-gray-100 shadow-xl shadow-gray-200 sm:h-[440px] sm:w-[340px] lg:h-[500px] lg:w-[380px]" >
      <img
        src={profileImage}
        alt="Hemant Kumawat"
        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"/>
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import {
//   Mail,
//   ChevronDown,
//   Phone,
//   MapPin,
//   ArrowUpRight,
//   Download,
// } from "lucide-react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import profileImage from "../assets/myimg.jpeg";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-white pt-24"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
//         <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

//         <div className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-blue-400" />
//         <div className="absolute right-[12%] top-[30%] h-2 w-2 rounded-full bg-blue-300" />
//         <div className="absolute left-[45%] bottom-[20%] h-2 w-2 rounded-full bg-sky-300" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          
//           {/* ================= LEFT CONTENT ================= */}
//           <div className="flex flex-col">
            
//             {/* Availability Badge */}
//             <div className="mb-6 w-fit">
//               <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
//                 </span>

//                 Available for Work
//               </div>
//             </div>

//             {/* Heading */}
//             <div>
//               <p className="mb-2 text-lg font-medium text-gray-500">
//                 Hello, I'm
//               </p>

//               <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
//                 Hemant
//                 <br />

//                 <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                   Kumawat
//                 </span>
//               </h1>
//             </div>

//             {/* Role */}
//             <div className="mt-7 flex items-center gap-3">
//               <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

//               <p className="text-base font-bold tracking-wide text-blue-600 sm:text-lg">
//                 MERN Stack Developer
//               </p>
//             </div>

//             {/* Description */}
//             <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
//               I build{" "}
//               <strong className="font-semibold text-gray-900">
//                 scalable, responsive and modern web applications
//               </strong>{" "}
//               using React.js, Node.js, Express.js and MongoDB. I also
//               integrate AI-powered solutions to create smarter and more
//               efficient digital experiences.
//             </p>

//             {/* Info */}
//             <div className="mt-7 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <Phone size={15} className="text-blue-600" />
//                 <span>+91 7737364751</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Mail size={15} className="text-blue-600" />
//                 <span>kumawathemant059@gmail.com</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <MapPin size={15} className="text-blue-600" />
//                 <span>Jaipur, Rajasthan</span>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="mt-9 flex flex-wrap gap-4">
//               <a
//                 href="mailto:kumawathemant059@gmail.com"
//                 className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
//               >
//                 <Mail size={18} />

//                 Get In Touch

//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>

//               <a
//                 href="/Hemant-Kumawat-Resume.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
//               >
//                 <Download size={18} />
//                 Resume
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="mt-7 flex items-center gap-3">
//               <span className="mr-2 text-sm font-medium text-gray-400">
//                 Follow me
//               </span>

//               <a
//                 href="https://github.com/hemantkumawat05"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="GitHub"
//                 className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//               >
//                 <FaGithub size={18} />
//               </a>

//               <a
//                 href="https://linkedin.com/in/hemant-kumawat-93196b35a"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="LinkedIn"
//                 className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//               >
//                 <FaLinkedin size={18} />
//               </a>
//             </div>
//           </div>

//           {/* ================= RIGHT PROFILE IMAGE ================= */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
              
//               {/* Outer Glow */}
//               <div className="absolute inset-0 -m-10 rounded-full bg-blue-100/50 blur-3xl" />

//               {/* Decorative Circle */}
//               <div className="absolute inset-0 -m-5 rounded-full border border-blue-100" />

//               <div className="absolute inset-0 -m-10 rounded-full border border-dashed border-blue-200" />

//               {/* Rotating Decorative Ring */}
//               <div className="absolute inset-0 -m-7 animate-[spin_20s_linear_infinite] rounded-full border border-blue-200 border-dashed" />

//               {/* Profile Image Container */}
//               <div className="relative h-72 w-72 overflow-hidden rounded-full border-[8px] border-white bg-gradient-to-br from-blue-50 to-sky-100 shadow-2xl shadow-blue-200 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]">
//                 <img
//                   src={profileImage}
//                   alt="Hemant Kumawat"
//                   className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
//                 />
//               </div>

//               {/* React Badge */}
//               <div className="absolute -right-5 top-8 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-xl shadow-gray-200/60">
//                 <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-lg">
//                   ⚛️
//                 </span>

//                 React.js
//               </div>

//               {/* Node Badge */}
//               <div className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-xl shadow-gray-200/60">
//                 <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-lg">
//                   🟢
//                 </span>

//                 Node.js
//               </div>

//               {/* MongoDB Badge */}
//               <div className="absolute bottom-16 -right-10 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-xl shadow-gray-200/60 sm:flex sm:items-center sm:gap-2">
//                 <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-lg">
//                   🍃
//                 </span>

//                 MongoDB
//               </div>

//               {/* Experience / Developer Badge */}
//               <div className="absolute -left-12 top-20 hidden rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm md:block">
//                 <p className="text-xs font-medium text-gray-400">
//                   Specialization
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-gray-800">
//                   Full Stack Development
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= SCROLL INDICATOR ================= */}
//         <div className="mt-20 flex justify-center lg:mt-24">
//           <a
//             href="#skills"
//             className="group flex flex-col items-center gap-2 text-gray-400 no-underline transition-colors duration-300 hover:text-blue-600"
//           >
//             <span className="text-xs font-semibold uppercase tracking-[0.2em]">
//               Scroll Down
//             </span>

//             <div className="flex h-9 w-6 items-start justify-center rounded-full border border-gray-300 p-1 transition-colors group-hover:border-blue-400">
//               <ChevronDown size={15} className="animate-bounce" />
//             </div>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;