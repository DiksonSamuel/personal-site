import React from 'react';

const Skills = ({ skillsData }) => {

  const renderSkillCategory = (category) => (
    <div key={category.name} className="w-full md:w-1/2 lg:w-1/4 p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.name}</h3>
      <ul className="space-y-4">
        {category.skills.map((skill, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-lg text-gray-700">{skill.name}</span>
            <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-4">
              <div className="bg-gradient-to-r from-purple-1 to-purple-2 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16 font-roboto">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center w-full">
        {skillsData.map((category) => renderSkillCategory(category))}
      </div>
    </section>
  );
};

export default Skills;
