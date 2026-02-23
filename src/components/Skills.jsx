import React from 'react'
import { sectionStyle, sectionLabel, sectionTitle, cardStyle } from './shared.js'

const skills = [
  { icon: '🩺', name: 'Clinical Medicine', desc: 'History-taking, physical examination, and differential diagnosis across Internal Medicine, Surgery, Paediatrics, and Oncology.' },
  { icon: '🔬', name: 'Clinical Research', desc: 'Systematic reviews, meta-analyses, Bayesian statistics, Monte Carlo simulation, cross-sectional study design, and case reporting.' },
  { icon: '🫀', name: 'Emergency & Critical Care', desc: 'ACLS/BLS certified. Procedures: LP, paracentesis, pleural tap, ABG, ECG interpretation, suturing, Foley catheterisation.' },
  { icon: '💻', name: 'EMR Systems', desc: 'Proficient in EPIC (Stanford, Baylor) and Cerner (Stony Brook). SHC Epic 050 New Hire Provider Inpatient certified.' },
  { icon: '🌐', name: 'Communication', desc: 'OET Gold Badge. IELTS 8.5. Experienced across multicultural patient populations in India and the United States.' },
  { icon: '🎓', name: 'Leadership & Community', desc: 'VP Operations, Edforall NGO. Head of Organizing Committee, 1st TEDx in Puducherry. ESL educator for 68 underprivileged students.' },
]

const certs = [
  '✅ USMLE Step 1: Pass (March 2025)',
  '🏅 OET: Passed with Gold Badge (Nov 2025)',
  '❤️ BLS & ACLS — American Heart Association (2024)',
  '📋 HIPAA Certified',
  '🧪 NYC Infection Control & Barrier Precautions',
  '🏫 SHC Epic 050 New Hire Provider Inpatient',
  '📖 IELTS Academic: Band 8.5 (June 2023)',
  '🎓 ACP & ACC — Student Member',
  '🌏 Asian Medical Students Assoc. · IMA-MSN',
]

export default function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <span style={sectionLabel}>Expertise &amp; Qualifications</span>
      <h2 style={sectionTitle}>Skills &amp;<br /><em>Certifications</em></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {skills.map((s, i) => (
          <div key={i} style={{ ...cardStyle, transition: 'box-shadow 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(10,22,40,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{s.icon}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 500, color: '#0A1628', marginBottom: '0.5rem' }}>{s.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#5A6E8C', lineHeight: 1.8 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0A1628', marginBottom: '1.5rem', fontWeight: 400 }}>Certifications &amp; Memberships</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.9rem' }}>
        {certs.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#F5F7FC', border: '1px solid #C2CAD8', borderRadius: 14, padding: '0.9rem 1.1rem', fontSize: '0.8rem', color: '#2D3E5C' }}>
            {c}
          </div>
        ))}
      </div>
    </section>
  )
}
