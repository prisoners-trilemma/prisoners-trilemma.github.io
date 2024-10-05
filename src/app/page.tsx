export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header>
        <h1>Prisoners Trilemma</h1>
        <!--ハンバーガーメニュー-->
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <section>
        <h2>What's new</h2>
        </section>
        <section>
        <h2>Products</h2>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="File icon" aria-hidden height={16} src="https://nextjs.org/icons/file.svg" width={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="Window icon" aria-hidden height={16} src="https://nextjs.org/icons/window.svg" width={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="Globe icon" aria-hidden height={16} src="https://nextjs.org/icons/globe.svg" width={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
