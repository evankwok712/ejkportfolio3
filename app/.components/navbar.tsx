import React from "react";
import Link from "next/link";
const Navbar: React.FC = () => {
    return (
        <nav className="border-gray-200 fixed top-0 left-0 z-50 w-full text-gray-400">
            <div className="w-full flex flex-wrap items-center justify-between p-4">
                <Link href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <p>ejk</p>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="">⌂</a>
                        </li>
                        <li>
                            <a href="#" className="">info</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;