import React from 'react';
import { GraduationCap, CalendarDays } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'College of Technology and Engineering, Udaipur',
    period: '2023 - 2027',
    score: 'CGPA: 7.8/10',
  },
  {
    degree: 'Class XII (RBSE)',
    institution: 'SRK Khandelwal Sr. Sec. School, Jobner, Jaipur',
    period: '2022',
    score: '89.5%',
  },
  {
    degree: 'Class X (RBSE)',
    institution: 'G.A.V.M. Sr. Sec. School, Jobner, Jaipur',
    period: '2020',
    score: '87.5%',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Academic Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Education & <span className="text-blue-600">Qualifications</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            My academic journey and educational qualifications in technology
            and computer science.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute bottom-5 left-5 top-5 w-[2px] bg-blue-100 sm:left-6" />
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative flex gap-5 sm:gap-7">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 sm:h-12 sm:w-12">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:h-9 sm:w-9">
                      <GraduationCap size={18} />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6 lg:p-7">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold leading-snug text-black sm:text-xl">
                            {edu.degree}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-[15px]">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="shrink-0">
                          <span className="inline-flex rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                      {edu.period && (
                        <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                          <CalendarDays
                            size={15}
                            className="text-blue-600"
                          />
                          <span>{edu.period}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 pl-1 text-[10px] font-semibold tracking-[0.2em] text-blue-300">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;




{/* <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-8 text-white flex flex-col items-center text-center shadow-lg shadow-blue-200 h-full justify-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Trophy size={32} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">LeetCode</h3>
                <p className="text-blue-100 text-sm mt-1">Problem Solving</p>
              </div>
              <div className="text-5xl font-extrabold">250+</div>
              <p className="text-blue-100 text-sm leading-relaxed">
                DSA problems solved, strengthening algorithmic thinking and problem-solving skills.
              </p>
              <span className="text-xs font-semibold bg-white/20 px-4 py-2 rounded-full mt-2 border border-white/30">
                🏆 Active Achiever
              </span>
            </div> */}