import { useState } from 'react';
import './App.css';
import { appId, appKey } from './api/key';
import Axios from 'axios';

function App() {

    const [query, setQuery] = useState('');

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

    async function getRecipes() {
        const result = await Axios.get(url);
        console.log(result.data);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    };

    return (
        <div className='App'>
            <p onClick={getRecipes}>Test heading</p>
            <form className='searchForm' onSubmit={onSubmit}>
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
}

export default App
