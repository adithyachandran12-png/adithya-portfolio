import React from 'react'
import { sectionStyle, sectionLabel, sectionTitle, btnPrimary, btnOutline } from './shared.js'

export default function Contact() {
  return (
    <section id="contact" style={{ ...sectionStyle, textAlign: 'center' }}>
      <span style={sectionLabel}>Let's Connect</span>
      <h2 style={{ ...sectionTitle, textAlign: 'center' }}>Open to<br /><em>Opportunities</em></h2>
      <div style={{
        background: '#F5F7FC', border: '1px solid #C2CAD8', borderRadius: 28,
        padding: '4rem', maxWidth: 680, margin: '0 auto', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 250, height: 250,
          background: 'radial-gradient(circle, rgba(27,42,74,0.07), transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <p style={{ color: '#2D3E5C', marginBottom: '2rem', fontSize: '0.93rem', lineHeight: 2 }}>
          Currently seeking research fellowship opportunities in Gastroenterology.
          I bring US clinical training, active research publications, and a genuine passion for patient care.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="mailto:adithyachandran12@gmail.com" style={btnPrimary}>✉ adithyachandran12@gmail.com</a>
          <a href="https://www.linkedin.com/in/adithyachandran007" target="_blank" rel="noreferrer" style={btnOutline}>LinkedIn ↗</a>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#5A6E8C', marginTop: '1.5rem' }}>📍 Abu Dhabi, UAE</p>
      </div>
    </section>
  )
}
