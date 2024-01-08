import { useEffect, useState } from 'react';
import './Home.css';
import { GiHamburger, GiFriedEggs, GiMeat } from 'react-icons/gi';

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
        <div className={`flex items-center justify-center h-full`}>
            <div className={`pacmanContainer ${isVisible ? 'fade-out' : ''}`}>
                {isVisible && (
                    <div className="pacmanTotal flex items-center overflow-hidden h-[50vh] w-full">
                        <div className="pacman relative bg-transparent w-[300px]"></div>
                        <div className="dot border-[10px] border-white rounded-[50%] mt-[-150px] ml-[150px]"></div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiHamburger />
                        </div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiFriedEggs />
                        </div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiMeat />
                        </div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiHamburger />
                        </div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiFriedEggs />
                        </div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiMeat />
                        </div>
                        <div className="path flex justify-around w-full pl-[10px] text-[80px]">
                            <GiHamburger />
                        </div>
                    </div>
                )}
            </div>
            {!isVisible && (
                <div className={`check fade-in`}>
                    Welcome to hngrPac
                </div>
            )}
        </div>
    );
};

export default Home;
