const Search = ({
    query,
    setQuery,
    onSubmit
}) => {
    return (
        <div className="search">
            <form className="searchForm" onSubmit={onSubmit}>
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