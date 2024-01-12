import Axios from 'axios';

export const getRecipes = async (query, appId, appKey, setRecipes, maxTotalTime, cuisineType) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=100&calories=591-722&health=alcohol-free`;

    try {
        const result = await Axios.get(url);

        let filteredRecipes = result.data.hits;

        if (maxTotalTime) {
            filteredRecipes = result.data.hits.filter((recipe) => {
                const totalTime = recipe.recipe.totalTime || 0;
                return totalTime > 0 && totalTime <= maxTotalTime;
            });
        }

        if (cuisineType) {
            filteredRecipes = filteredRecipes.filter((recipe) => {
                const cuisines = recipe.recipe.cuisineType || [];
                return cuisines.includes(cuisineType);
            });
        }

        setRecipes(filteredRecipes);

    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};