import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }


    return (
        <nav className=" container mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="pt-4"><img className="w-2/3" src="https://see.fontimg.com/api/renderfont4/DgaW/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RWFzeUFkbWlzc2lvbg/tipo-press.png" alt="90s fonts" /></Link>
                    </div>


                    <div className="hidden md:block">
                        <div className="ml-10 flex font-bold items-baseline space-x-4 text-lg">
                            <NavLink to="/" className="text-gray-500">
                                Home
                            </NavLink>
                            <NavLink to="/colleges" className="text-gray-500">
                                Colleges
                            </NavLink>
                            <NavLink to="/admission" className=" text-gray-500">
                                Admission
                            </NavLink>
                            {user &&
                                <>
                                    <NavLink to={'/myCollege'} className="text-gray-500">My College</NavLink>
                                </>
                            }

                            {
                                user ? <div className='flex items-center space-x-2 md:space-x-4'>
                                    <Link to="/userDetails" className="button">
                                        {user.displayName}
                                    </Link>
                                    <button onClick={handleSignOut} className='log-btn'>LOGOUT</button>
                                </div> : <Link to='/login'><button className='log-btn'>LOGIN</button></Link>
                            }

                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {
                            user ? <div className='flex items-center space-x-2 md:space-x-4'>
                                <Link to="/userDetails" className="button">
                                    {user.displayName}</Link>
                                <button onClick={handleSignOut} className='log-btn'>LOGOUT</button>
                            </div> : <Link to='/login'><button className='log-btn'>LOGIN</button></Link>
                        }
                        <NavLink
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium  text-black hover:text-white hover:bg-gray-700"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/all-toys"
                            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-gray-700"
                        >
                            Colleges
                        </NavLink>
                        <NavLink
                            to="/my-toys"
                            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-gray-700"
                        >
                            Admission
                        </NavLink>
                        {user &&
                            <>
                                <NavLink
                                    to="/my-college"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-gray-700"
                                >
                                    My College
                                </NavLink>
                            </>
                        }

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;