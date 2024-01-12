import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CuisineType from "../../cuisineTypes/CuisineType";

const CuisineSearch = ({
    query,
    setQuery,
    cuisineType,
    setCuisineType,
    onSubmit
}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [showAllCuisines, setShowAllCuisines] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        try {
            if (isVisible && cuisineType === '') {
                toast.error('Please enter a cuisine type')
                return;
            } else {
                onSubmit(query, cuisineType.toLowerCase()); 
                setQuery('');
                setCuisineType('');
            }
        } catch (err) {
            console.log(err);
        }

    };

    const handleNext = () => {
        setIsVisible(true);
    };

    const handleToggleAllCuisines = () => {
        setShowAllCuisines(!showAllCuisines);
    };

    const closeModal = () => {
        setShowAllCuisines(false);
      };
    


    return (
        <div className="cuisine-search">
            <div className="bg-pacBg">
                <form className="searchForm backdrop-blur-md flex w-full h-screen lg:flex-row md:flex-row sm:flex-col min-[320px]: flex-col items-center justify-center" onSubmit={handleSearch}>
                    {!isVisible && (
                        <div className="flex flex-col items-center justify-center">
                            <input
                                type="text"
                                className="w-full h-16 pl-5 border border-none bg-[#f7d7c9] text-[#545454] rounded-3xl lg:text-xl md:text-xl sm:text-xl min-[320px]:text-md"
                                placeholder="What do you have in the fridge?"
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
                            <p className="text-md lg:text-black md:text-black sm:text-black min-[320px]:text-white text-center mt-5">If you would like to search only for different cuisines, please leave <br />this field empty.</p>
                        </div>
                    )}
                    {isVisible && (
                        <div className="flex flex-col items-center justify-center">
                            <input
                                type="text"
                                className="w-full h-16 pl-5 border border-none bg-[#f7d7c9] text-[#545454] rounded-3xl lg:text-xl md:text-xl sm:text-xl min-[320px]:text-md"
                                placeholder="What cuisine would you like?"
                                value={cuisineType}
                                onChange={(e) => setCuisineType(e.target.value)}
                            />
                            <input
                                type="submit"
                                className="bg-[#C0DDC1] hover:bg-[#c1f3c3]  hover:text-[#545454] duration-500 lg:m-5 md:m-5 sm:mt-5 min-[320px]:mt-5 w-36 h-16 border rounded-3xl"
                                value="Search"
                            />
                            <div className="text-xl lg:text-black md:text-black sm:text-black min-[320px]:text-white text-center mt-5">
                               To see the full list of cuisine types, please click
                                <div className="cursor-pointer mt-5 text-4xl text-[#f7b99f]" onClick={handleToggleAllCuisines} >
                                    Here
                                </div>
                                {showAllCuisines && (
                                    <CuisineType onClose={closeModal} />
                                )}
                            </div>
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

export default CuisineSearch;
