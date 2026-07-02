import styles from './Showcase.module.css';

export default function Showcase({ data }) {
  return (
    <section className={styles.sectionFull} style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.description}</p>
        
        <div className={styles.grid}>
          {data.items.map(item => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
