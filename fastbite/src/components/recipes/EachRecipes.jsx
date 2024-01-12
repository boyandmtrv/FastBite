import { useNavigate } from 'react-router-dom';

const EachRecipes = ({
    recipe
}) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/details/${recipe.recipe['label']}`);
    };

    const product = recipe.recipe;

    return (
        <div className=" flex flex-col items-center justify-center w-[400px] h-[400px] mt-[80px] m-9">
            <div className='group rounded-2xl mt-5 absolute'>
                <p style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '.3px' }} className="recipiesTitle font-cursive text-5xl leading-[4rem] line-clamp-3 lg:w-[400px] md:w-[400px] sm:w-[400px]  min-[320px]:w-[320px] lg:h-[400px] md:h-[400px] sm:h-[400px] min-[320px]:h-[320px] pl-5 text-white absolute pt-[30px] bg-[#000000c5] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {product['label']}
                </p>
        
                <button className='bg-[#00000027] border-white hover:bg-[#f7d7c956] text-xl w-36 h-12 flex items-center justify-center text-center absolute bottom-0 right-0 mb-4 mr-4 rounded-3xl opacity-0 text-white hover:text-[#f7d7c9] transition-opacity duration-500 group-hover:opacity-100' onClick={handleDetailsClick}>
                    Details
                </button>


                <img className="recipiesImg lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[400px] sm:h-[400px] min-[320px]:w-[320px] min-320px:h-[320px] rounded-2xl" src={product['image']} />


            </div>
        </div>
    );
};

export default EachRecipes;

//opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[#ffffff86]