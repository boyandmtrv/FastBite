import { useState } from "react";

const CuisineSearch = ({
    query,
    setQuery,
    cuisineType,
    setCuisineType,
    onSubmit
}) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(query, cuisineType);
        setQuery('');
        setCuisineType('');
    };

    const handleNext = () => {
        setIsVisible(true);
    };


    return (
        <div className="cuisine-search">
            <form className="searchForm flex w-full h-screen flex-row items-center justify-center" onSubmit={handleSearch}>
                {!isVisible && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter food"
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
                            type="text"
                            placeholder="Enter cuisine type"
                            value={cuisineType}
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <input
                            type="submit"
                            className=" bg-slate-500 ml-5 w-36 h-16 border rounded-3xl"
                            value="Search"
                        />                    </>
                )}
            </form>
        </div>
    );
};

export default CuisineSearch;
