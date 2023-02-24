import '../../assets/styles/header.css';
import MobileHeader from './mobile.header';
import { useEffect, useState } from 'react';
import DesktopHeader from './desktop.header';
import LogoImage from '../../assets/images/bdrop-long-logo.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        window.innerWidth < 720 ? setIsMobile(true) : setIsMobile(false)
    }

    // create an event listener
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <nav className="bg-white px-6 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={LogoImage} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BDROP</span>
                    </a>
                    {!isMobile && <DesktopHeader/>}
                </div>
            </nav>

            {isMobile && <MobileHeader />}
        </>

    )
}

export default Header