import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Section>クリエイターだったり日曜学者だったりゲーマーだったりする人たちです。</Section>
        <Section id="Articles" title="Articles">
          記事はまだありません。
        </Section>
        <Section id="Creations" title="Creations">
          随時更新予定。
        </Section>
        <Section id="Tools" title="Tools">
          随時更新予定。
        </Section>
      </main>
      <Footer />
    </>
  );
}
