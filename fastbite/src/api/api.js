import Axios from 'axios';

export const getRecipes = async (query, appId, appKey, setRecipes) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=10&calories=591-722&health=alcohol-free`;

    try {
        const result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};