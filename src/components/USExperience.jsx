import React from 'react'
import { sectionStyle, sectionLabel, sectionTitle, cardStyle } from './shared.js'

const rotations = [
  {
    school: 'Stanford University',
    dept: 'Inpatient Medical Oncology — Sub-Internship',
    date: 'Stanford Health Care · March 2025',
    points: [
      'Independently managed 2–4 patients from admission to discharge under attending supervision',
      'Rounded on 5–15 patients daily on the Solid Oncology service (Med 10)',
      'Documented progress notes and managed ED admissions using EMR (EPIC)',
      'Engaged in morning reports, noon conferences, grand rounds, and M&M sessions',
      'Collaborated with case managers, nursing, and social work for patient-centred care',
    ],
  },
  {
    school: 'Stony Brook University',
    dept: 'Infectious Diseases — Inpatient Elective',
    date: 'Stony Brook Southampton Hospital · April 2025',
    points: [
      'Worked with attending on consult cases across Internal Medicine, Neurology, and Surgery',
      'Documented consult notes and reviewed labs using EMR (Cerner)',
      'Participated in antimicrobial stewardship discussions on targeted therapy & treatment duration',
      'Lead-authored a case report on Capnocytophaga infection',
    ],
  },
  {
    school: 'Baylor College of Medicine',
    dept: 'Internal Medicine — Outpatient Elective',
    date: "Baylor St Luke's Medical Center · November 2024",
    points: [
      'Conducted detailed history-taking and focused physical examinations',
      'Documented clinical assessments and plans using EMR (EPIC)',
      'Presented patient assessments and assisted in formulating management plans with the attending',
    ],
  },
]

export default function USExperience() {
  return (
    <section id="us-experience" style={sectionStyle}>
      <span style={sectionLabel}>International Clinical Training</span>
      <h2 style={sectionTitle}>U.S. Clinical<br /><em>Experience</em></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
        {rotations.map((r, i) => (
          <div key={i} style={{ ...cardStyle, transition: 'box-shadow 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(10,22,40,0.09)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '0.7rem' }}>🏥</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 600, color: '#0A1628', marginBottom: '0.2rem' }}>{r.school}</div>
            <div style={{ fontSize: '0.76rem', color: '#1B2A4A', marginBottom: '0.2rem', fontWeight: 500 }}>{r.dept}</div>
            <div style={{ fontSize: '0.7rem', color: '#5A6E8C', marginBottom: '1rem', letterSpacing: '0.06em' }}>{r.date}</div>
            <ul style={{ listStyle: 'none' }}>
              {r.points.map((p, j) => (
                <li key={j} style={{ fontSize: '0.79rem', color: '#2D3E5C', padding: '0.3rem 0 0.3rem 1rem', position: 'relative', lineHeight: 1.7 }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1B2A4A' }}>—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
