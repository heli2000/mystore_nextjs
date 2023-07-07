import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    try {
      let CartDataObj = localStorage.getItem("CartData");
      if (
        CartDataObj !== undefined &&
        CartDataObj !== null &&
        CartDataObj !== ""
      ) {
        let CartCount: number = JSON.parse(CartDataObj).length;
        setCartCount(CartCount);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  return (
    <header>
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center justify-center">
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
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  href="/cart/cartList"
                >
                  <div className="flex">
                    <div className="relative">
                      <div className="t-0 absolute left-3">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                          {cartCount}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="file: mt-4 h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  SignIn
                </button>
              </li>
              <li>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  SignUp
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
