import React, { useState } from 'react'
import { sectionStyle, sectionLabel, sectionTitle } from './shared.js'

const publications = [
  { num: 1, first: true, title: 'Chandran A, Kommu H, Munir S, et al. "Efficacy of Fibrin Glue to Prevent Bleeding after Endoscopic Submucosal Dissection — A Systematic Review and Meta-Analysis of Randomized Controlled Trials"', journal: 'Therapeutic Advances in Gastrointestinal Endoscopy (Sage) · February 2026', status: 'submitted' },
  { num: 2, title: 'Prasad A, Chandran A, et al. "Early Initiation of NOACs After Atrial Fibrillation: A Systematic Review and Meta-analysis of RCTs with Trial Sequential Analysis"', journal: 'Clinical Cardiology (Wiley) · Jan 2026', status: 'submitted' },
  { num: 3, first: true, title: 'Chandran A, Jin S, Gandhi S, Munzar B. "Capnocytophaga Presenting as a Necrotic Skin Ulcer in a Seemingly Immunocompetent Host: A Case Report"', journal: 'Annals of Internal Medicine Clinical Cases · Nov 2025', status: 'submitted' },
  { num: 4, title: 'Das A, Khattak F, et al., Chandran A. "Over-the-Scope Clips for Non-Variceal UGIB: A Bayesian Meta-Analysis of RCTs with Monte Carlo Simulation on Cost Effectiveness"', journal: 'Expert Review of Gastroenterology & Hepatology (Taylor & Francis) · Nov 2025', status: 'submitted' },
  { num: 5, title: 'Das A, Khan AS, et al., Chandran A. "Tailored Culture/PCR-Guided Therapy vs Concomitant Quadruple for H. pylori: An Updated Bayesian Systematic Review & Meta-Analysis"', journal: 'Journal of Gastrointestinal and Liver Diseases · Oct 2025', status: 'accepted' },
  { num: 6, title: 'Das A, Gupta A, et al., Chandran A. "Empiric Platelet Transfusion in Acute Variceal Bleeding is Associated with Higher Mortality and Rebleeding: A Systematic Review & Meta-Analysis"', journal: 'American Journal of Gastroenterology (Abstract) · DOI: 10.14309/01.ajg.0001132756.55776.df · Oct 2025' },
  { num: 7, first: true, title: 'Chandran A, Saravanan S, Seetharaman S, Jain D. "Under the Radar — A Surprising Twist in a Case of Hepatic Decompensation"', journal: 'Journal of Hospital Medicine (Abstract) · DOI: 10.1002/jhm.70025' },
  { num: 8, title: 'Pillarisetti SP, Mathiyalagan K, et al., Chandran A. "Retrospective Analysis of Seasonal Patterns in Atrial Fibrillation Incidence and Treatment Fluctuation"', journal: 'Bioinformation · DOI: 10.6026/973206300214293 · Sep 2025' },
  { num: 9, first: true, title: 'Chandran A, Mohanan S, Maharani B. "Patterns of CAM Use among Psoriasis Patients in a Tertiary Care Hospital in South India — A Cross-sectional Study"', journal: 'Clinical Dermatology Reviews · DOI: 10.4103/cdr.cdr_110_24' },
  { num: 10, first: true, title: 'Chandran A. Book Chapter: "Precision Medicine in Hypertension Therapy" — Advances in Cardiovascular Medicine: Bridging Research and Practice', journal: 'Ingenious Research (Amazon) · March 2025', link: 'https://amzn.in/d/bi3pJbz' },
]

const international = [
  { date: 'October 2025 · Phoenix, Arizona, USA', title: 'American College of Gastroenterology (ACG) Annual Scientific Meeting 2025 — "Empiric Platelet Transfusion in Acute Variceal Bleeding..." — Research Poster', venue: 'Das A, Gupta A, Addanki S, Varsadiya BK, Ghosh A, Chandran A, et al.' },
  { date: 'April 2025 · Las Vegas, Nevada, USA', title: 'Society of Hospital Medicine (SHM) Converge Conference — "Under the Radar – A Surprising Twist in a Case of Hepatic Decompensation" — Case Report', venue: 'Chandran A, Saravanan S, Seetharaman S, Jain D.', prize: '1st Author' },
  { date: 'June 2024 · Groningen, The Netherlands', title: '31st International Students Congress of Medical Sciences (ISCOMS) — "Beyond the Flakes — CAM Use among Psoriasis Patients in South India"', venue: 'Chandran A, Mohanan S, Maharani B.', prize: '1st Author' },
]

const national = [
  { date: 'July 2024 · Pondicherry', title: 'Sri Balaji Vidyapeeth University — National UG Scientific Meet — "Furious Overdose: A Rare Survivor of Carbofuran Poisoning Exceeding Four Times the Lethal Dose"', venue: 'Chandran A, Saravanan S, Seetharaman S, Jain D.', prize: '🥇 1st Prize' },
  { date: 'June 2024 · Chennai', title: 'Sri Ramachandra University — National UG Scientific Meet — "Peritoneal Tuberculosis Masquerading as Decompensated Liver Disease"', venue: 'Chandran A, Saravanan S, Seetharaman S, Jain D.', prize: '🥈 2nd Prize' },
  { date: 'December 2023 · India', title: '98th All India Medical Conference (IMA) — "Patterns of CAM Use by Psoriatic Patients in a Tertiary Care Hospital, South India"', venue: 'Chandran A, Mohanan S, Maharani B.', prize: '🥈 2nd Prize' },
]

const badge = (label, color = '#1B2A4A', bg = 'rgba(27,42,74,0.1)') => ({
  display: 'inline-block', fontSize: '0.61rem', padding: '0.18rem 0.55rem',
  borderRadius: 100, background: bg, color, letterSpacing: '0.06em',
  textTransform: 'uppercase', marginLeft: '0.4rem', verticalAlign: 'middle',
})

export default function Research() {
  const [tab, setTab] = useState('publications')

  return (
    <section id="research" style={sectionStyle}>
      <span style={sectionLabel}>Scholarly Work</span>
      <h2 style={sectionTitle}>Research &amp;<br /><em>Publications</em></h2>

      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {['publications', 'presentations'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '0.5rem 1.2rem', borderRadius: 100, cursor: 'pointer',
            border: tab === t ? 'none' : '1.5px solid #C2CAD8',
            background: tab === t ? '#1B2A4A' : 'transparent',
            color: tab === t ? 'white' : '#2D3E5C',
            fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
            letterSpacing: '0.06em', transition: 'all 0.3s',
          }}>
            {t === 'publications' ? 'Publications' : 'Conference Presentations'}
          </button>
        ))}
      </div>

      {tab === 'publications' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {publications.map(p => (
            <div key={p.num} style={{ background: '#F5F7FC', border: '1px solid #C2CAD8', borderRadius: 16, padding: '1.3rem 1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#C2CAD8', fontWeight: 400, minWidth: 28, lineHeight: 1 }}>{p.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.86rem', color: '#0A1628', lineHeight: 1.7, marginBottom: '0.3rem' }}>
                  {p.title}
                  {p.first && <span style={badge('0A1628', '#0A1628', 'rgba(10,22,40,0.08)')}>1st Author</span>}
                  {p.status === 'submitted' && <span style={badge('#1B2A4A')}>Submitted</span>}
                  {p.status === 'accepted' && <span style={badge('#1A6A1A', '#1A6A1A', 'rgba(92,184,92,0.12)')}>Accepted</span>}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#1B2A4A', fontStyle: 'italic' }}>
                  {p.journal}
                  {p.link && <> · <a href={p.link} target="_blank" rel="noreferrer" style={{ color: '#1B2A4A' }}>View on Amazon ↗</a></>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'presentations' && (
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#0A1628', marginBottom: '1.2rem', fontWeight: 400 }}>International</h3>
          {international.map((c, i) => (
            <div key={i} style={{ borderLeft: '2px solid #C2CAD8', padding: '0.8rem 1.2rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.68rem', color: '#1B2A4A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                {c.date} {c.prize && <span style={{ background: '#1B2A4A', color: 'white', borderRadius: 100, padding: '0.15rem 0.55rem', fontSize: '0.66rem', marginLeft: '0.4rem' }}>{c.prize}</span>}
              </div>
              <div style={{ fontSize: '0.87rem', color: '#0A1628', lineHeight: 1.6, marginBottom: '0.3rem' }}>{c.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#5A6E8C' }}>{c.venue}</div>
            </div>
          ))}
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#0A1628', margin: '2rem 0 1.2rem', fontWeight: 400 }}>National (India)</h3>
          {national.map((c, i) => (
            <div key={i} style={{ borderLeft: '2px solid #C2CAD8', padding: '0.8rem 1.2rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.68rem', color: '#1B2A4A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                {c.date} {c.prize && <span style={{ background: '#1B2A4A', color: 'white', borderRadius: 100, padding: '0.15rem 0.55rem', fontSize: '0.66rem', marginLeft: '0.4rem' }}>{c.prize}</span>}
              </div>
              <div style={{ fontSize: '0.87rem', color: '#0A1628', lineHeight: 1.6, marginBottom: '0.3rem' }}>{c.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#5A6E8C' }}>{c.venue}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
