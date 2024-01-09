import { Link } from 'react-router-dom';
import { ImPacman } from "react-icons/im";
import { useEffect, useState } from 'react';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const [timer, setTimer] = useState(4);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        if (timer === 0) {
            clearInterval(interval);
            setIsVisible(false);
        }

        return () => clearInterval(interval);
    }, [timer]);


    return (
        <div className="w-full fixed top-0 left-0 shadow-md z-10">
            {!isVisible && (
                <div className="fade-in md:flex items-center justify-center bg-trasparent py-4 md:px-10 px-7 mr-[5%]">
                    <div className="font-bold text-2xl cursor-pointer flex items-center md:hidden">
                        <Link className="text-[#fff]" to="/">
                            hngrPac
                        </Link>
                    </div>
                    <div onClick={() => setOpenMenu(!openMenu)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {!openMenu ? (
                            <ImPacman className='scale-y-[-1] rotate-180 transition-transform transform hover:scale-180' />
                        ) : (
                            <ImPacman className='scale-y-[-1] rotate-90 transition-transform transform hover:scale-6' />
                        )}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${openMenu ? 'top-[65px] opacity-100' : 'top-[-500px]'} md:opacity-100 opacity-0`}>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link className='text-[#545454] hover:text-[#f7d7c9] duration-500' to="/search">Search</Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link className='text-[#545454] hover:text-[#f7d7c9] duration-500' to="/cuisineSearch">Search by Cuisine</Link>
                        </li>
                        <div className="header-heading font-bold text-5xl cursor-pointer items-center lg:flex md:flex sm: hidden min-[320px]:hidden ml-8 font-cursive">
                            <Link className="text-[#000]" to="/">
                                Home
                            </Link>
                        </div>

                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link className='text-[#545454] hover:text-[#f7d7c9] duration-500' to="/timeSearch">Search by time</Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link className='text-[#545454] hover:text-[#f7d7c9] duration-500' to="/menu">Menu</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
};

export default Header;