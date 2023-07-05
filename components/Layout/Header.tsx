import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <ul className="flex">
        <li className="mr-6"></li>
        <li className="mr-6"></li>
      </ul>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="text-blue-500 hover:text-blue-800">
            <Image
              className="rounded-full"
              src="/static/shopping.jpg"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link className="text-blue-500 hover:text-blue-800" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  href="/products/allProduct"
                >
                  All
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
