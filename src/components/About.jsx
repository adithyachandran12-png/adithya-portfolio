import React from 'react'
import { sectionStyle, sectionLabel, sectionTitle } from './shared.js'

const stats = [
  { num: '10+', label: 'Peer-reviewed publications & manuscripts' },
  { num: '3',   label: 'US clinical rotations — Stanford, Stony Brook, Baylor' },
  { num: '8.5', label: 'IELTS Band Score · OET Gold Badge' },
  { num: '6+',  label: 'National & international awards & prizes' },
]

export default function About() {
  return (
    <section id="about" style={sectionStyle}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        <div>
          <span style={sectionLabel}>About Me</span>
          <h2 style={sectionTitle}>Medicine, Research<br /><em>&amp; Purpose.</em></h2>
          <p style={para}>
            I am Adithya Chandran, a physician from Abu Dhabi, UAE, graduated from Indira Gandhi Medical
            College and Research Institute, Pondicherry, India.
          </p>
          <p style={para}>
            My clinical journey has taken me across three prestigious US institutions: Stanford School of
            Medicine, Stony Brook University, and Baylor College of Medicine, with hands-on training in
            Oncology, Infectious Diseases, and Internal Medicine.
          </p>
          <p style={para}>
            I pair clinical work with active research: peer-reviewed publications, international presentations
            at ACG 2025, SHM Converge, and ISCOMS (Netherlands), and a book chapter on precision medicine
            in hypertension.
          </p>
          <p style={para}>
            Off-duty, I perform with a Blues &amp; Jazz band, play music therapy sessions at a cancer centre,
            and volunteer with food banks and NGOs across the US and India.
          </p>
          <p style={{ ...para, fontSize: '0.8rem', color: '#5A6E8C', marginTop: '0.5rem' }}>
            🌐 English · Hindi · Malayalam · Tamil
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={statCard}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 500, color: '#1B2A4A', lineHeight: 1, marginBottom: '0.4rem' }}>{s.num}</div>
              <div style={{ fontSize: '0.73rem', color: '#5A6E8C', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const para = { color: '#2D3E5C', marginBottom: '1.2rem', fontSize: '0.93rem', lineHeight: 2 }
const statCard = {
  background: '#F5F7FC', border: '1px solid #C2CAD8', borderRadius: 16, padding: '1.4rem',
  transition: 'transform 0.3s, box-shadow 0.3s',
}
