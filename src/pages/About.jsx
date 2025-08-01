import React from 'react'

const About = () => {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#1a3c2d' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Me</h1>

      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
        I’m currently studying Computer Science with a minor in Philosophy at New York University. My work explores the integration of machine learning with symbolic systems, metaphysical reasoning, and scientific modeling.
      </p>

      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
        I’m especially interested in bridging neural models with formal reasoning systems, exploring questions of consciousness and meaning through computational tools. My research draws from both contemporary AI techniques — such as deep learning, attention mechanisms, and geometry-aware networks — and timeless traditions like Sankhya and Advaita Vedanta.
      </p>

      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
        I’m currently building projects involving:
        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
          <li>• RNA 3D structure prediction with Transformer-GNN hybrids</li>
          <li>• Symbolic discovery engines using neural rule evolution</li>
          <li>• Art generation classifiers distinguishing AI from human creativity</li>
          <li>• Vedantic mappings of metaphysical number systems to geometry and physics</li>
        </ul>
      </p>

      <blockquote style={{
        marginTop: '2rem',
        fontStyle: 'italic',
        fontSize: '1rem',
        color: '#5e5e5e',
        paddingLeft: '1rem',
        borderLeft: '4px solid #e2c275'
      }}>
        "I build machines that learn, reflect, and reveal the real."
      </blockquote>

      <p style={{ marginTop: '2rem', fontSize: '1rem' }}>
        When I’m not building models, I’m exploring symbolic cosmologies, drawing connections between sacred geometry and algebraic forms, or writing essays on the convergence of science, myth, and mind.
      </p>
    </div>
  )
}

export default About
