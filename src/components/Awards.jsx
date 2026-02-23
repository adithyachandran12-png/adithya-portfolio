import React from 'react'
import { sectionLabel, sectionTitle } from './shared.js'

const awards = [
  { medal: '🏆', place: 'Top Honor · February 2026', title: 'Best All-Rounder — MBBS Class of 2025', org: 'Awarded by the Ministry of India · IGMCRI, Pondicherry. Outstanding academic performance, research, extracurriculars & leadership.' },
  { medal: '🎓', place: 'Distinction · March 2021', title: 'Distinction in Years 1 & 2 of MBBS', org: 'Physiology, Biochemistry, Pharmacology, Pathology · IGMCRI, Pondicherry' },
  { medal: '🥇', place: 'National Rank 1 · March 2018', title: 'Perfect Score — Grade 12 Psychology', org: 'Highest among 17,651 test-takers nationally · Indian School Muscat · Academic Merit Award (>90% all subjects)' },
  { medal: '🥇', place: '1st Prize · July 2024', title: 'Case Report — 1st Prize', org: 'Sri Balaji Vidyapeeth University National UG Scientific Meet · "Furious Overdose: A Rare Survivor of Carbofuran Poisoning"', year: 'Chandran A, Saravanan S, Seetharaman S, Jain D.' },
  { medal: '🥈', place: '2nd Prize · June 2024', title: 'Case Report — 2nd Prize', org: 'Sri Ramachandra University National UG Scientific Meet · "Peritoneal Tuberculosis Masquerading as Decompensated Liver Disease"', year: 'Chandran A, Saravanan S, Seetharaman S, Jain D.' },
  { medal: '🥈', place: '2nd Prize · December 2023', title: 'Research Poster — 2nd Prize', org: '98th All India Medical Conference (IMA) · "CAM Use by Psoriatic Patients in a Tertiary Care Hospital, South India"', year: 'Chandran A, Mohanan S, Maharani B.' },
  { medal: '🥁', place: 'Distinction · March 2017', title: 'Trinity College London — Drum Kit Grade 6', org: 'Distinction awarded. 1st & 3rd place — National Drum Solo Competitions. Music therapy at the city\'s cancer centre.' },
]

export default function Awards() {
  return (
    <div id="awards" style={{ background: 'linear-gradient(135deg,#EEF2FA,#EEF1F7)', padding: '6rem 3rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <span style={sectionLabel}>Honors &amp; Distinctions</span>
        <h2 style={sectionTitle}>Awards &amp;<br /><em>Recognition</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {awards.map((a, i) => (
            <div key={i} style={{
              background: 'white', border: '1px solid #C2CAD8', borderRadius: 20,
              padding: '1.8rem', position: 'relative', overflow: 'hidden',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,42,74,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, #1B2A4A, #2D4470)' }} />
              <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{a.medal}</div>
              <div style={{ display: 'inline-block', fontSize: '0.64rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1B2A4A', background: 'rgba(27,42,74,0.08)', borderRadius: 100, padding: '0.2rem 0.65rem', marginBottom: '0.6rem' }}>{a.place}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 500, color: '#0A1628', lineHeight: 1.4, marginBottom: '0.5rem' }}>{a.title}</div>
              <div style={{ fontSize: '0.76rem', color: '#5A6E8C', lineHeight: 1.7 }}>{a.org}</div>
              {a.year && <div style={{ fontSize: '0.68rem', color: '#1B2A4A', letterSpacing: '0.06em', marginTop: '0.8rem', fontWeight: 500 }}>{a.year}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
