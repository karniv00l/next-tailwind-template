import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-inter',
});

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: 'My App',
  applicationName: 'My App',
  description: 'My App',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </head>
      <body className={[inter, sourceCodePro].map((font) => font.variable).join(' ')}>
        <div className="ml-auto mr-auto max-w-7xl overflow-x-clip font-sans">{children}</div>
      </body>
    </html>
  );
}
