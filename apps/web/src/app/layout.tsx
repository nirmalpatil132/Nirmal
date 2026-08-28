import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nirmal Portfolio V2',
  description: 'Personal portfolio of Nirmal Patil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
