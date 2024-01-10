const Search = ({
    query,
    setQuery,
    onSubmit
}) => {


    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <div className="search">
            <div className="bg-pacBg">
                <form className="searchForm backdrop-blur-md flex w-full h-screen lg:flex-row md:flex-row sm:flex-col min-[320px]: flex-col items-center justify-center" onSubmit={handleSearch}>
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            className="w-full h-16 pl-5 border border-none bg-[#f7d7c9] text-[#545454] rounded-3xl lg:text-xl md:text-xl sm:text-xl min-[320px]:text-md"
                            placeholder='What do you have in the fridge?'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <input
                            type="submit"
                            className=" bg-[#C0DDC1] hover:bg-[#c1f3c3]  hover:text-[#545454] duration-500 lg:m-5 md:m-5 sm:mt-5 min-[320px]:mt-5 w-36 h-16 border rounded-3xl"
                            value="Search"
                        />
                           <p className="text-xl lg:text-black md:text-black sm:text-black min-[320px]:text-white text-center mt-5">Please, add one or more products and separate them with ','.</p>
                           <p className="text-md lg:text-black md:text-black sm:text-black min-[320px]:text-white text-center mt-5">If you want to browse all recipes, <br /> please leave this field empty.</p>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Search;