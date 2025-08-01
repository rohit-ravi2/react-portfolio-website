import React from 'react'
import projects from '../content/projects.json'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div style={{ padding: '2rem 4rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h1>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  )
}

export default Projects
