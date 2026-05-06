import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({projects,deleteProject}) {
  return (
    
      <div className="projects">
      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} deleteProject = {deleteProject} />
        ))
      )}
    </div>
    
  )
}

export default ProjectList
