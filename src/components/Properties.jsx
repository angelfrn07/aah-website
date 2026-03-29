import React from 'react'

const features = [
  'All Bills Paid (electric, water, gas included)',
  'Section 8 Vouchers Accepted',
  'No additional utility costs',
  'Well-maintained property',
]

const properties = [
  {
    id: 'three-br',
    type: '3-Bedroom Home',
    description: 'Spacious three-bedroom home with room to breathe. All utilities included — move in without worrying about separate bills.',
  },
  {
    id: 'four-br',
    type: '4-Bedroom Home',
    description: 'Large four-bedroom home with generous living spaces. All utilities included. Ideal for anyone needing extra space.',
  },
]

const styles = {
  section: {
    padding: '80px 24px',
    backgroundColor: 'var(--light-gray)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  sectionLabel: {
    display: 'inline-block',
    color: 'var(--green)',
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
    maxWidth: '500px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    gap: '32px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'var(--white)',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    borderTop: '4px solid var(--green)',
    padding: '36px 32px',
    flex: '1',
    minWidth: '280px',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'var(--gold)',
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '0.7rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '5px 12px',
    borderRadius: '20px',
    marginBottom: '20px',
    alignSelf: 'flex-start',
  },
  cardTitle: {
    fontSize: '1.6rem',
    fontWeight: 800,
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-heading)',
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '1rem',
    color: 'var(--text-medium)',
    marginBottom: '24px',
    lineHeight: 1.6,
  },
  featureList: {
    listStyle: 'none',
    marginBottom: '32px',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '10px 0',
    borderBottom: '1px solid var(--light-gray)',
    fontSize: '0.95rem',
    color: 'var(--text-dark)',
    fontWeight: 600,
  },
  checkCircle: {
    width: '22px',
    height: '22px',
    minWidth: '22px',
    backgroundColor: 'var(--green)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    marginTop: '1px',
  },
  cta: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'var(--green)',
    color: 'var(--white)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '16px 24px',
    borderRadius: '8px',
    letterSpacing: '0.3px',
    transition: 'background-color 0.2s',
  },
  allBillsBanner: {
    backgroundColor: 'var(--green)',
    color: 'var(--white)',
    borderRadius: '12px',
    padding: '32px 24px',
    textAlign: 'center',
    marginTop: '48px',
  },
  bannerTitle: {
    fontFamily: 'var(--font-heading)',
    fontWeight: 800,
    fontSize: '1.8rem',
    marginBottom: '8px',
  },
  bannerText: {
    fontSize: '1.05rem',
    opacity: 0.9,
    maxWidth: '500px',
    margin: '0 auto',
  },
}

export default function Properties() {
  return (
    <section id="properties" style={styles.section}>
      <style>{`
        @media (max-width: 640px) {
          .props-grid { flex-direction: column !important; }
          .prop-card { max-width: 100% !important; }
          .props-title { font-size: 1.8rem !important; }
          .banner-title { font-size: 1.4rem !important; }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionLabel}>Available Now</span>
          <h2 style={styles.sectionTitle} className="props-title">Available Homes</h2>
          <p style={styles.sectionSubtitle}>
            All homes include every utility in your rent. One bill. Zero surprises.
          </p>
        </div>

        <div style={styles.grid} className="props-grid">
          {properties.map((prop) => (
            <div key={prop.id} style={styles.card} className="prop-card">
              <span style={styles.badge}>AVAILABLE NOW</span>
              <h3 style={styles.cardTitle}>{prop.type}</h3>
              <p style={styles.cardDesc}>{prop.description}</p>
              <ul style={styles.featureList}>
                {features.map((feat) => (
                  <li key={feat} style={styles.featureItem}>
                    <span style={styles.checkCircle}>&#10003;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:8779096309" style={styles.cta}>
                Call to Schedule a Showing
              </a>
            </div>
          ))}
        </div>

        <div style={styles.allBillsBanner} className="props-banner">
          <p style={styles.bannerTitle} className="banner-title">
            All Bills Paid — Electric, Water &amp; Gas Included
          </p>
          <p style={styles.bannerText}>
            No separate utility accounts. No surprise bills. Your rent covers everything.
          </p>
        </div>
      </div>
    </section>
  )
}
