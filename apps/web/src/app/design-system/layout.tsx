import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living Design System — Nirmal Portfolio V2',
  description: 'Component showcase and design system reference for Nirmal Portfolio V2.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
