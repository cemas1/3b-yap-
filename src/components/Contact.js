import content from '@/data/content.json';
import styles from './Contact.module.css';

export default function Contact() {
  const { site } = content;

  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>{site.title}</h2>
          <p>{site.description}</p>
        </div>
        <div className={styles.info}>
          <h3>İletişim Bilgileri</h3>
          <ul>
            <li><strong>Telefon:</strong> {site.phone}</li>
            <li><strong>E-Posta:</strong> {site.email}</li>
            <li><strong>Adres:</strong> {site.address}</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} {site.title}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
