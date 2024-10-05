import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { newTegomin, jacquarda } from '@/utils/font';

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${newTegomin.className} justify-center justify-items-center`}>
        <section>
          <h1>What's new</h1>
        </section>
        <section>
          <h1>Products</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
