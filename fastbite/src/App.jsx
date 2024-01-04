import './styles/App.scss';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { appId, appKey } from './api/key';
import { getRecipes } from './api/api';

import Home from './components/home/Home';
import AllRecipes from './components/recipes/AllRecipes';
import Search from './components/search/Search';
import Details from './components/details/Details';

function App() {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();


    const onSubmit = async (query, maxTime) => {
        try {
            await getRecipes(query, appId, appKey, setRecipes, parseInt(maxTime));
            navigate('/allRecipes');
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };
    

    return (
        <div className='App'>
            <Search
                query={query}
                setQuery={setQuery}
                onSubmit={onSubmit}
            />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/allRecipes' element={
                    <AllRecipes recipes={recipes} />}>
                </Route>
                <Route path='/details/:recipeId' element={<Details recipes={recipes} />} >
                </Route>

            </Routes>
        </div >
    )
}

export default App
