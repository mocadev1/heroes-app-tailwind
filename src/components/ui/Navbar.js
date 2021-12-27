import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
    };

    return (

        <div className="bg-gray-800">
            <nav className="md:container md:mx-auto flex justify-between">
                <div className="md:flex py-5">

                    <Link
                        className="font-black text-white ml-5"
                        to="/"
                    >
                        Asociaciones
                    </Link>

                    <div className="text-gray-500 ml-5 mt-3 sm:mt-0">
                        <div>

                            <NavLink
                                className={  ({ isActive }) => '' + ( isActive ? 'text-white' : '' ) }
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>

                            <NavLink
                                className={  ({ isActive }) => 'ml-5 ' + (isActive ? 'text-white' : '') }
                                to="/dc"
                            >
                                DC
                            </NavLink>

                            <NavLink
                                className={  ({ isActive }) => 'ml-5 ' + (isActive ? 'text-white' : '') }
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </div>
                    </div>

                </div>

                <div className="flex items-center">

                    <span
                        className="text-blue-500 mx-2"
                    >
                        Omar
                    </span>
                    <button
                        className="text-gray-500 mx-2"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>

                </div>
            </nav>
        </div>
    )
}