import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
   const [active, setActive] = useState(false);

   const toggleMenu = () => {
      setActive((prevState) => !prevState);
   };

   return (
      <header className="max-w-[1440px] w-full px-5 py-3">
         <nav className="flex justify-end items-start">
            <ul
               className={`flex flex-col fixed z-10 top-2 right-4 gap-3 md:hidden ${
                  active ? "block" : "hidden"
               }`}
            >
               <li>
                  <Link to="./home" className="font-semibold text-xl">
                     Home
                  </Link>
               </li>
               <li>
                  <Link to="./blog" className="font-semibold text-xl">
                     Blog
                  </Link>
               </li>
               <li>
                  <Link to="./works" className="font-semibold text-xl">
                     Works
                  </Link>
               </li>
               <li>
                  <Link to="./contact" className="font-semibold text-xl">
                     Contact
                  </Link>
               </li>
            </ul>
            <ul className="hidden md:flex gap-3">
               <li>
                  <Link to="./home" className="font-semibold text-xl">
                     Home
                  </Link>
               </li>
               <li>
                  <Link to="./blog" className="font-semibold text-xl">
                     Blog
                  </Link>
               </li>
               <li>
                  <Link to="./works" className="font-semibold text-xl">
                     Works
                  </Link>
               </li>
               <li>
                  <Link to="./contact" className="font-semibold text-xl">
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}
