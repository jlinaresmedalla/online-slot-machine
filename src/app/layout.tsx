import type { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import { Toolbar } from '@/components';
import { AppProvider } from '@/contexts/AppContext';
import './globals.css';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vegas Royale',
  description: 'La experiencia definitiva de casino online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${plexMono.variable} antialiased`}>
        <AppProvider>
          <Toolbar />
          <main className="container mx-auto p-4">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
