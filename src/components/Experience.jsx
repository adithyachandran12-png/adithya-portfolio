import React from 'react'
import { sectionStyle, sectionLabel, sectionTitle } from './shared.js'

const jobs = [
  {
    date: 'November 2025 – March 2026',
    role: 'Duty Medical Officer — Internal Medicine',
    org: 'Daya Healthcare · Kerala, India',
    points: [
      'Efficiently manage 20–30 outpatients per day with independent clinical decision-making',
      'Perform comprehensive medical assessments and implement evidence-based treatment plans',
      'Deliver preventive care, routine screenings, and early management of acute and chronic conditions',
    ],
  },
  {
    date: 'July 2023 – June 2025',
    role: 'Medical Intern',
    org: 'Indira Gandhi Medical College & Research Institute · Pondicherry',
    points: [
      'Rotations across Internal Medicine, General Surgery, Paediatrics, OB/GYN, and more',
      'Proficient in ABG sampling, ECG interpretation, venipuncture, NG tube insertion, Foley catheterisation, lumbar puncture, abdominal paracentesis, pleural tap, wound care & suturing',
      'High-volume management of 50–60 patients/day in a tertiary government hospital serving ~3,500 patients/day',
      'Conducted normal vaginal deliveries, assisted C-sections, and performed newborn care',
      'Participated in code resuscitations',
    ],
  },
  {
    date: 'August 2018 – July 2023',
    role: 'MBBS — Bachelor of Medicine & Surgery',
    org: 'Indira Gandhi Medical College & Research Institute · Pondicherry',
    points: ['Distinction in Years 1 & 2. Active in community health camps, research, and student leadership throughout the course.'],
  },
  {
    date: '2019 – 2025',
    role: 'Vice President — Operations',
    org: 'Edforall NGO',
    points: ['Led weekly educational sessions for 68 underprivileged students. Taught ESL and provided career counselling. Implemented e-learning tools to improve outcomes.'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={sectionStyle}>
      <span style={sectionLabel}>Career Journey</span>
      <h2 style={sectionTitle}>Clinical<br /><em>Experience</em></h2>
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 8, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #1B2A4A, transparent)' }} />
        {jobs.map((j, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: '3rem', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '-2.4rem', top: 6, width: 10, height: 10, borderRadius: '50%', background: '#1B2A4A', border: '2px solid #EEF1F7', boxShadow: '0 0 0 3px rgba(27,42,74,0.2)' }} />
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1B2A4A', marginBottom: '0.4rem' }}>{j.date}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 500, color: '#0A1628', marginBottom: '0.2rem' }}>{j.role}</div>
            <div style={{ fontSize: '0.83rem', color: '#2D3E5C', marginBottom: '0.8rem' }}>{j.org}</div>
            <ul style={{ fontSize: '0.84rem', color: '#5A6E8C', lineHeight: 1.9, maxWidth: 620 }}>
              {j.points.map((p, k) => <li key={k} style={{ marginLeft: '1rem', marginBottom: '0.3rem' }}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
