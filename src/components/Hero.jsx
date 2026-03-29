import React from 'react'

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 32px',
    backgroundColor: 'rgba(0,0,0,0.15)',
    position: 'relative',
    zIndex: 10,
  },
  navBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  navLogo: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  navName: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'var(--white)',
    lineHeight: 1.2,
  },
  navPhone: {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '1rem',
    color: 'var(--white)',
    letterSpacing: '0.5px',
  },
  hero: {
    background: 'linear-gradient(135deg, var(--green) 0%, #0d5a2d 60%, var(--blue) 100%)',
    color: 'var(--white)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heroContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'var(--gold)',
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '0.75rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '6px 16px',
    borderRadius: '20px',
    marginBottom: '24px',
  },
  headline: {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '16px',
    fontFamily: 'var(--font-heading)',
  },
  subheadline: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--gold)',
    marginBottom: '20px',
    fontFamily: 'var(--font-heading)',
  },
  body: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '40px',
    maxWidth: '600px',
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaPrimary: {
    display: 'inline-block',
    backgroundColor: 'var(--white)',
    color: 'var(--green)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1.05rem',
    padding: '16px 32px',
    borderRadius: '8px',
    border: '2px solid var(--white)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    letterSpacing: '0.3px',
  },
  ctaSecondary: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: 'var(--white)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1.05rem',
    padding: '16px 32px',
    borderRadius: '8px',
    border: '2px solid rgba(255,255,255,0.6)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    letterSpacing: '0.3px',
  },
  trustBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    padding: '20px 32px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexWrap: 'wrap',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '0.9rem',
    fontWeight: 600,
  },
  checkIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: 'var(--gold)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    flexShrink: 0,
  },
}

export default function Hero() {
  return (
    <section style={styles.hero}>
      <style>{`
        @media (max-width: 480px) {
          .hero-nav { padding: 16px !important; flex-direction: column !important; gap: 12px !important; text-align: center !important; }
          .hero-headline { font-size: 2rem !important; }
          .hero-subheadline { font-size: 1.2rem !important; }
          .hero-cta-group { flex-direction: column !important; width: 100%; }
          .hero-cta-group a { width: 100%; text-align: center !important; }
          .trust-bar { gap: 16px !important; }
        }
        @media (max-width: 375px) {
          .hero-headline { font-size: 1.75rem !important; }
        }
      `}</style>

      <nav style={styles.nav} className="hero-nav">
        <div style={styles.navBrand}>
          <img
            src="/aah-logo.png"
            alt="Amarillo Affordable Housing logo"
            style={styles.navLogo}
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span style={styles.navName}>Amarillo Affordable<br />Housing</span>
        </div>
        <a href="tel:8779096309" style={styles.navPhone}>
          (877) 909-6309
        </a>
      </nav>

      <div style={styles.heroContent}>
        <span style={styles.badge}>Now Leasing in Amarillo, TX</span>
        <h1 style={styles.headline} className="hero-headline">
          Quality Homes<br />in Amarillo
        </h1>
        <p style={styles.subheadline} className="hero-subheadline">
          All Bills Paid. Section 8 Vouchers Welcome.
        </p>
        <p style={styles.body}>
          Spacious 3-bedroom and 4-bedroom homes available now.
          Call or text to schedule a showing.
        </p>
        <div style={styles.ctaGroup} className="hero-cta-group">
          <a href="tel:8779096309" style={styles.ctaPrimary}>
            Call (877) 909-6309
          </a>
          <a href="#properties" style={styles.ctaSecondary}>
            View Available Homes
          </a>
        </div>
      </div>

      <div style={styles.trustBar} className="trust-bar">
        {[
          'All Bills Paid',
          'Section 8 Welcome',
          'No Application Fee',
          'Available Now',
        ].map((item) => (
          <div key={item} style={styles.trustItem}>
            <div style={styles.checkIcon}>&#10003;</div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
