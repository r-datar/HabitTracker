import {React} from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
   

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="w-full mx-auto max-w-screen-xl">
                    
                    <div
                        className="hidden w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full ">
                            <li className="w-1/3 ">
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li  className="w-2/3">
                                <NavLink
                                to="daily-tasks"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` 
                                    }
                                >
                                    Daily Tasks
                                </NavLink>
                            </li>
                            <li className="justify-end">
                                <NavLink
                                to="manage"
                                    className={({isActive}) =>
                                        `block w-1/3 py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } 
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` 
                                    }
                                >
                                Manage
                                </NavLink>
                            </li>        
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
