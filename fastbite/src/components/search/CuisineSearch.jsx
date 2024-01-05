const CuisineSearch = ({
    query,
    setQuery,
    cuisineType,
    setCuisineType,
    onSubmit
}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(query, cuisineType);
    };

    return (
        <div className="cuisine-search">
            <form className="searchForm" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter food"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter cuisine type"
                    value={cuisineType}
                    onChange={(e) => setCuisineType(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default CuisineSearch;
