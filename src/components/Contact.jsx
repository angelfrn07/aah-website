import React from 'react'

const contactInfo = [
  {
    id: 'phone',
    icon: '📞',
    heading: '(806) 676-5115',
    subtext: 'Call or text anytime',
  },
  {
    id: 'hours',
    icon: '🗓',
    heading: 'Available 7 Days a Week',
    subtext: 'We respond quickly to every inquiry',
  },
  {
    id: 'vouchers',
    icon: '🏠',
    heading: 'Vouchers Welcome',
    subtext: 'Section 8 and HCV vouchers accepted — ask about the application process',
  },
]

const styles = {
  section: {
    padding: '80px 24px',
    backgroundColor: 'var(--white)',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  sectionLabel: {
    display: 'inline-block',
    color: 'var(--blue)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '0.8rem',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-heading)',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-medium)',
    maxWidth: '480px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '56px',
  },
  card: {
    flex: '1',
    minWidth: '220px',
    maxWidth: '260px',
    backgroundColor: 'var(--light-gray)',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
    borderBottom: '4px solid var(--blue)',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '16px',
    display: 'block',
  },
  cardHeading: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'var(--text-dark)',
    marginBottom: '8px',
  },
  cardSubtext: {
    fontSize: '0.9rem',
    color: 'var(--text-medium)',
    lineHeight: 1.5,
  },
  ctaBlock: {
    background: 'linear-gradient(135deg, var(--blue) 0%, var(--green) 100%)',
    borderRadius: '16px',
    padding: '48px 32px',
    textAlign: 'center',
    color: 'var(--white)',
  },
  ctaTitle: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 800,
    fontSize: '1.8rem',
    marginBottom: '12px',
  },
  ctaText: {
    fontSize: '1.05rem',
    opacity: 0.9,
    marginBottom: '28px',
    maxWidth: '480px',
    margin: '0 auto 28px',
  },
  ctaBtn: {
    display: 'inline-block',
    backgroundColor: 'var(--white)',
    color: 'var(--green)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1.1rem',
    padding: '18px 40px',
    borderRadius: '8px',
    letterSpacing: '0.3px',
  },
}

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <style>{`
        @media (max-width: 640px) {
          .contact-grid { flex-direction: column !important; align-items: center; }
          .contact-card { max-width: 100% !important; width: 100%; }
          .contact-title { font-size: 1.8rem !important; }
          .cta-title { font-size: 1.4rem !important; }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionLabel}>Reach Out Today</span>
          <h2 style={styles.sectionTitle} className="contact-title">Get In Touch</h2>
          <p style={styles.sectionSubtitle}>
            Questions about availability or voucher acceptance? We&rsquo;re here to help.
          </p>
        </div>

        <div style={styles.grid} className="contact-grid">
          {contactInfo.map((item) => (
            <div key={item.id} style={styles.card} className="contact-card">
              <span style={styles.icon}>{item.icon}</span>
              <h3 style={styles.cardHeading}>{item.heading}</h3>
              <p style={styles.cardSubtext}>{item.subtext}</p>
            </div>
          ))}
        </div>

        <div style={styles.ctaBlock}>
          <h3 style={styles.ctaTitle} className="cta-title">Ready to See a Home?</h3>
          <p style={styles.ctaText}>
            Call or text us today. We&rsquo;ll answer your questions and schedule a showing at your convenience.
          </p>
          <a href="tel:8066765115" style={styles.ctaBtn}>
            Call (806) 676-5115
          </a>
        </div>
      </div>
    </section>
  )
}
