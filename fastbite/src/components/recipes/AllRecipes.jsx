import EachRecipes from './EachRecipes';

const AllRecipies = ({ recipes }) => {
  return (
    <div className='allRecipes  flex flex-wrap items-center justify-center lg:mt-[3%] md:mt-[6%] sm:mt-[8%] min-[320px]:mt-[13%] bg-[#F9F5EA]'>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <EachRecipes key={`${recipe.recipe.label}-${index}`} recipe={recipe} />
        ))
      ) : (
        <p className=''>No recipes available. Perform a search.</p>
      )}
    </div>
  );
};

export default AllRecipies;
