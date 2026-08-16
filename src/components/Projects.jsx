import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import astroimg from "../assets/asto.png";

const projects = [
  {
    title: 'JYOTISHH VAASTU',
    image: astroimg,
    description: 'AI-powered numerology and astrology platform generating personalized reports in English and Hindi with automated PDF generation and online payments.',
    detailsLink: '/projects/jyotishh-vaastu',
    liveLink: 'https://astrology-r1ns.vercel.app/'
  },
  {
    title: 'E-COMMERCE',
    image: astroimg,
    description: 'Full-stack e-commerce platform with authentication, product management, shopping cart, order processing, and a responsive admin dashboard.',
    detailsLink: '/projects/mern-ecommerce',
    liveLink: 'https://astrology-r1ns.vercel.app/',
  },
  {
    title: 'AI-POWERED DAILY BLOG',
    image: astroimg,
    description: 'MERN-based blogging platform using Gemini AI for content generation with search, category filtering, dynamic rendering, and content management.',
    detailsLink: '/projects/ai-blog',
    liveLink: 'https://astrology-r1ns.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm">
            What I've Built
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Featured <span className="text-brand-gradient">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Real-world projects demonstrating my full-stack development capabilities,
            problem-solving skills, and experience with modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {projects.map((project, index) => (
            <article
              key={index}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-full overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
                  className="block h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">

                  <a
                    href={project.detailsLink}
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-xs font-semibold text-gray-800 transition-colors duration-200 hover:border-gray-900 hover:bg-gray-50 sm:text-sm"
                  >
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-gray-900 px-3 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-blue-600 sm:text-sm"
                  >
                    <ExternalLink size={15} />
                    <span>Live Website</span>
                  </a>

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
