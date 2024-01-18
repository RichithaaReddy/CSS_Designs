import React from 'react'
import Link from 'next/link';
const Shadow = () => {
  return (
    <div>
         <nav className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl text-gray-800 font-semibold">Your Logo</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <p className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <p className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
                Portfolio
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Shadow