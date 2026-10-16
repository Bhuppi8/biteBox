import Title from "./Title";

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Title />
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-3 text-sm font-medium text-slate-600 sm:gap-7">
            <li>
              <a
                className="transition-colors hover:text-orange-600"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                className="transition-colors hover:text-orange-600"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                className="transition-colors hover:text-orange-600"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-orange-50 px-3 py-2 font-semibold text-orange-700 transition-colors hover:bg-orange-100"
                href="#restaurants"
                aria-label="Browse restaurants"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"
                  />
                  <circle cx="10" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                </svg>
                <span className="hidden sm:inline">Explore</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
