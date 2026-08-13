import React from 'react';

const skillCategories = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Razorpay', 'Gemini AI', 'Cloudinary'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Technical <span className="text-brand-gradient">Skills</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">A collection of technologies I work with to build modern full-stack applications.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 border border-blue-100 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
