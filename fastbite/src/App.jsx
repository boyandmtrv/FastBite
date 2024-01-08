import './styles/App.css';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { appId, appKey } from './api/key';
import { getRecipes } from './api/api';

import Home from './components/home/Home';
import AllRecipes from './components/recipes/AllRecipes';
import TimeSearch from './components/search/TimeSearch';
import Details from './components/details/Details';
import Loading from './components/loading/Loading';
import CuisineSearch from './components/search/CuisineSearch';
import Search from './components/search/Search';
import Header from './components/header/Header';

function App() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cuisineType, setCuisineType] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (query, maxTime) => {
        try {
            setLoading(true);
            await getRecipes(query, appId, appKey, setRecipes, parseInt(maxTime), cuisineType);
            navigate('/allRecipes');
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        };
    };

    const onCuisineSearch = async (query, cuisineType) => {
        try {
            setLoading(true);
            await getRecipes(query, appId, appKey, setRecipes, null, cuisineType);
            navigate('/allRecipes');
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        };
    };


    return (
        <div className='App bg-gray-300 w-full h-screen'>
            <Header />
            {/* <TimeSearch
                query={query}
                setQuery={setQuery}
                onSubmit={onSubmit}
            /> */}

            {loading ? (
                <Loading />
            ) : (
                <Routes>
                    <Route path='/search'
                        element={<Search
                            query={query}
                            setQuery={setQuery}
                            onSubmit={onSubmit}
                        />}
                    />
                    <Route path='/cuisineSearch'
                        element={
                            <CuisineSearch
                                query={query}
                                setQuery={setQuery}
                                cuisineType={cuisineType}
                                setCuisineType={setCuisineType}
                                onSubmit={onCuisineSearch}
                            />}
                    />
                    <Route path='/timeSearch'
                        element={
                            <TimeSearch
                                query={query}
                                setQuery={setQuery}
                                onSubmit={onSubmit}
                            />}
                    />
                    <Route path='/' element={<Home />} />
                    <Route path='/allRecipes' element={<AllRecipes recipes={recipes} />} />
                    <Route path='/details/:recipeId' element={<Details recipes={recipes} />} />
                </Routes>
            )}
        </div>
    );
}

export default App;