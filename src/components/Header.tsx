const Header = () => {
  return (
    <header className="text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <nav className="flex flex-wrap items-center text-base md:ml-auto lg:w-2/5">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="hover:text-gray-900">Fourth Link</a>
        </nav>
        <a className="order-first mb-4 flex items-center font-medium text-gray-900 md:mb-0 lg:order-none lg:w-1/5 lg:items-center lg:justify-center">
          <img alt="logo" id="topLogo" src="/logo.svg" />
          <span className="ml-3 text-xl">Prisoners' Trilemma</span>
        </a>
        <div className="ml-5 inline-flex lg:ml-0 lg:w-2/5 lg:justify-end"></div>
      </div>
    </header>
  );
};

export default Header;
