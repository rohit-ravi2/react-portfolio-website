import React from 'react'

const ProjectCard = ({ title, description, github, link, tags }) => {
  return (
    <div className="project-card" style={{
      border: '1px solid #ccc',
      borderRadius: '1rem',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      background: '#fff',
      color: '#1a3c2d',
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{description}</p>
      <div style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>
        {tags.map(tag => <span key={tag} style={{
          marginRight: '0.5rem',
          padding: '0.2rem 0.5rem',
          backgroundColor: '#e2c275',
          color: '#1a3c2d',
          borderRadius: '0.3rem'
        }}>{tag}</span>)}
      </div>
      <div>
        <a href={github} target="_blank" rel="noreferrer" style={{ marginRight: '1rem' }}>GitHub</a>
        <a href={link} target="_blank" rel="noreferrer">Live</a>
      </div>
    </div>
  )
}

export default ProjectCard
