import React, { useState } from "react";
import {  Button } from "antd";
import logo from "../assets/image/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(true);
  const renderClass = isMobile ? "fixed" : "hidden";

  return (
    <header className="bg-white shadow-lg">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">FCar</span>
            <img
              className="h-16 w-auto"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobile(true)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to={'/home'} className="font-semibold leading-6 relative pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff9900] to-[#cc33ff]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Home
          </Link>
          <Link to={'/booking'} className="font-semibold leading-6 relative pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff9900] to-[#cc33ff]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Booking
          </Link>
          <Link to={'/tour'} className="font-semibold leading-6 relative pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff9900] to-[#cc33ff]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Tour
          </Link>
          <Link to={'/about'} className="font-semibold leading-6 relative pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff9900] to-[#cc33ff]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            About
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 justify-end lg:gap-x-12">
        <Button size="large" className="hover:bg-clip-text border-solid border-2 border-red-300 w-28">
        <Link to={'/login'} className="text-lg font-semibold leading-6">
            Log in
          </Link>
        </Button>
        <Button size="large" className="w-28 hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#ff9933] to-[#ff6699] border-solid border-2 border-gray-300 text-white">
        <Link to={'/register'} className="text-lg font-semibold leading-6">
            Sign Up
          </Link>
        </Button>
        </div>
      </nav>
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className=" inset-0 z-10" />
        <div
          className={`${renderClass} inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">FCar</span>
              <img
                className="h-10 w-auto"
                src={logo}
                alt="logo"
              />
            </Link>
            <button
              onClick={() => setIsMobile(!isMobile)}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to={'/'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link to={'/'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Booking
                </Link>
                <Link to={'/'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Tour
                </Link>
                <Link to={'/'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  About
                </Link>
              </div>
              <div className="py-6">
                <Link to={'/login'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Log in
                </Link>
                <Link to={'/register'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
