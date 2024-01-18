import React from 'react'
import { Link } from 'react-feather'
const Gradient = () => {
  return (
    <div>
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-3xl text-white font-semibold">Your Logo</a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a className="text-white hover:text-purple-300 transition duration-300 ease-in-out">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className="text-white hover:text-purple-300 transition duration-300 ease-in-out">
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-purple-300 transition duration-300 ease-in-out">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
 </nav>
    </div>
  )
}

export default Gradient