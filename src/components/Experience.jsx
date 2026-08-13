import React from 'react';
import { Briefcase, CalendarDays, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'True Value Infosoft Pvt. Ltd., Jaipur',
    period: 'June 2026 – August 2026',
    duration: '90 Days',
    points: [
      'Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Built RESTful APIs, integrated MongoDB, and implemented JWT-based authentication.',
      'Designed responsive React.js interfaces using Tailwind CSS and collaborated using Git.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Apex Planet Software Pvt. Ltd.',
    period: 'May 2025 – June 2025',
    duration: '45 Days',
    points: [
      'Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript.',
      'Implemented interactive features and improved overall frontend user experience.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Where I've Worked</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Work <span className="text-brand-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10 pl-8 md:pl-16 before:absolute before:left-4 md:before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className="absolute -left-[2.15rem] md:-left-[2.15rem] top-6 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-md shadow-blue-200">
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Top */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                      <Building2 size={14} className="text-blue-600" /> {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      <CalendarDays size={12} /> {exp.period}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{exp.duration}</span>
                  </div>
                </div>

                {/* Points */}
                <ul className="flex flex-col gap-2.5 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
