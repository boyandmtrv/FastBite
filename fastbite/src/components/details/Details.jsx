import { useParams, Link } from 'react-router-dom';

const Details = ({ recipes }) => {
    const { recipeId } = useParams();

    const recipe = recipes.find((r) => r.recipe.label === recipeId);

    if (!recipe) {
        return <div className='text-5xl w-full h-screen flex flex-col bg-[#F9F5EA] text-center justify-center items-center'>Recipe not found. 
        <span className='mt-5'>
        <Link className='mt-5 border text-white bg-[#FFB897] hover:text-[#000] hover:bg-[#f7d7c9] duration-500 rounded-full w-56 h-12 items-center justify-center flex text-xl' to='/search'>Perform a search.</Link>        </span>
        </div>
    }

    const product = recipe.recipe;

    return (
        <div className="w-full h-screen absolute flex">
            <div className="relative w-full h-full">
                <div className="absolute bg-[#000000a9] w-full h-full"></div>
                <img className="mx-auto w-full blur-md h-screen brightness-75" src={product['image']} alt={product['label']} />
            </div>
            <div className="absolute flex flex-row w-full h-screen items-center justify-center text-white text-center">
                <div className="flex lg:ml-[10%] md:ml-0 sm:ml-0 min-[320px]: ml-[30%] lg:mt-0 md:mt-0 sm:mt-0 min-[320px]:mt-[600px] w-full lg:flex md:flex sm:flex min-[320px]:hidden justify-center text-start pl-5 flex-col lg:text-3xl md:text-2xl sm:text-xl  shadow-[#000000c9] shadow-2xl text-white bg-[#5454543d]  p-5">
                    <div className='lg:leading-[2.5rem] md:leading-[2rem] sm:leading-[1.5rem] min-[320px]:leading-[.2rem] mt-5'>
                        <p className=''>Total Time: <br /> <span className='text-[#FFB897] lg:text-2xl md:text-xl'>{product['totalTime']} minutes</span></p>
                    </div>
                    <div className="lg:leading-[2.5rem] md:leading-[2rem] sm:leading-[1.5rem] min-[320px]:leading-[.2rem] mt-5">
                        <p className=''>Calories: <br /> <span className='text-[#FFB897] lg:text-2xl md:text-xl'>{product['calories'].toFixed(0)}</span></p>
                    </div>
                    <div className="lg:leading-[2.5rem] md:leading-[2rem] sm:leading-[1.5rem] min-[320px]:leading-[.2rem] mt-5">
                        <p className=''>Cuisine Type: <br /> <span className='text-[#FFB897] lg:text-2xl md:text-xl'>{product['cuisineType']}</span></p>
                    </div>
                    <div className="lg:leading-[2.5rem] md:leading-[2rem] sm:leading-[1.5rem] min-[320px]:leading-[.2rem] mt-5">
                        <p className=''>Dish Type: <br /> <span className='text-[#FFB897] lg:text-2xl md:text-xl'>{product['dishType']}</span></p>
                    </div>
                    <div className="lg:leading-[2.5rem] md:leading-[2rem] sm:leading-[1.5rem] min-[320px]:leading-[.2rem] mt-5">
                        <p className=''>Source: <br /> <span className='text-[#FFB897] lg:text-2xl md:text-xl'>{product['source']}</span></p>
                    </div>


                </div>
                <div className='flex flex-row z-0 w-full h-screen items-center '>
                    <img className="lg:w-[500px] md:w-[450px] sm:w-[350px] min-[320px]:w-[300px] lg:mt-0 md:mt-0 sm:mt-0 min-[320px]:mt-[-450px] lg:ml-0 ml md:ml-0 sm:ml-0 min-[320px]:ml-[45px] rounded-[50%] border-[5px] border-[#00000025] z-0" src={product['image']} alt={product['label']} />
                </div>
                <div className="lg:w-[600px] lg:h-[750px] md:w-[400px] md:h-[800px] sm:w-[400px] sm:h-[500px] min-[320px]:w-[300px] min-[320px]:h-[400px] justify-center absolute bg-[#545454]  shadow-[#000000c9] flex flex-col shadow-2xl p-[20px] z-1">
                    <h1 className="lg:text-4xl md:text-2xl sm:text-md min-[320px]:text-sm">{product['label']}</h1>
                    <p className='mt-5 lg:text-xl md:text-md sm:text-sm min-[320px]:text-[12px]'>Ingredients: <br /> {product['ingredientLines']}</p>
                    <p className='mt-5 lg:text-xl md:text-md sm:text-sm min-[320px]:text-[12px]'>In order to see the full recipe, please:</p>
                    <Link to={product['url']} target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#FFB897] text-black hover:bg-[#fac4ac] hover:text-white duration-500 lg:w-36 lg:h-12 md:w-36 md:h-12 sm:w-36 sm:h-12 min-[320px]:w-28 min-[320px]:h-8 mt-5 rounded-full'>Click here</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
