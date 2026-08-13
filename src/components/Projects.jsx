import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'JYOTISHH VAASTU',
    subtitle: 'AI Powered Numerology & Astrology Web App',
    badge: 'Full Stack',

    shortDescription:
      'An AI-powered web application that generates personalized numerology and astrology reports in English and Hindi with online payments, automated PDF generation, and email delivery.',

    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Gemini AI',
      'Razorpay',
      'Cloudinary',
    ],

    detailsLink: '/projects/jyotishh-vaastu',
    liveLink: '#',
    adminLink: '#',
    githubLink: '#',
  },

  {
    title: 'MERN E-Commerce',
    subtitle: 'Full-Stack Shopping Platform',
    badge: 'Full Stack',

    shortDescription:
      'A complete e-commerce platform with user authentication, product management, shopping cart, order processing, and a responsive admin dashboard for managing products and orders.',

    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],

    detailsLink: '/projects/mern-ecommerce',
    liveLink: '#',
    adminLink: '#',
    githubLink: '#',
  },

  {
    title: 'AI-Powered Blog Platform',
    subtitle: 'Content Creation Web Application',
    badge: 'Full Stack',

    shortDescription:
      'A MERN-based blogging platform that uses Gemini AI to generate structured content with blog search, category filtering, dynamic rendering, and content management features.',

    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Gemini AI',
    ],

    detailsLink: '/projects/ai-blog',
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Featured{' '}
            <span className="text-brand-gradient">
              Projects
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-6">
            Real-world projects demonstrating my full-stack development
            capabilities, problem-solving skills, and experience with
            modern web technologies.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project, idx) => (

            <div
              key={idx}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-gray-100
                p-6
                md:p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
              "
            >

              {/* ================= PROJECT HEADER ================= */}
              <div className="flex justify-between items-start gap-4 mb-5">

                <div className="min-w-0">

                  {/* Badge */}
                  <span
                    className="
                      inline-flex
                      text-xs
                      font-bold
                      text-blue-600
                      bg-blue-50
                      border
                      border-blue-100
                      px-2.5
                      py-1
                      rounded-full
                    "
                  >
                    {project.badge}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-gray-900
                      mt-3
                      break-words
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-500 text-sm mt-1">
                    {project.subtitle}
                  </p>

                </div>

              </div>


              {/* ================= SHORT DESCRIPTION ================= */}
              <p
                className="
                  text-gray-600
                  text-sm
                  md:text-[15px]
                  leading-6
                  mb-6
                "
              >
                {project.shortDescription}
              </p>


              {/* ================= TECHNOLOGIES ================= */}
              <div className="flex flex-wrap gap-2 mb-7">

                {project.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="
                      text-xs
                      font-medium
                      text-sky-700
                      bg-sky-50
                      border
                      border-sky-100
                      px-2.5
                      py-1
                      rounded-md
                      whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* ================= BOTTOM SECTION ================= */}
              <div
                className="
                  mt-auto
                  pt-5
                  border-t
                  border-gray-100
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                "
              >

                {/* ================= LEFT SIDE ================= */}
                <div className="flex items-center gap-4">

                  {/* Project Details */}
                  <a
                    href={project.detailsLink}
                    className="
                      text-sm
                      font-semibold
                      text-blue-600
                      hover:text-blue-700
                      transition-colors
                      whitespace-nowrap
                    "
                  >
                    View Project Details →
                  </a>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                  "
                >

                  {/* GitHub */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-gray-200
                        text-gray-500
                        hover:text-gray-900
                        hover:border-gray-400
                        transition-colors
                      "
                    >
                      <FaGithub size={17} />
                    </a>
                  )}


                  {/* Live Website */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-gray-900
                        text-white
                        text-sm
                        font-medium
                        hover:bg-blue-600
                        transition-colors
                        whitespace-nowrap
                      "
                    >
                      <ExternalLink size={15} />

                      Live Website
                    </a>
                  )}


                  {/* Admin Panel */}
                  {project.adminLink && (
                    <a
                      href={project.adminLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        border
                        border-gray-200
                        text-gray-700
                        text-sm
                        font-medium
                        hover:border-blue-300
                        hover:text-blue-600
                        hover:bg-blue-50
                        transition-colors
                        whitespace-nowrap
                      "
                    >
                      <ExternalLink size={15} />

                      Admin Panel
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;



// import React from 'react';
// import { ExternalLink } from 'lucide-react';
// import { FaGithub } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'JYOTISHH VAASTU',
//     subtitle: 'AI Powered Numerology & Astrology Web App',
//     badge: 'Full Stack',
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Gemini AI', 'Razorpay', 'Cloudinary'],
//     description: [
//       'Built a full-stack AI-powered web app generating personalized numerology & astrology reports in English and Hindi.',
//       'Integrated Razorpay for payments, automated PDF generation, Cloudinary for storage, and Nodemailer for delivery.',
//       'Created an admin dashboard for managing pricing, customer records, and generated reports.',
//     ],
//     link: '#',
//     github: '#',
//   },
//   {
//     title: 'MERN E-Commerce',
//     subtitle: 'Full-Stack Shopping Platform',
//     badge: 'Full Stack',
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
//     description: [
//       'Built a full e-commerce application with user auth, product management, cart, and order processing.',
//       'Developed RESTful APIs for managing products, users, carts, and orders using Node.js & Express.js.',
//       'Built an admin panel to manage products and update order statuses through a responsive React interface.',
//     ],
//     link: '#',
//     github: '#',
//   },
//   {
//     title: 'AI-Powered Blog Platform',
//     subtitle: 'Content Creation Web Application',
//     badge: 'Full Stack',
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI'],
//     description: [
//       'Developed a MERN-based platform for creating, uploading, and publishing blog content.',
//       'Integrated Gemini AI to generate structured, visually appealing blog content automatically.',
//       'Implemented RESTful APIs with blog search, category filtering, and dynamic content rendering.',
//     ],
//     link: '#',
//     github: '#',
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">What I've Built</p>
//           <h2 className="text-4xl font-extrabold text-gray-900">
//             Featured <span className="text-brand-gradient">Projects</span>
//           </h2>
//           <p className="text-gray-500 mt-4 max-w-md mx-auto">Real-world projects demonstrating my full-stack development capabilities.</p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
//             >
//               {/* Top row */}
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
//                     {project.badge}
//                   </span>
//                   <h3 className="text-xl font-bold text-gray-900 mt-3">{project.title}</h3>
//                   <p className="text-gray-500 text-sm mt-1">{project.subtitle}</p>
//                 </div>
//                 <div className="flex gap-3 ml-4 shrink-0">
//                   <a
//                     href={project.github}
//                     className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
//                     aria-label="GitHub"
//                   >
//                     <FaGithub size={18} />
//                   </a>
//                   <a
//                     href={project.link}
//                     className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
//                     aria-label="Live Demo"
//                   >
//                     <ExternalLink size={18} />
//                   </a>
//                 </div>
//               </div>

//               {/* Tech tags */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((t, i) => (
//                   <span key={i} className="text-xs font-medium text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md">
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Points */}
//               <ul className="flex flex-col gap-2.5 mt-auto">
//                 {project.description.map((desc, i) => (
//                   <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
//                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
//                     {desc}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
