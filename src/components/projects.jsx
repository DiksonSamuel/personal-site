import React from 'react';

const Projects = ({ data }) => {

  const renderSingleProject = (project, index) => {
    let odd = index % 2 === 1
    let reverse =  odd ? 'flex-row-reverse': 'flex-row';
    let imagemargin = odd ? 'mr-10' : 'ml-10';
    return (
      <div  className='w-3/5'>
        <div className={'flex row justify-center items-center my-10 ' + reverse}>
          <div className='row flex border-b-2 border-black px-10' key={index} >
            <div className='border-r-2 border-black pr-10'>
              <h3 class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className='self-center rounded-full border-2 border-black h-5 w-5 justify-center items-center flex mx-5'>
              <p>{project.id}</p>
            </div>
          </div>
          <img src={project.image} alt={project.name} className={'h-50 w-30 mx-auto ' + imagemargin} />
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