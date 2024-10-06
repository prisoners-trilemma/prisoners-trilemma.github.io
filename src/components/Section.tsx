import React from 'react';

import { jacquarda, newTegomin } from '@/utils/font';

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
};

function Section({ children, title, id, className }: SectionProps) {
  return (
    <div
      className={`${className} m-auto w-4/5 bg-gradient-to-r from-white via-black to-white
    pb-px dark:from-black dark:via-white dark:to-black`}
      id={id}
    >
      <section className={`${newTegomin.className} m-auto bg-white p-4 dark:bg-black`}>
        {title && <h1 className={`${jacquarda.className} text-4xl font-bold`}>{title}</h1>}
        {children}
      </section>
    </div>
  );
}

export default Section;
