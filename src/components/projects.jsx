import React from 'react';

const Projects = ({ data }) => {

  const renderSingleProject = (project, index) => {
    
    let odd = index % 2 === 1
    let reverse =  odd ? 'md:flex-row-reverse': '';
    let imagemargin = odd ? 'md:mr-10' : 'md:ml-10';
    let imageSize = project.potrait == 1 ? 'max-h-96' : 'h-80';

    return (
      <div className='w-5/6 md:w-4/5 border-b-2 md:border-b-0 border-gray-border'>
        <div className={'flex flex-col md:flex-row justify-center items-center my-5 ' + reverse}>
          <div className='flex-col-reverse md:flex-row flex borderb-0 md:border-b-2 border-gray-border px-10' key={index} >
            <div className='border-r-0 md:border-r-2 border-gray-border py-10'>
              <h3 class="font-roboto font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{project.name}</h3>
              <p class="font-roboto">{project.description}</p>
            </div>
            <div className='self-center rounded-full border-2 border-gray-border h-5 w-5 justify-center items-center flex mx-0 md:mx-5 px-3 py-3'>
              <p className='font-roboto'>{project.id}</p>
            </div>
          </div>
          <img src={project.image} alt={project.name} className={'mx-auto my-auto ' + imagemargin + ' ' + imageSize} />
        </div>
      </div>

    )
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {data.map((project, index) => renderSingleProject(project, index))}
    </div>
  )
}

export default Projects;