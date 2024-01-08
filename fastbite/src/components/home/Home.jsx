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
        <div className={`homeContainer`}>
            <div className={`pacmanContainer ${isVisible ? 'fade-out' : ''}`}>
                {isVisible && (
                    <div className="pacmanTotal">
                        <div className="pacman"></div>
                        <div className="dot"></div>
                        <div className="path">
                            <GiHamburger />
                        </div>
                        <div className="path">
                            <GiFriedEggs />
                        </div>
                        <div className="path">
                            <GiMeat />
                        </div>
                        <div className="path">
                            <GiHamburger />
                        </div>
                        <div className="path">
                            <GiFriedEggs />
                        </div>
                        <div className="path">
                            <GiMeat />
                        </div>
                        <div className="path">
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
