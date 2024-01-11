import EachRecipes from './EachRecipes';

const AllRecipies = ({ recipes }) => {
  return (
    <div className='allRecipes w-full flex flex-wrap items-center justify-center  bg-[#F9F5EA]'>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <EachRecipes key={`${recipe.recipe.label}-${index}`} recipe={recipe} />
        ))
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <p className=''>No recipes available. Perform a search.</p>
        </div>
      )}
    </div>
  );
};

export default AllRecipies;
