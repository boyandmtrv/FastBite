import { useState } from 'react';
import './App.css';
import { appId, appKey } from './api/key';
import AllRecipes from './components/recipes/AllRecipes';
import Search from './components/search/Search';
import { getRecipes } from './api/api';

function App() {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes(query, appId, appKey, setRecipes);
    };

    return (
        <div className='App'>
            <p>Test heading</p>
            <Search
                query={query}
                setQuery={setQuery}
                onSubmit={onSubmit}
            />
            <AllRecipes recipes={recipes} />
        </div>
    )
}

export default App
