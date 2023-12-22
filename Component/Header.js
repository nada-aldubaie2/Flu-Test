import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, createRef } from 'react'
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as ScrollLink } from 'react-scroll'
export default function Header() {
  const [openNav, setOpenNav] = useState(false)
  const toggleSidebar = () => {
    setOpenNav(!openNav)
  }


  return (
    <nav
      dir="rtl"
      className={
        " ${openNav ? ('block z-10') : 'hidden'} bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-b-3xl md:text-xl"
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="/public/logo192.png" className="h-8 w-4" alt="Nada Logo" /> */}
          <span className="self-center text-2xl font-semibold mr-2 text-teal-500 whitespace-nowrap">
            طبيبي
          </span>
        </div>
        <button
          type="button"
          className=" block md:hidden items-center p-2 w-10 h-10 justify-center text-base text-slate-200 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:text-stale-100 dark:hover:bg-teal-900 dark:focus:ring-teal-900"
          onClick={toggleSidebar}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
        <div
          className={`w-full ${
            openNav ? 'block z-10' : 'hidden'
          } md:block md:w-auto`}
          id="navbar"
        >
          <ul className="flex flex-col font-medium sm:text-base md:text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="p-1">
              <NavLink
                to="/home"
                className="block py-2 px-3 bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500 dark:bg-teal-600 md:dark:bg-transparent "
                aria-current="page"
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="flu p-1">
              <NavLink
                to="/about"
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-teal-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                عن الانفلونزا
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </NavLink>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className="z-10  flu-menu font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 hover:text-base dark:hover:text-teal-500"
                    >
                      ماهي الانفلونزا
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 hover:text-base dark:hover:text-teal-500"
                    >
                      اسباب الانفلونزا
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 hover:text-base dark:hover:text-teal-500"
                    >
                      اعراض الانفلونزا
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="p-1">
              <ScrollLink
                to="footer"
                smooth={true}
                className="footer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                  معلومات التواصل
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
