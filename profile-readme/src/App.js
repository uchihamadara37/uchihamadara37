import React from 'react';
import { Code, Globe, Palette, Database } from 'lucide-react';

const GithubProfile = () => {
  const skills = {
    frontend: [
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '🚀' }
    ],
    design: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Affinity Designer', icon: '✏️' },
      { name: 'Adobe Photoshop', icon: '🖌️' }
    ],
    backend: [
      { name: 'PHP', icon: '🐘' },
      { name: 'JavaScript', icon: '☕' },
      { name: 'Java', icon: '♨️' },
      { name: 'Python', icon: '🐍' },
      { name: 'Golang', icon: '🧊' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'C++', icon: '🔧' }
    ]
  };

  const SkillSection = ({ title, skills, icon: Icon }) => (
    <div className="bg-white/10 rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold mb-3 flex items-center">
        <Icon className="mr-2" size={24} />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            <span className="mr-2">{skill.icon}</span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Fullstack Developer
        </h1>
        <p className="text-gray-300">Crafting digital experiences with passion and precision</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <SkillSection 
          title="Frontend Technologies" 
          skills={skills.frontend} 
          icon={Globe}
        />
        <SkillSection 
          title="Design Tools" 
          skills={skills.design} 
          icon={Palette}
        />
        <SkillSection 
          title="Backend Technologies" 
          skills={skills.backend} 
          icon={Code}
        />
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">🚀 About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A versatile developer passionate about creating seamless, innovative solutions. 
          Skilled in both frontend and backend technologies, with a strong eye for design 
          and user experience.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a 
          href="#" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
        >
          <Database className="mr-2" /> View My Projects
        </a>
      </div>
    </div>
  );
};

export default GithubProfile;