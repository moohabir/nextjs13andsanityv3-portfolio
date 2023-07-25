import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio crreated using next.js13, sanity3 and mui',
};

//className="min-h-screen bg-slate-50 dark:bg-black dark:text-white"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
