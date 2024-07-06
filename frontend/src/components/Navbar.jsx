import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-800 to-teal-600 text-white p-4 fixed w-full z-10 top-0 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link className="text-white text-2xl font-bold lg:text-3xl" to="/">
                    Handy IATI
                </Link>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
                    >
                        <svg
                            className="fill-current h-6 w-6"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M24 6H0V4h24v2zM24 13H0v-2h24v2zM24 20H0v-2h24v2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
                    id="nav-content"
                >
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link
                                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link
                                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                                to="/tools"
                            >
                                IATI Tools
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link
                                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                                to="/dataquality"
                            >
                                Data Quality 
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link
                                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                                to="/dashboard/US" // Provide a default country code
                            >
                                Dashboard
                            </Link>
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
