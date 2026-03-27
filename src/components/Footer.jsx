import React from 'react'

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: 'var(--white)',
    padding: '48px 24px 32px',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  topRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '32px',
    paddingBottom: '32px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '32px',
  },
  brand: {
    flex: '1',
    minWidth: '200px',
  },
  brandName: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 800,
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: 'var(--white)',
  },
  tagline: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
  },
  contact: {
    flex: '1',
    minWidth: '180px',
  },
  contactLabel: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '0.8rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    marginBottom: '12px',
  },
  contactPhone: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: 'var(--white)',
    display: 'block',
    marginBottom: '6px',
  },
  contactSite: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)',
  },
  ehoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  ehoLogo: {
    width: '52px',
    height: '52px',
    flexShrink: 0,
  },
  ehoLabel: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '0.95rem',
    color: 'var(--white)',
  },
  ehoStatement: {
    fontSize: '0.78rem',
    color: '#aaaaaa',
    lineHeight: 1.7,
    marginBottom: '24px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    paddingBottom: '24px',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.45)',
  },
}

// HUD standard equal-housing house symbol as inline SVG
function EHOLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="52"
      height="52"
      style={styles.ehoLogo}
      aria-label="Equal Housing Opportunity"
      role="img"
    >
      <rect width="100" height="100" fill="#168241" rx="4" />
      <polygon points="50,12 88,44 88,88 12,88 12,44" fill="white" />
      <rect x="38" y="60" width="24" height="28" fill="#168241" />
      <rect x="30" y="55" width="40" height="6" fill="#168241" />
      <text x="50" y="38" textAnchor="middle" fill="#168241" fontSize="7.5" fontFamily="Arial, sans-serif" fontWeight="bold">EQUAL</text>
      <text x="50" y="47" textAnchor="middle" fill="#168241" fontSize="7.5" fontFamily="Arial, sans-serif" fontWeight="bold">HOUSING</text>
      <text x="50" y="56" textAnchor="middle" fill="#168241" fontSize="7" fontFamily="Arial, sans-serif" fontWeight="bold">OPPORTUNITY</text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <style>{`
        @media (max-width: 640px) {
          .footer-top { flex-direction: column !important; }
          .footer-eho { flex-direction: column !important; text-align: center !important; align-items: center !important; }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.topRow} className="footer-top">
          <div style={styles.brand}>
            <p style={styles.brandName}>Amarillo Affordable Housing</p>
            <p style={styles.tagline}>Quality Homes. All Bills Paid. Vouchers Welcome.</p>
          </div>
          <div style={styles.contact}>
            <p style={styles.contactLabel}>Contact</p>
            <a href="tel:8066765115" style={styles.contactPhone}>(806) 676-5115</a>
            <span style={styles.contactSite}>amarilloaffordablehousing.com</span>
          </div>
        </div>

        <div style={styles.ehoRow} className="footer-eho">
          <EHOLogo />
          <span style={styles.ehoLabel}>Equal Housing Opportunity</span>
        </div>

        <p style={styles.ehoStatement}>
          We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing
          opportunity throughout the Nation. We encourage and support an affirmative advertising and
          marketing program in which there are no barriers to obtaining housing because of race, color,
          religion, sex, handicap, familial status, or national origin.
        </p>

        <p style={styles.copyright}>
          &copy; 2026 Amarillo Affordable Housing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
