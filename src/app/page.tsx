/* eslint-disable react/jsx-one-expression-per-line */
import Link from 'next/link';
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
          2022.10 「<a href="/old/phantom">Phantom Girl</a>
          」公開
          <br />
          2021.10 「<a href="/old/oboro">トナリノオボロ</a>
          」公開
        </Section>
        <Section title="Credits">
          <details>
            <summary>・「トナリノオボロ」/「Phantom Girl」</summary>
            <div>
              BGM:
              <br />
              <ul>
                <li>
                  <Link href="https://amachamusic.chagasi.com/music_amenisuteraretaningyou.html">
                    「雨に捨てられた人形」
                  </Link>
                </li>
                <li>
                  <Link href="https://amachamusic.chagasi.com/music_oboroduki.html">「おぼろ月」</Link>
                </li>
                <li>
                  <Link href="https://amachamusic.chagasi.com/music_1950danosekkin.html">「1950DAの接近」</Link>
                </li>
                <li>
                  <Link href="https://amachamusic.chagasi.com/music_technophobia.html">「テクノフォビア」</Link>
                </li>
                <li>by 甘茶の音楽工房</li>
                <li>
                  <Link href="https://youtu.be/CRHQUN6JjiM?si=5kDNA3M0HRD8AvGj">「Fear」</Link>
                </li>
                <li>
                  <Link href="https://youtu.be/wDgroQhE224?si=KYKr3EsghwL_HIKy">「Fear2」</Link>
                </li>
                <li>by PeriTune</li>
              </ul>
              SE by:
              <br />
              <ul>
                <li>
                  <Link href="https://soundeffect-lab.info/">効果音ラボ</Link>
                </li>
                <li>
                  <Link href="https://on-jin.com/">On-Jin ～音人～ </Link>
                </li>
                <li>
                  <Link href="https://pocket-se.info/">ポケットサウンド</Link>
                </li>
                <li>
                  <Link href="http://www.vita-chi.net/">びたちー素材館</Link>
                </li>
              </ul>
              IMAGES by:
              <br />
              <ul>
                <li>
                  <Link href="https://ja.pngtree.com/">PNGTree</Link>
                </li>
                <li>
                  <Link href="https://min-chi.material.jp/">みんちりえ</Link>
                </li>
              </ul>
            </div>
          </details>
        </Section>
        <Section id="Tools" title="Tools">
          随時更新予定。
        </Section>
      </main>
      <Footer />
    </>
  );
}
