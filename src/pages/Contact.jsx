import React from 'react'

const Contact = () => {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '700px', margin: '0 auto', color: '#1a3c2d' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Let’s Connect</h1>
      
      <p style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
        I'm open to collaboration, conversation, or questions — whether you're working in AI, neuroscience, symbolic systems, or something entirely unexpected.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <a href="mailto:rohit.ravi2@gmail.com" style={{ display: 'block', marginBottom: '0.5rem' }}>📧 rohit.ravi2@gmail.com</a>
        <a href="https://linkedin.com/in/rohit-ravi2" target="_blank" rel="noreferrer">🔗 LinkedIn</a> |{" "}
        <a href="https://github.com/rohit-ravi2" target="_blank" rel="noreferrer">💻 GitHub</a> |{" "}
        <a href="https://instagram.com/rohit.ravi2" target="_blank" rel="noreferrer">📷 Instagram</a> |{" "}
        <a href="https://kaggle.com/rohit-ravi2" target="_blank" rel="noreferrer">📊 Kaggle</a>
      </div>

      <form action="https://formspree.io/f/yourFormID" method="POST" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        background: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)'
      }}>
        <input type="text" name="name" placeholder="Your name" required style={inputStyle} />
        <input type="email" name="email" placeholder="Your email" required style={inputStyle} />
        <textarea name="message" rows="5" placeholder="Your message" required style={inputStyle} />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" style={buttonStyle}>📄 Download Resume</a>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  fontSize: '1rem'
}

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  background: '#1a3c2d',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  fontSize: '1rem'
}

export default Contact
