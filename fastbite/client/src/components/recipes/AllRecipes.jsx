import EachRecipes from './EachRecipes';
import { Link } from 'react-router-dom'

const AllRecipies = ({ recipes }) => {
  return (
    <div className='allRecipes w-full flex flex-wrap items-center justify-center  bg-[#F9F5EA]'>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <EachRecipes key={`${recipe.recipe.label}-${index}`} recipe={recipe} />
        ))
      ) : (
        <div className="h-screen w-full flex flex-col text-center items-center justify-center">
          <p className='text-3xl'>No recipes available.</p>
          <Link className='mt-5 border text-white bg-[#FFB897] hover:text-[#000] hover:bg-[#f7d7c9] duration-500 rounded-full w-56 h-12 items-center justify-center flex text-xl' to='/search'>Perform a search.</Link>
        </div>
      )}
    </div>
  );
};

export default AllRecipies;
