import React from 'react'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '7rem 3rem 5rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background circles */}
      <div style={{
        position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
        width: 600, height: 600, background: 'rgba(27,42,74,0.07)', top: -150, right: -150,
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
        width: 400, height: 400, background: 'rgba(10,22,40,0.05)', bottom: 0, left: -100,
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
      }}>
        {/* Left */}
        <div style={{ animation: 'fadeUp 0.8s ease both' }}>
          <span style={{
            display: 'inline-block', fontSize: '0.7rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#1B2A4A', border: '1px solid #1B2A4A',
            padding: '0.35rem 0.9rem', borderRadius: 100, marginBottom: '1.5rem',
          }}>
            Physician · Researcher · Leader
          </span>

          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 5.5vw, 4.8rem)',
            fontWeight: 400, lineHeight: 1.1, color: '#0A1628', marginBottom: '0.5rem',
          }}>
            Adithya<br /><em style={{ color: '#1B2A4A' }}>Chandran</em>
          </h1>

          <p style={{
            fontFamily: "'Playfair Display', serif", fontSize: '1.4rem',
            fontWeight: 400, color: '#2D3E5C', marginBottom: '0.3rem',
          }}>
            MBBS — Doctor & Clinical Researcher
          </p>

          <p style={{ fontSize: '0.78rem', color: '#5A6E8C', letterSpacing: '0.06em', marginBottom: '1.8rem' }}>
            📍 Abu Dhabi, UAE
          </p>

          <p style={{ fontSize: '0.92rem', color: '#2D3E5C', maxWidth: 450, lineHeight: 2, marginBottom: '2.5rem' }}>
            A physician with hands-on clinical training at Stanford, Stony Brook, and Baylor in the United States,
            and trained at a government medical college in India, actively involved in research and volunteership,
            and committed to providing patient-centred care.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:adithyachandran12@gmail.com" style={btnPrimary}>✉ Get in Touch</a>
            <a href="#research" style={btnOutline}>View Research ↓</a>
          </div>
        </div>

        {/* Right - Photo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 340 }}>
            <div style={{
              width: 300, height: 380,
              borderRadius: '180px 180px 120px 120px',
              background: 'linear-gradient(145deg, #C2CAD8, #A8B5C8)',
              overflow: 'hidden', margin: '0 auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Replace src below with your actual photo import or URL */}
              <img
                src="/Images/linkedin-headshot.jpg"
                alt="Adithya Chandran"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onLoad={() => console.log('Image loaded successfully')}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span style={{
                display: 'none', fontFamily: "'Playfair Display', serif",
                fontSize: '6rem', fontWeight: 400, color: '#0A1628', opacity: 0.28,
              }}>AC</span>
            </div>
            <div style={{
              position: 'absolute', bottom: -15, right: -10,
              background: '#F5F7FC', border: '1px solid #C2CAD8',
              borderRadius: 16, padding: '0.8rem 1.2rem',
              boxShadow: '0 8px 30px rgba(10,22,40,0.12)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{
                  width: 8, height: 8, background: '#5CB85C', borderRadius: '50%',
                  display: 'inline-block', marginRight: 5, animation: 'pulse 2s infinite',
                }} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.82rem', color: '#0A1628', whiteSpace: 'nowrap' }}>
                  USMLE Step 1 ✓ · OET Gold
                </span>
              </div>
              <div style={{ fontSize: '0.67rem', color: '#5A6E8C', letterSpacing: '0.06em' }}>
                MBBS · IGMCRI, Pondicherry
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const btnPrimary = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.85rem 2rem', borderRadius: 100, fontSize: '0.78rem',
  letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
  background: '#1B2A4A', color: 'white', transition: 'all 0.3s ease',
  fontFamily: "'Inter', sans-serif",
}

const btnOutline = {
  ...btnPrimary,
  background: 'transparent', color: '#0A1628',
  border: '1.5px solid #C2CAD8',
}
