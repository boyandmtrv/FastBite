import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TimeSearch = ({
    query,
    setQuery,
    onSubmit
}) => {

    const [maxTime, setMaxTime] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        try {
            if (isVisible && maxTime === '') {
                toast.error('Please enter a time frame!')
                return;
            } else {
                onSubmit(query, maxTime);
                setQuery('');
                setMaxTime('');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleNext = (e) => {
        e.preventDefault()
        try {
            if (!isVisible && query === '') {
                toast.error('Please enter one or more products')
                return;
            } else {
                setIsVisible(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="search">
            <div className="bg-pacBg ">
                <form className="searchForm backdrop-blur-md flex w-full h-screen lg:flex-row md:flex-row sm:flex-col min-[320px]: flex-col items-center justify-center" onSubmit={handleSearch}>
                    {!isVisible && (
                        <div className="flex flex-col items-center justify-center">
                            <input
                                type="text"
                                className=" w-full h-16 pl-5 border border-none bg-[#f7d7c9] text-[#545454] rounded-3xl lg:text-xl md:text-xl sm:text-xl min-[320px]:text-md"
                                placeholder='What do you have in the fridge?'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" bg-[#C0DDC1] hover:bg-[#c1f3c3]  hover:text-[#545454] duration-500 lg:m-5 md:m-5 sm:mt-5 min-[320px]:mt-5 w-36 h-16 border rounded-3xl"
                                onClick={handleNext}>
                                Next
                            </button>
                            <p className="text-xl lg:text-black md:text-black sm:text-black min-[320px]:text-white text-center mt-5">Please, add one or more products and separate them with ','.</p>
                        </div>
                    )}
                    {isVisible && (
                        <div className="flex flex-col items-center justify-center">
                            <input
                                type="number"
                                className="w-full h-16 pl-5 border border-none bg-[#f7d7c9] text-[#545454] rounded-3xl lg:text-xl md:text-xl sm:text-xl min-[320px]:text-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder='How many minutes do you have?'
                                value={maxTime}
                                onChange={(e) => setMaxTime(e.target.value)}
                            />
                            <input
                                type="submit"
                                className=" bg-[#C0DDC1] hover:bg-[#c1f3c3]  hover:text-[#545454] duration-500 lg:m-5 md:m-5 sm:mt-5 min-[320px]:mt-5 w-36 h-16 border rounded-3xl"
                                value="Search"
                            />
                            <p className="text-xl text-center mt-5">Please type the minutes in number type.</p>
                        </div>
                    )}
                </form>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default TimeSearch;
