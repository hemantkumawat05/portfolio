import React from 'react';
import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  Cloud,
} from 'lucide-react';

const leftSkills = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['C++', 'JavaScript'],
  },
  {
    icon: Palette,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL'],
  },
];

const rightSkills = [
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Requestly'],
  },
  {
    icon: ShieldCheck,
    title: 'Technologies',
    skills: ['REST APIs', 'JWT Authentication'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Services',
    skills: ['Cloudinary'],
  },
];

const SkillItem = ({ item, isLast }) => {
  const Icon = item.icon;

  return (
    <div className="relative flex gap-5 sm:gap-6">

      {/* Timeline */}
      <div className="relative flex w-10 shrink-0 justify-center sm:w-11">

        {!isLast && (
          <div className="absolute top-11 bottom-[-40px] w-[3px] rounded-full bg-blue-100" />
        )}

        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-4 ring-white sm:h-11 sm:w-11">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-10 sm:w-10">
            <Icon size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 pb-10">
        <div className="mb-3 flex items-center gap-3">
          <h3 className="text-base font-bold text-gray-900 sm:text-lg">
            {item.title}
          </h3>

          <span className="h-px w-8 bg-gray-200 sm:w-12" />
        </div>
        <div className="w-fit max-w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 sm:p-4">
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors duration-200 hover:border-blue-200 hover:text-blue-600 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const SkillColumn = ({ skills }) => {
  return (
    <div className="space-y-0">
      {skills.map((item, index) => (
        <SkillItem
          key={item.title}
          item={item}
          isLast={index === skills.length - 1}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              My Expertise
            </span>
            <span className="h-px w-8 bg-blue-600" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Technical <span className="text-blue-600">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and tools I use to build modern, responsive and
            scalable full-stack applications.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-14 lg:grid-cols-2">
          <SkillColumn skills={leftSkills} />
          <SkillColumn skills={rightSkills} />

        </div>

      </div>
    </section>
  );
};

export default Skills;