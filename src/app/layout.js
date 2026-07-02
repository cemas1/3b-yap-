import './globals.css';
import content from '@/data/content.json';

export const metadata = {
  title: content.site.title,
  description: content.site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
