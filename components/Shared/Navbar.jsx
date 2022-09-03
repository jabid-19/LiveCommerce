import Link from 'next/link'
// import { useEffect, useState } from 'react'

const Navbar = () => {
  //   const [show, setShow] = useState(true)
  //   const [lastScrollY, setLastScrollY] = useState(0)

  //   const controlNavbar = () => {
  //     if (typeof window !== 'undefined') {
  //       if (window.scrollY > lastScrollY) {
  //         // if scroll down hide the navbar
  //         setShow(false)
  //       } else {
  //         // if scroll up show the navbar
  //         setShow(true)
  //       }

  //       // remember current page location to use in the next move
  //       setLastScrollY(window.scrollY)
  //     }
  //   }

  //   useEffect(() => {
  //     if (typeof window !== 'undefined') {
  //       window.addEventListener('scroll', controlNavbar)

  //       // cleanup function
  //       return () => {
  //         window.removeEventListener('scroll', controlNavbar)
  //       }
  //     }
  //   }, [lastScrollY])

  return (
    <div className="navbar bg-base-100 shadow-md shadow-primary py-8 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
            {/* <Link href="login">
              <li className="mr-2">
                <a>Login</a>
              </li>
            </Link>
            <Link href={{ pathname: 'login', query: { keyword: 'register' } }}>
              <a className="btn btn-primary text-white mr-4 mt-2">Get started</a>
            </Link> */}
            <Link href="contact">
              <a className="btn btn-primary text-white normal-case mt-2">Contact us</a>
            </Link>
          </ul>
        </div>
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">LiveCommerce</a>
        </Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex="0">
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* <Link href="login">
            <li className="mr-2">
              <a>Login</a>
            </li>
          </Link>
          <Link href={{ pathname: 'login', query: { keyword: 'register' } }}>
            <a className="btn btn-primary text-white mr-4">Get started</a>
          </Link> */}
          <Link href="contact">
            <a className="btn btn-primary text-white normal-case mr-4">Contact us</a>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
