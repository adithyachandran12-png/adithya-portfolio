import React, { useEffect, useState } from 'react'

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '1.3rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: 'rgba(238,241,247,0.92)', backdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(27,42,74,0.12)',
  },
  logo: {
    fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 500,
    color: '#0A1628', textDecoration: 'none',
  },
  links: { display: 'flex', gap: '2rem', listStyle: 'none' },
  link: {
    fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#2D3E5C', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer',
  },
}

const navItems = ['about','awards','us-experience','experience','research','skills','music','contact']

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let cur = ''
      navItems.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>Adithya Chandran</a>
      <ul style={styles.links}>
        {navItems.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              style={{ ...styles.link, color: active === id ? '#1B2A4A' : '#2D3E5C', fontWeight: active === id ? 600 : 400 }}
            >
              {id === 'us-experience' ? 'US Clinical' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
