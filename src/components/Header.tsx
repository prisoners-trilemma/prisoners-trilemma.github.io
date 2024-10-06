'use client';

import React, { useState } from 'react';

import { newTegomin, jacquarda } from '@/utils/font';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 mb-9 bg-white shadow-lg dark:bg-black dark:shadow-gray-500">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        {/* ハンバーガーメニューアイコン（モバイル表示用） */}
        <div className="flex w-full items-center justify-between md:w-auto md:grow">
          <a
            className="order-first flex items-center font-medium md:order-none md:w-auto md:items-center md:justify-center"
            href="/"
          >
            <img alt="logo" className="h-10" id="topLogo" src="/logo.svg" />
            <span className={`${jacquarda.className} ml-3 text-2xl`}>Prisoners' Trilemma</span>
          </a>
          <button
            aria-label="Toggle menu"
            className="ml-auto block focus:outline-none md:hidden"
            onClick={toggleMenu}
            type="button"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* ナビゲーションメニュー */}
        <nav
          className={`${newTegomin.className} ${
            isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100'
          } flex-wrap items-center overflow-hidden text-lg transition-all duration-500 ease-in-out md:ml-auto md:flex md:w-auto`}
        >
          <a className="mr-5 block hover:text-gray-900 md:inline-block dark:hover:text-neutral-400" href="/">
            Top
          </a>
          <a className="mr-5 block hover:text-gray-900 md:inline-block dark:hover:text-neutral-400" href="/#Articles">
            Articles
          </a>
          <a className="mr-5 block hover:text-gray-900 md:inline-block dark:hover:text-neutral-400" href="/#Creations">
            Creations
          </a>
          <a className="mr-5 block hover:text-gray-900 md:inline-block dark:hover:text-neutral-400" href="/#Tools">
            Tools
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
