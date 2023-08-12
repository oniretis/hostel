import React from "react";

export const Nav = () => {
  return (
    <section>
      <nav>
        <div className="container mx-auto px-4">
          <div className="relative flex h-24 items-center">
            <a className="inline-block font-semibold" href="#">
              Hostel Allocation System
            </a>
            <button className="lg:hidden navbar-burger ml-auto flex items-center justify-center h-10 w-10 bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H21"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 19H21"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="hidden lg:flex items-center ml-auto mr-12">
              <a className="inline-block hover:text-green-700 mr-10" href="#">
                <div className="flex items-center">
                  <span className="mr-3">Hostels</span>
                  <svg
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <a className="inline-block hover:text-green-700 mr-10" href="#">
                About us
              </a>
              <a className="inline-block hover:text-green-700 mr-10" href="#">
                Hostel rennovation
              </a>
              <a className="inline-block hover:text-green-700" href="#">
                Contact us
              </a>
            </div>
            <div className="hidden lg:block">
              <a
                className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center leading-loose text-sm text-gray-700 hover:text-green-700 font-semibold transition duration-200"
                href="#"
              >
                Login
              </a>
              <a
                className="inline-flex items-center justify-center h-10 px-4 text-center leading-loose text-sm text-gray-700 hover:text-green-700 font-semibold border border-gray-200 hover:border-green-600 shadow-sm hover:shadow-none rounded-lg transition duration-200"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
        <div className="navbar-backdrop fixed inset-0 bg-teal-800 opacity-70" />
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto" href="#">
              Hostel Allocation System
            </a>
            <a className="navbar-close" href="#">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <a className="inline-block text-black" href="#">
                  Product
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block text-black" href="#">
                  Features
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block text-black" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="inline-block text-black" href="#">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200"
              href="#"
            >
              Login
            </a>
            <a
              className="flex items-center justify-center h-12 px-4 text-center text-base text-white font-semibold bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg transition duration-200"
              href="#"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};
