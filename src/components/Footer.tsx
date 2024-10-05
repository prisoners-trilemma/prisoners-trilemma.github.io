import React from 'react';

import { newTegomin, jacquarda } from '@/utils/font';

function Footer() {
  return (
    <footer className={`${newTegomin.className}`}>
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="flex items-center justify-center font-medium md:justify-start" href="/">
          <img alt="logo" id="footLogo" src="/logo.svg" />
          <span className={`${jacquarda.className} ml-3 text-xl`}>Prisoners' Trilemma</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2024 Prisoners' Trilemma
        </p>
      </div>
    </footer>
  );
}

export default Footer;
