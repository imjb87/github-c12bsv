import React, { useState } from 'react';

const Nav = ({ settings }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <header className="w-full bg-gray-700 sticky top-0 z-50">
      <nav className="" role="navigation">
        <div className="mx-auto flex flex-wrap items-center lg:flex-no-wrap">
          <div className="w-[173px] mx-2 lg:mx-10">
            <a href="/">
              <img src="/logo.svg" />
            </a>
          </div>
          <button
            className="ml-auto lg:hidden mr-4 relative w-6 h-3 valign-top focus:outline-none"
            type="button"
            onClick={handleClick}
          >
            <div
              className={`absolute left-0 bg-white h-[2px] w-full origin-center transition-all duration-300 transform ${
                !state ? 'rotate-0 top-0' : 'rotate-[135deg] top-1/2'
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 bg-white h-[2px] w-full transition-all duration-300 ${
                !state ? 'opacity-1' : 'opacity-0'
              }`}
            ></div>
            <div
              className={`absolute left-0 bg-white h-[2px] w-full origin-center transition-all duration-300 transform ${
                !state ? 'rotate-0 top-full' : 'rotate-[-135deg] top-1/2'
              }`}
            ></div>
          </button>

          {/* MOBILE NAVIGATION */}
          <div
            className={`w-full h-screen lg:hidden transition-all relative duration-300 overflow-hidden`}
            style={{ height: state ? 'calc(100vh - 58px)' : 0 }}
          >
            <ul className="flex flex-col content-center h-full justify-center">
              {settings &&
                settings.content.main_navi.map((navitem, index) => (
                  <li
                    key={index}
                    className="text-xl sm:text-sm uppercase font-semibold leading-tight"
                  >
                    <a
                      href={`/${navitem.link.cached_url.replace('home', '')}`}
                      className={`block px-6 py-3 lg:py-6 text-center text-white font-bold hover:text-yellow-500`}
                    >
                      {navitem.top_line}
                      <br />
                      {navitem.bottom_line}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {/* DESKTOP NAVIGATION */}
          <div
            className={`hidden lg:block lg:w-auto lg:h-auto lg:flex-grow lg:flex lg:items-center transition-all duration-300 overflow-hidden lg:max-h-full`}
          >
            <ul className="flex flex-col mt-14 lg:mt-0 lg:flex-row lg:items-center lg:ml-auto">
              {settings &&
                settings.content.main_navi.map((navitem, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xs uppercase font-semibold leading-tight"
                  >
                    <a
                      href={`/${navitem.link.cached_url.replace('home', '')}`}
                      className={`block px-6 py-3 lg:py-6 text-center text-white font-bold hover:text-yellow-500`}
                    >
                      {navitem.top_line}
                      <br />
                      {navitem.bottom_line}
                    </a>
                  </li>
                ))}
              <li className="text-base lg:text-xs uppercase font-semibold leading-tight">
                <a
                  href="tel:07551169141"
                  className="block px-6 py-3 lg:py-6 text-center text-white font-bold bg-yellow-500 hover:bg-yellow-900 px-10 ml-0 lg:ml-6 mt-auto"
                >
                  Call us
                  <br />
                  07551 169 141
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
