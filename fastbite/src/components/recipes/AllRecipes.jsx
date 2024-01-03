import EachRecipes from './EachRecipes';

const AllRecipies = ({
    recipes
}) => {
    return (
        <div className='allRecipies'>
            {recipes.map(recipe => {
                return <EachRecipes key={recipe.recipe.label} recipe={recipe} />
            })}
        </div>
    )
};

export default AllRecipies;