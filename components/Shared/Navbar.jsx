import Image from 'next/image'
import Link from 'next/link'
import imageLoader from '../../helper/imageLoader'
import Logo from '../../public/navbar-logo/navbar-logo.png'
import { useContext } from 'react'
import { ModalContext } from '../../pages/_app'

const Navbar = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="navbar bg-base-100 shadow-md shadow-accent py-2 sticky top-0 z-50">
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
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Packages
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/packages/one-to-one">
                    <a>One to one</a>
                  </Link>
                </li>
                <li>
                  <Link href="/packages/many-to-many">
                    <a>Many to many</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
            </li>
            {/* <Link href="login">
              <li className="mr-2">
                <a>Login</a>
              </li>
            </Link> */}
            {/* <Link href={{ pathname: 'login', query: { keyword: 'register' } }}>
              <a className="btn btn-primary text-white mr-4 mt-2">Get started</a>
            </Link> */}
            <button
              onClick={() => setGetStartedModal(!getStartedModal)}
              className="btn btn-primary text-white mr-4 mt-2">
              Get started
            </button>
            {/* <Link href="/contact">
              <a className="btn btn-primary text-white normal-case mt-2">Contact us</a>
            </Link> */}
          </ul>
        </div>
        <Link href="/">
          <a className="ml-3">
            <Image width={155} height={70} src={Logo} alt="Go Laiv's Logo" loader={imageLoader} />
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li tabIndex="0">
            <a>
              Packages
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <Link href="/packages/one-to-one">
                  <a>One to one</a>
                </Link>
              </li>
              <li>
                <Link href="/packages/many-to-many">
                  <a>Many to many</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* <Link href="login">
            <li className="mr-2">
              <a>Login</a>
            </li>
          </Link> */}
          {/* <Link href={{ pathname: 'login', query: { keyword: 'register' } }}>
            <a className="btn btn-primary text-white mr-4">Get started</a>
          </Link> */}
          <button
            onClick={() => setGetStartedModal(!getStartedModal)}
            className="btn btn-primary text-white mr-4">
            Get started
          </button>
          {/* <Link href="/contact">
            <a className="btn btn-primary text-white normal-case mr-4">Contact us</a>
          </Link> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
