import { useEffect, useState } from 'react';
import './Home.css';
import { PiHamburger } from "react-icons/pi";
import { LuBeef, LuSalad } from "react-icons/lu";
import { MdOutlineFastfood } from "react-icons/md";
import { BsCake } from "react-icons/bs";
import { LiaBreadSliceSolid } from "react-icons/lia";

import { Link } from 'react-router-dom';

const Home = () => {
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
        <div className={`flex flex-col items-center justify-center h-screen bg-[#F9F5EA]`}>
            <div className={`pacmanContainer w-full absolute flex flex-col items-center ${isVisible ? 'fade-out' : ''}`}>
                {isVisible && (
                    <div className="pacmanTotal flex items-center overflow-hidden lg:h-[50vh] lg:w-[50%] md:h-[50vh] md:w-[50%] sm:h-[50vh] w-full min-[320px]:h-[50vh] min-[320px]:w-full">
                        <div className="pacman relative bg-transparent lg:w-[300px]"></div>
                        <div className="dot lg:border-[15px] md:border-[15px]
                        sm:border-[10px] min-[320px]:border-[10px] border-[#F9F5EA] rounded-[50%] lg:mt-[-200px] lg:ml-[170px] md:mt-[-200px] md:ml-[170px] sm:mt-[-100px] sm:ml-[100px] min-[320px]:mt-[-100px] min-[320px]:ml-[100px]"></div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#EEBFB5]">
                            <PiHamburger />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#C0DDC1]">
                            <LuBeef />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#e7ddb2]">
                            <LuSalad />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#C0DDC1]">
                            <MdOutlineFastfood />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#EEBFB5]">
                            <BsCake />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#E1DCC8]">
                            <LiaBreadSliceSolid />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#e7ddb2]">
                            <PiHamburger />
                        </div>
                    </div>
                )}
            </div>
            {!isVisible && (
                <div className={`homeContainer fade-in flex flex-col justify-center items-center w-full h-screen`}>
                    <h2 className='text-5xl z-10 text-[#545454]'>Welcome to</h2>
                    <h1 className='lg:text-9xl md:text-9xl min-[320px]:text-7xl sm:text-9xl text-[#FFB897] z-10'>hngrPac</h1>
                    <p className='text-2xl mt-[5%] lg:text-[#545454] sm:text-[#000] min-[320px]:text-[#000] md:text-[#545454] z-10'>Wondering that to eat?</p>
                    <Link className='text-[#000] border rounded-xl bg-[#FFB897] hover:text-[#000] hover:bg-[#f7d7c9] py-2 px-2 duration-500 lg:mt-7 md:mt-[8%] sm:mt-[13%] min-[320px]:mt-[10%] z-10' to="/timeSearch">Perform Fast Search</Link>
                    <div className='pacmanIcon fixed bg-transparent lg:w-[100px] lg:bottom-[21%] lg:left-[47.5%]  md:bottom-[20%] md:left-[46%] sm:bottom-[20%] sm:left-[43%] min-[320px]:bottom-[24%] min-[320px]:left-[39%]'></div>

                </div>
            )}
        </div>
    );
};

export default Home;
