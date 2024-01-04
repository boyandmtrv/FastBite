import Axios from 'axios';

export const getRecipes = async (query, appId, appKey, setRecipes, maxTotalTime) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=100&calories=591-722&health=alcohol-free`;

    try {
        const result = await Axios.get(url);

        let filteredRecipes = result.data.hits;
        
        if (maxTotalTime) {
            filteredRecipes = result.data.hits.filter(recipe => {
                const totalTime = recipe.recipe.totalTime || 0;
                console.log(`Recipe time ${totalTime}`);
                console.log(`Recipe name ${recipe.recipe.label}`);
                console.log(`Max: ${maxTotalTime}`);
                return totalTime > 0 && totalTime <= maxTotalTime;
            });
        }

        // const filteredRecipes = result.data.hits.filter(recipe => {
        //     const totalTime = recipe.recipe.totalTime || 0; 
        //     console.log(`Recipe time ${totalTime}`);
        //     console.log(`Recipe name ${recipe.recipe.label}`);
        //     console.log(`Max: ${maxTotalTime}`);
        //     return totalTime > 0 && totalTime <= maxTotalTime;
        // });
        console.log(filteredRecipes);

        setRecipes(filteredRecipes);
        console.log(result.data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};
