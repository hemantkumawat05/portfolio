import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'College of Technology and Engineering, Udaipur',
    period: '2023 - 2027',
    score: 'CGPA: 7.8/10',
    icon: '🎓',
  },
  {
    degree: 'Class XII (RBSE)',
    institution: 'SRK Khandelwal Sr. Sec. School, Jobner, Jaipur',
    period: '',
    score: '89.5%',
    icon: '📘',
  },
  {
    degree: 'Class X (RBSE)',
    institution: 'G.A.V.M. Sr. Sec. School, Jobner, Jaipur',
    period: '',
    score: '87.5%',
    icon: '📗',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Education & <span className="text-brand-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Cards (take 2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl border border-blue-100">
                  {edu.icon}
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{edu.degree}</h3>
                  <p className="text-gray-500 text-sm mt-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.period && (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Card */}
          <div className="flex flex-col gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
