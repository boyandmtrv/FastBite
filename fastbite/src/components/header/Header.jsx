import { Link } from 'react-router-dom';
import { ImPacman } from "react-icons/im";
import { useEffect, useState } from 'react';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [timer, setTimer] = useState(4);
    const [isVisible, setIsVisible] = useState(true);
    const [selectedItem, setSelectedItem] = useState('Home');


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

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
        setOpenMenu(false);
    };

    return (
        <div className="w-full fixed top-0 left-0 shadow-md z-10 bg-white">
            {!isVisible && (
                <div className="fade-in md:flex items-center justify-center  py-4 md:px-10 px-7 mr-[5%]">
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
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${openMenu ? 'top-[65px] opacity-100 bg-white ' : 'top-[-500px]'} md:opacity-100 opacity-0`}>
                        <li className={`md:ml-8 text-xl md:my-0 my-7 ${selectedItem === "Search" ? 'font-cursive text-[2rem] text-[#f7d7c9] duration-500' : 'text-[#545454] text-xl hover:text-[#f7d7c9] duration-500'}`}>
                            <Link onClick={() => handleItemClick("Search")} to="/search">Search</Link>
                        </li>
                        <li className={`md:ml-8 text-xl md:my-0 my-7 ${selectedItem === "SearchByCuisine" ? 'font-cursive text-[2rem] text-[#f7d7c9] duration-500' : 'text-[#545454] text-xl hover:text-[#f7d7c9] duration-500'}`}>
                            <Link onClick={() => handleItemClick("SearchByCuisine")} to="/cuisineSearch">Search by Cuisine</Link>
                        </li>

                        <li className={`header-heading md:my-0 my-7 cursor-pointer items-center lg:flex md:flex sm: hidden min-[320px]:hidden  ml-8 font-cursive ${selectedItem === "Home" ? 'font-cursive text-[2rem] text-[#f7d7c9] duration-500' : 'text-[#545454] text-xl hover:text-[#f7d7c9] duration-500'}`}>
                            <Link onClick={() => handleItemClick("Home")} to="/">Home</Link>
                        </li>
                      
                        <li className={`md:ml-8 text-xl md:my-0 my-7 ${selectedItem === "SearchByTime" ? 'font-cursive text-[2rem] text-[#f7d7c9] duration-500' : 'text-[#545454] text-xl hover:text-[#f7d7c9] duration-500'}`}>
                            <Link onClick={() => handleItemClick("SearchByTime")} to="/timeSearch">Search by Time</Link>
                        </li>

                        
                        <li className={`md:ml-8 text-xl md:my-0 my-7 ${selectedItem === "Menu" ? 'font-cursive text-[2rem] text-[#f7d7c9] duration-500' : 'text-[#545454] text-xl hover:text-[#f7d7c9] duration-500'}`}>
                            <Link onClick={() => handleItemClick("Menu")} to="/menu">Menu</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
};

export default Header;