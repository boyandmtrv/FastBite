import { Link } from 'react-router-dom';
import { ImPacman } from "react-icons/im";
import { useState } from 'react';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="w-full fixed top-0 left-0 shadow-md`">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <span>

                    </span>
                    <Link to="/">
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
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${openMenu ? 'top-[65px] opacity-100' : 'top-[-500px]'} md:opacity-100 opacity-0`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-green-600 duration-500' to="/home">Home</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-green-600 duration-500' to="/about">About</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-green-600 duration-500' to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;