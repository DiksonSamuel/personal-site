import React from 'react';

const Projects = ({ data }) => {

  const renderSingleProject = (project, index) => {

    const isOdd = index % 2 === 1;
    const layoutDirection = isOdd ? 'md:flex-row-reverse' : 'md:flex-row';
    const imageMargin = isOdd ? 'md:ml-6' : 'md:mr-6';
    const imageSize = project.potrait === 1 ? 'max-h-96 w-full object-contain' : 'h-80 w-full object-cover';

    return (
      <div className='w-full md:w-4/5 my-8'>
        <div className={`flex flex-col ${layoutDirection} items-center md:items-start`}>
          {/* Text Section */}
          <div className='md:w-1/2 p-6'>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-roboto">
              {project.name}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-roboto">
              {project.description}
            </p>
            <div className='flex items-center justify-center md:justify-start'>
              <span className='bg-gradient-to-r from-purple-1 to-purple-2 text-white font-bold px-4 py-2 rounded-full'>
                Project ID: {project.id}
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className={`md:w-1/2 ${imageMargin}`}>
            <img 
              src={project.image} 
              alt={project.name} 
              className={`rounded-lg shadow-lg ${imageSize}`} 
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className='w-full flex flex-col items-center py-12 bg-gray-50'>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 font-roboto">
        Projects
      </h2>
      {data.map((project, index) => renderSingleProject(project, index))}
    </section>
  );
};

export default Projects;
