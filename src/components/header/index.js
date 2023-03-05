import '../../assets/styles/header.css';
import Navigation from './navigation';
import LogoImage from '../../assets/images/bdrop-long-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="bg-white px-6 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 lg:w-2/6 shadow-lg">
                <div className="container flex flex-wrap items-center justify-center mx-auto">
                    <Link to={'/'} className="flex items-center justify-center">
                        <img src={LogoImage} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    </Link>
                </div>
            </nav>

            <Navigation />
        </>

    )
}

export default Header