import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const About = () => {
    return (
        <div className="bg-pacBg ">
            <div className="flex flex-col h-full pt-[61px] rounded-md p-8 backdrop-blur-md w-full ">
                <p className="sm:text-lg sm:mt-6">
                    <span className="text-2xl sm:text-3xl flex flex-col text-left font-bold mt-9 text-[#FFB897]">Mission:</span> <br />
                    At hngrPac, we believe that cooking should be a delightful and accessible experience for everyone. Our mission is to inspire home cooks, novice chefs, and culinary enthusiasts alike to explore the world of flavors effortlessly.
                </p>
                <p className="text-base sm:text-lg my-4 sm:my-6">
                    <span className="text-2xl sm:text-3xl flex flex-col text-left font-bold mt-9 text-[#FFB897]">Innovation in Simplicity:</span> <br />
                    We've designed hngrPac to be your go-to recipe assistant, offering innovative features without sacrificing simplicity. Whether you're a seasoned chef or just starting your culinary journey, our user-friendly interface ensures a seamless experience.
                </p>
                <p className="text-base sm:text-lg my-4 sm:my-6">
                    <span className="text-2xl sm:text-3xl flex flex-col text-left font-bold mt-9 text-[#FFB897]">Key features</span> <br />
                    - Standard Search: Simply type your available ingredients to discover a plethora of recipes. Feeling adventurous? Leave the search bar empty, and let us surprise you with random recipes.
                    <br />
                    - Search by Time: Short on time? Tell us what's in your fridge, and specify the time you have to cook. We'll provide you with quick and delicious recipes tailored to your schedule.
                    <br />
                    - Search by Cuisine: Craving a specific cuisine? Enter your ingredients and select your desired culinary tradition. Explore the world's flavors without leaving your kitchen
                </p>
                <div className="text-base sm:text-lg my-4 sm:my-6">
                    <span className="text-2xl sm:text-3xl font-bold flex flex-col items-center">Reach out</span>
                    <div className='flex flex-row items-center text-5xl justify-center mt-5'>
                        <Link to='https://github.com/boyandmtrv' target="_blank" rel="noopener noreferrer" className="text-[#FFB897]  hover:text-[#f7d7c9] duration-500  mx-2"><FaGithub /></Link>
                        <Link to='https://www.linkedin.com/in/boyan-dimitrov-4402b4179/' target="_blank" rel="noopener noreferrer" className="text-[#FFB897] hover:text-[#f7d7c9] duration-500 mx-2"><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


