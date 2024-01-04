import { useState } from "react";

const NoTimeSearch = ({
    query,
    setQuery,
    onSubmit
}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        
        onSubmit(query);
    };

    return (
        <div className="search">
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

export default NoTimeSearch;