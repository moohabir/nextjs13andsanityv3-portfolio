import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });
import type { Metadata } from 'next';

export const revalidate = 10;

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio crreated using next.js13, sanity3 and mui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
