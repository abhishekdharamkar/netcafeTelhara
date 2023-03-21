
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import {BsNewspaper} from 'react-icons/bs'

import {TiContacts} from 'react-icons/ti'
import { Link, Navigate } from "react-router-dom";


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
    <>
       <nav className="fixed top-0 w-full z-20 flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <span
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              SHRI GAJANAN NET CAFE
            </span>
            </Link> 
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link to="/">
                <span
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                <span className="ml-2">Home</span>
                </span>
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className=" cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => window.open("https://www.employment-news.net/2015/07/maharashtra-govt-jobs.html", "_blank")}

                >
                  <BsNewspaper className="text-lg leading-lg text-white opacity-75"/><span className="ml-2">New Job Form</span>
                </span>
              </li>
              <li className="nav-item">
              <Link to="/contact">
              <span
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                 
                >
                  <TiContacts className="fab fa-pinterest text-lg leading-lg text-white opacity-75"/><span className="ml-2">Contact Us</span>
                </span>
              </Link>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    </>
    )
    
}export default Navbar;