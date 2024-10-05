import React from 'react';

import { newTegomin, jacquarda } from '@/utils/font';

function Header() {
  return (
    <header className="mb-9 shadow-lg dark:shadow-gray-500">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <nav className={`${newTegomin.className} flex flex-wrap items-center text-lg md:ml-auto lg:w-2/6`}>
          <a className="mr-5 hover:text-gray-600" href="/">
            First Link
          </a>
          <a className="mr-5 hover:text-gray-600" href="/">
            Second Link
          </a>
          <a className="mr-5 hover:text-gray-600" href="/">
            Third Link
          </a>
        </nav>
        <a
          className="order-first mb-4 flex items-center font-medium md:mb-0 lg:order-none lg:w-2/6 lg:items-center lg:justify-center"
          href="/"
        >
          <img alt="logo" id="topLogo" src="/logo.svg" />
          <span className={`${jacquarda.className} ml-3 text-2xl`}>Prisoners' Trilemma</span>
        </a>
        <div className="ml-5 inline-flex lg:ml-0 lg:w-2/6 lg:justify-end" />
      </div>
    </header>
  );
}

export default Header;
