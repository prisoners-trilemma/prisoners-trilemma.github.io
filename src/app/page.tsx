import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { jacquarda, newTegomin } from '@/utils/font';

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${newTegomin.className}`}>
        <section>クリエイターだったり日曜学者だったりゲーマーだったりする人たちです。</section>
        <section>
          <h1 className={`${jacquarda.className} text-4xl font-bold`}>Articles</h1>
        </section>
        <section>
          <h1 className={`${jacquarda.className} text-4xl font-bold`}>Products</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
