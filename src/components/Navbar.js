import React, { useEffect } from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import LogoImg from '../img/navbar/nav_logo.png'
import { BiX } from "react-icons/bi";

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div> 
            {/* <header className="w-5/6 mx-auto fixed top-0 left-0 right-0 py-4">
            <nav className={`y-4 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}> */}
            <header className="w-5/6 mx-auto py-4">
                <nav className="y-4 md:px-8 px-4 bg-white">
                    <div className="flex flex-row items-center place-content-between">

                        {/*My logo*/}
                        <div className="logo">
                            <img class="h-12" src={LogoImg} alt="logo"></img>
                        </div>

                        {/*for larger devices*/}
                        <div className="lg:flex items-center gap-3 hidden">
                            <a href="/" className="block hover:text-gray-400 py-2 px-4">Accueil</a>
                            <a href="/" className="block hover:text-gray-400 py-2 px-4">Création de site web</a>
                            <a href="/" className="block hover:text-gray-400 py-2 px-4">Contact</a>
                        </div>
                        
                        {/*Contact me btn*/}
                        <div className="lg:block hidden">
                            <button className="btnOutline">
                                Contacte moi
                            </button>
                        </div>

                        {/*Open small menu btn*/}
                        <button onClick={toggleMenu} className="lg:hidden text-indigo-600 text-3xl">
                            <BiMenuAltRight />
                        </button>

                    </div>
                </nav>
            </header>



        <div className={`sm-menu w-2/3 h-full mx-0 px-0 bg-indigo-500 text-white ${menuVisible ? 'menu_visible' : ''}`}>
            <button onClick={toggleMenu} className="text-3xl">
                <BiX />
            </button>
            <div>
                <a href="/" className="block hover:text-gray-400 py-2">Accueil</a>
                <a href="/" className="block hover:text-gray-400 py-2">Création de site web</a>
                <a href="/" className="block hover:text-gray-400 py-2">Contact</a>
            </div>
        </div>


        </div>
    )
}

export default Navbar;