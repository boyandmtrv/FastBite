import { useParams, Link } from 'react-router-dom';

const Details = ({ recipes }) => {
    const { recipeId } = useParams();

    const recipe = recipes.find((r) => r.recipe.label === recipeId);
    console.log(recipe);

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    const product = recipe.recipe;

    return (
        <div className="w-full h-screen absolute flex">
            <div className="relative w-full h-full">
                <div className="absolute bg-[#000000a9] w-full h-full"></div>
                <img className="mx-auto w-full blur-md h-screen brightness-75" src={product['image']} alt={product['label']} />
            </div>
            <div className="absolute flex flex-row w-full h-screen items-center justify-center text-white text-center">
                <div className="flex ml-[10%] w-full justify-center text-start pl-5 flex-col text-3xl  shadow-[#000000c9] shadow-2xl text-white bg-[#5454543d] p-5">
                    <div className='leading-[2.5rem] mt-5'>
                        <p className=''>Total Time: <br /> <span className='text-[#FFB897] text-2xl'>{product['totalTime']} minutes</span></p>
                    </div>
                    <div className="leading-[2.5rem] mt-5">
                        <p>Calories: <br /> <span className='text-[#FFB897] text-2xl'>{product['calories'].toFixed(0)}</span></p>
                    </div>
                    <div className="leading-[2.5rem] mt-5">
                        <p>Cuisine Type: <br /> <span className='text-[#FFB897] text-2xl'>{product['cuisineType']}</span></p>
                    </div>
                    <div className="leading-[2.5rem] mt-5">
                        <p>Dish Type: <br /> <span className='text-[#FFB897] text-2xl'>{product['dishType']}</span></p>
                    </div>
                    <div className="leading-[2.5rem] mt-5">
                        <p>Source: <br /> <span className='text-[#FFB897] text-2xl'>{product['source']}</span></p>
                    </div>


                </div>
                <div className='flex flex-row z-0 w-full h-screen items-center '>
                    <img className="w-[500px] rounded-[50%] border-[5px] border-[#00000025] z-0" src={product['image']} alt={product['label']} />
                </div>
                <div className="max-w-[600px] h-[600px] justify-center absolute bg-[#545454] shadow-[#000000c9] flex flex-col shadow-2xl p-[20px] z-10">
                    <h1 className="text-4xl">{product['label']}</h1>
                    <p className='mt-5 text-2xl'>Ingredients: <br /> {product['ingredientLines']}</p>
                    <p className='mt-5 text-xl'>In order to see the full recipe, please:</p>
                    <Link to={product['url']} target="_blank" rel="noopener noreferrer">
                        <button className='bg-red-400 w-36 h-12 mt-5 rounded-full'>Click here</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
