import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buko Made Global Concept | Medical & Hospital Equipment',
  description: 'Explore medical and hospital equipment categories and request a quotation for individual products or larger procurement requirements.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Buko Made Global Concept', description: 'Medical & Hospital Equipment', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
