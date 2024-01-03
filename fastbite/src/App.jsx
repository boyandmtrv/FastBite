import { useState } from 'react';
import './App.css';
import { appId, appKey } from './api/key';
import AllRecipes from './components/recipes/AllRecipes';
import Search from './components/search/Search';
import { getRecipes } from './api/api';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Details from './components/details/Details';
import Home from './components/home/Home';


function App() {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();
        try {
            getRecipes(query, appId, appKey, setRecipes);
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
