import React from 'react';
import {
  Award,
  ExternalLink,
  CalendarDays,
  Building2,
} from 'lucide-react';

import img from "../assets/apex.png"

const certificates = [
  {
    title: 'MERN Stack Development',
    issuer: 'True Value Infosoft Pvt. Ltd.',
    date: '01 June 2026 - 31 August 2026 (3 Months)',
    image: img,
    description:
      'Certificate of completion for successfully completing the MERN Stack Development internship and gaining practical experience in full-stack web development.',
  },
  {
    title: 'Frontend Development',
    issuer: 'Apex Planet Software Pvt. Ltd.',
    date: 'June 2025 (45 Days )',
    image: img,
    description:
      'Certificate of completion for successfully completing the Frontend Development internship with practical experience in modern web technologies.',
  },
];

const Certificates = () => {
  const handlePreview = (image) => {
    window.open(image, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="certificates"
      className="bg-blue-50/60 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Professional Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Real-World <span className="text-blue-600">Work-Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Real-world experience gained through professional internships and hands-on
            work in full-stack Web development.
          </p>

        </div>
        <div className="mx-auto max-w-5xl space-y-8">

          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[40%_minmax(0,1fr)] md:gap-8">
                <div className="min-w-0">
                  <div className="overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="block h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePreview(certificate.image)}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
                  >
                    <ExternalLink size={16} />
                    Preview Certificate
                  </button>

                </div>
                <div className="flex min-w-0 flex-col justify-center px-1 py-2 sm:px-2">
                  <div className="mb-4 flex items-center gap-2">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                      <Award size={18} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                      Certificate
                    </span>

                  </div>
                  <h3 className="text-xl font-bold leading-tight text-black sm:text-2xl">
                    {certificate.title}
                  </h3>
                  <div className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                    <Building2
                      size={16}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <span>{certificate.issuer}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays
                      size={16}
                      className="shrink-0 text-blue-600"
                    />

                    <span>{certificate.date}</span>
                  </div>
                  <div className="my-6 h-px bg-gray-100" />
                  <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                    {certificate.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Verified Achievement
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;