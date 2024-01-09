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
        <div className="search mt-[20%]">
            <form className="searchForm" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder='Enter food'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input
                    type="submit"
                    value="Search"
                />
                
            </form>
        </div>
    )
};

export default Search;