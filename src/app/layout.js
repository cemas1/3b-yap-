import './globals.css';
import content from '@/data/content.json';

export const metadata = {
  title: '3B Yapı | 3B-Yapı Winsa PVC Sistemleri - 3byapı Çözümleri',
  description: '3B Yapı (3b-yapi, 3byapı, 3b-yapı, 3b appi) Winsa yetkili bayisi olarak profesyonel PVC pencere, kapı, ısı ve ses yalıtım sistemleri sunar.',
  keywords: ['3b-yapi', '3b yapı', '3byapı', '3b-yapı', '3b appi', 'winsa', 'pvc', 'pencere', 'kapı', 'ısı yalıtımı', 'ses yalıtımı'],
  authors: [{ name: '3B Yapı' }],
  verification: {
    google: 'I269I5oKRizQQoKaiARPeweMIJfCz_PZ5r5mJGgJHWM',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '3B Yapı | 3B-Yapı Winsa Çözümleri',
    description: '3B Yapı, kaliteli PVC sistemleri ve profesyonel Winsa bayisi.',
    url: 'https://www.3b-yapi.com.tr/',
    siteName: '3B Yapı',
    images: [
      {
        url: 'https://www.3b-yapi.com.tr/images/logo.png',
        width: 800,
        height: 600,
        alt: '3B Yapı Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '3B Yapı',
    alternateName: ['3byapı', '3b-yapi', '3b-yapı', '3b appi'],
    url: 'https://www.3b-yapi.com.tr/',
    logo: 'https://www.3b-yapi.com.tr/images/logo.png',
    description: '3B Yapı Winsa yetkili bayisi, profesyonel PVC pencere ve kapı çözümleri sunmaktadır.',
    image: 'https://www.3b-yapi.com.tr/images/logo.png',
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
