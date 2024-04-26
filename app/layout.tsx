import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Header from './ui/layout/header';

export const metadata: Metadata = {
  title: 'Saber Chat',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="m-auto w-3/4 flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
