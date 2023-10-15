import './globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic_Coding } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
// const inter = Inter();
const gothicCoding = Nanum_Gothic_Coding({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'block',
});

export const metadata: Metadata = {
  title: 'Dynam Labs',
  applicationName: 'Dynam Labs',
  description:
    'Dynam Labs is a creative studio, a versatile engineering workshop that specializes in Electric Vehicle Components.',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </head>
      <body className={gothicCoding.className}>
        <div className="ml-auto mr-auto max-w-7xl overflow-x-clip">{children}</div>
      </body>
    </html>
  );
}
