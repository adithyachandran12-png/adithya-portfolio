export const sectionStyle = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '6rem 3rem',
}

export const sectionLabel = {
  fontSize: '0.68rem',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#1B2A4A',
  marginBottom: '0.6rem',
  display: 'block',
}

export const sectionTitle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
  fontWeight: 400,
  color: '#0A1628',
  lineHeight: 1.2,
  marginBottom: '3rem',
}

export const cardStyle = {
  background: '#F5F7FC',
  border: '1px solid #C2CAD8',
  borderRadius: 20,
  padding: '1.8rem',
}

export const btnPrimary = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.85rem 2rem', borderRadius: 100, fontSize: '0.78rem',
  letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
  background: '#1B2A4A', color: 'white', border: 'none', cursor: 'pointer',
  fontFamily: "'Inter', sans-serif", fontWeight: 400,
}

export const btnOutline = {
  ...btnPrimary,
  background: 'transparent', color: '#0A1628',
  border: '1.5px solid #C2CAD8',
}
