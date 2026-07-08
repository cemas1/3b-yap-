import styles from './Brands.module.css';

export default function Brands() {
  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <h2 className={styles.title}>Çözüm Ortaklarımız</h2>
        <p className={styles.subtitle}>Sektörün öncü markalarıyla en kaliteli hizmeti sunuyoruz.</p>
        
        <div className={styles.brandsContainer}>
          {/* Winsa Logo */}
          <div className={styles.brandCard}>
            <div className={`${styles.logoCircle} ${styles.winsaBorder}`}>
              <span className={styles.winsaLogoText}>
                <span className={styles.winsaBlue}>Win</span>
                <span className={styles.winsaRed}>sa</span>
              </span>
            </div>
            <h3 className={styles.brandName}>Winsa</h3>
            <p className={styles.brandDesc}>Pencere ve Kapı Sistemleri</p>
          </div>

          {/* Royal Glass Logo */}
          <div className={styles.brandCard}>
            <div className={`${styles.logoCircle} ${styles.royalBorder}`}>
              <span className={styles.royalLogoText}>
                ROYAL<br/><span className={styles.royalGold}>GLASS</span>
              </span>
            </div>
            <h3 className={styles.brandName}>Royal Glass</h3>
            <p className={styles.brandDesc}>Cam Balkon ve Giyotin Sistemleri</p>
          </div>
        </div>
      </div>
    </section>
  );
}
