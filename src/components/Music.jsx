import React from 'react'
import { sectionStyle, sectionLabel, sectionTitle } from './shared.js'

export default function Music() {
  return (
    <section id="music" style={sectionStyle}>
      <span style={sectionLabel}>Beyond Medicine</span>
      <h2 style={sectionTitle}>Music &amp;<br /><em>Performance</em></h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        {/* Left - description */}
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥁</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 400, color: '#0A1628', marginBottom: '1rem' }}>
            Blues &amp; Jazz Drummer
          </h3>
          <p style={{ fontSize: '0.93rem', color: '#2D3E5C', lineHeight: 2, marginBottom: '1.2rem' }}>
            An active member of the Blues &amp; Jazz band in Auroville, India, performing across music festivals,
            fundraisers, and community events. Music has been a constant companion throughout a demanding
            medical journey.
          </p>
          <p style={{ fontSize: '0.93rem', color: '#2D3E5C', lineHeight: 2, marginBottom: '1.2rem' }}>
            I play regular music therapy sessions at the city's cancer centre — bringing rhythm and comfort
            to patients when they need it most.
          </p>
          <p style={{ fontSize: '0.93rem', color: '#2D3E5C', lineHeight: 2, marginBottom: '2rem' }}>
            Recipient of a <strong>Distinction in Grade 6 Drum Kit</strong> from Trinity College London,
            and won <strong>1st and 3rd place</strong> in national Drum Solo competitions.
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.85rem 2rem', borderRadius: 100, fontSize: '0.78rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
              color: 'white', fontFamily: "'Inter', sans-serif", fontWeight: 500,
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(131,58,180,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            📷 Follow on Instagram
          </a>
        </div>

        {/* Right - highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            { icon: '🎵', title: 'Blues & Jazz Band', sub: 'Auroville, India · 2021 – Present' },
            { icon: '🏆', title: 'National Drum Solo — 1st Place', sub: 'National Drum Solo Competition' },
            { icon: '🏅', title: 'National Drum Solo — 3rd Place', sub: 'National Drum Solo Competition' },
            { icon: '🎓', title: 'Trinity College London', sub: 'Grade 6 Drum Kit — Distinction (March 2017)' },
            { icon: '💙', title: 'Music Therapy', sub: 'Cancer centre sessions — bringing music to patients' },
            { icon: '🎤', title: 'Live Performances', sub: 'Festivals, fundraisers for small business entrepreneurs' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F5F7FC', border: '1px solid #C2CAD8', borderRadius: 14, padding: '1rem 1.2rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#0A1628' }}>{item.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#5A6E8C' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
