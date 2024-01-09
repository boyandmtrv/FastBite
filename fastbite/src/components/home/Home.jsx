import { useEffect, useState } from 'react';
import './Home.css';
import { PiHamburger } from "react-icons/pi";
import { LuBeef, LuSalad } from "react-icons/lu";
import { MdOutlineFastfood } from "react-icons/md";
import { BsCake } from "react-icons/bs";
import { LiaBreadSliceSolid } from "react-icons/lia";

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
        <div className={`flex items-center justify-center h-full bg-[#140014]`}>
            <div className={`pacmanContainer w-full flex flex-col items-center ${isVisible ? 'fade-out' : ''}`}>
                {isVisible && (
                    <div className="pacmanTotal flex items-center overflow-hidden lg:h-[50vh] lg:w-[50%] md:h-[50vh] md:w-[50%] sm:h-[50vh] w-full min-[320px]:h-[50vh] min-[320px]:w-full">
                        <div className="pacman relative bg-transparent lg:w-[300px]"></div>
                        <div className="dot lg:border-[15px] md:border-[15px]
                        sm:border-[10px] min-[320px]:border-[10px] border-black rounded-[50%] lg:mt-[-200px] lg:ml-[170px] md:mt-[-200px] md:ml-[170px] sm:mt-[-100px] sm:ml-[100px] min-[320px]:mt-[-100px] min-[320px]:ml-[100px]"></div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <PiHamburger />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <LuBeef />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <LuSalad />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <MdOutlineFastfood />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <BsCake />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <LiaBreadSliceSolid />
                        </div>
                        <div className="path flex justify-around w-full pl-[-50px] text-[80px] text-[#1414f0]">
                            <PiHamburger />
                        </div>
                    </div>
                )}
            </div>
            {!isVisible && (
                <div className={`homeContainer fade-in flex w-full`}>
                    <h1 className='text-white'>hngrPac</h1>
                </div>
            )}
        </div>
    );
};

export default Home;
