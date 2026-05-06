import React from 'react'

function ProjectCard({project,deleteProject}) {
  return (
    <div className='card'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => deleteProject(project.id)}>
        Delete
      </button>
    </div>
  )
}

export default ProjectCard
