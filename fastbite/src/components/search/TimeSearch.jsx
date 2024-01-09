import { useState } from "react";

const TimeSearch = ({
    query,
    setQuery,
    onSubmit
}) => {

    const [maxTime, setMaxTime] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(query, maxTime);
        setQuery('');
        setMaxTime('');
    };

    const handleNext = () => {
        setIsVisible(true);
    };

    return (
        <div className="search">
            <div className="bg-pacBg ">
                <form className="searchForm backdrop-blur-md flex w-full h-screen flex-row items-center justify-center" onSubmit={handleSearch}>
                    {!isVisible && (
                        <>
                            <input
                                type="text"
                                className=" w-[40%] h-16 pl-5 border border-black rounded-3xl text-2xl"
                                placeholder='Enter food'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" bg-slate-500 ml-5 w-36 h-16 border rounded-3xl"
                                onClick={handleNext}>
                                Next
                            </button>
                        </>
                    )}
                    {isVisible && (
                        <>
                            <input
                                type="number"
                                className=" w-[40%] h-16 pl-5 border border-black rounded-3xl text-2xl"
                                placeholder='Time you have'
                                value={maxTime}
                                onChange={(e) => setMaxTime(e.target.value)}
                            />
                            <input
                                type="submit"
                                className=" bg-slate-500 ml-5 w-36 h-16 border rounded-3xl"
                                value="Search"
                            />
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default TimeSearch;
