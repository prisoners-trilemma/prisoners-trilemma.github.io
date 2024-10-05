import React from 'react';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Prisoners' Trilemma",
  description: 'Japanese Creator Team(...?)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
