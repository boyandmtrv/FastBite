import EachRecipes from './EachRecipes';

const AllRecipies = ({
    recipes
}) => {
    return (
        <div className='allRecipes'>
        {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
                <EachRecipes key={`${recipe.recipe.label}-${index}`} recipe={recipe} />
            ))
        ) : (
            <p>No recipes available. Perform a search.</p>
        )}
    </div>
    )
};

export default AllRecipies;