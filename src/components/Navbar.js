import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import LogoImg from '../img/navbar/nav_logo.png'
import phoneIcon from '../img/navbar/phone.png'

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [hamburgerBefore, setHamburgerAfter] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setHamburgerAfter(!hamburgerBefore);
        document.body.classList.toggle('lock-scroll');
    };

    return (

        <div class="navbar bg-white dark:bg-black border-b-2 border-gray dark:border-[#45008B] shadow-xl"> 

            <header className="w-5/6 mx-auto py-4">
                <nav className="y-4 md:px-8 px-4">
                    <div className="flex flex-row items-center place-content-between">

                        {/*My logo*/}
                        <div className="md:w-1/3 logo">
                            <img class="h-12 dark:invert" src={LogoImg} alt="logo"></img>
                        </div>

                        {/*for larger devices*/}
                        <div className="w-1/3 justify-center lg:flex font-medium items-center gap-3 hidden">
                        <a href="/" className="block hover:text-gray-400 dark:text-white py-2 px-1 xl:px-4">Création de site web</a>
                            <a href="/" className="block hover:text-gray-400 dark:text-white py-2 px-1 xl:px-4">Contact</a>
                            {/* <a href="/" className="block hover:text-gray-400 py-2 px-1 xl:px-4">FAQ</a> */}
                        </div>
                        
                        {/*Contact me btn*/}
                        <div className="w-1/3 justify-end lg:flex hidden">
                            <div className="flex items-center mx-5">
                                <img class="h-10 mx-2" src={phoneIcon} alt="logo"></img>
                                <div class="items-center text-sm">
                                    <p class="font-semibold text-black dark:text-white">Appelez-nous</p>
                                    <a class="font-medium text-gray-500 dark:text-white hover:cursor-pointer">07 81 90 51 92</a>
                                </div>
                            </div>

                            <button className="btnOutline ml-5">
                                Contact
                            </button>
                        </div>

                        {/*Open small menu btn*/}
                        <button onClick={toggleMenu} className="lg:hidden text-indigo-600 dark:text-white text-3xl">
                            <BiMenuAltRight  className={`hamburger ${hamburgerBefore ? 'menu_hamburger_rotate' : ''}`} />
                        </button>

                    </div>
                </nav>
            </header>



            <div className={`lg:hidden flex flex-col sm-menu w-full h-full mx-0 p-3 bg-[#45008B] text-white ${menuVisible ? 'menu_visible' : ''}`}>
                <button onClick={toggleMenu} className=" p-5 text-3xl flex justify-end">
                    <BiX/>
                </button>
                <div class="text-center">
                    {/* <a href="/" className="block hover:text-gray-400 py-2">Accueil</a> */}
                    <a href="/" className="block hover:text-gray-400 py-2">Création de site web</a>
                    <a href="/" className="block hover:text-gray-400 py-2">Contact</a>
                </div>

                <div className="flex flex-col items-center overflow-hidden mt-5 py-3 bg-white rounded-lg">
                    <div className="flex items-center mt-0 mb-2 space-x-2">
                        <img class="h-10 mx-0 px-0" src={phoneIcon} alt="logo"></img>
                        <div class="items-center text-sm font-semibold">
                            <p class="text-black">Appelez-nous</p>
                            <a class="text-gray-500 hover:cursor-pointer">07 81 90 51 92</a>
                        </div>
                    </div>

                    <button className="btnOutline my-0">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;