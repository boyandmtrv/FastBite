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
        <div className="m-9 flex flex-col items-center justify-center w-[400px] h-[400px]">
            <div className='group rounded-2xl mt-5'>
                <p style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '.3px' }} className="recipiesTitle text-7xl leading-[4rem] line-clamp-3 lg:w-[400px] md:w-[400px] sm:w-[400px]  min-[320px]:w-[320px] lg:h-[400px] md:h-[400px] sm:h-[400px] min-[320px]:h-[320px] pl-5 text-white absolute pt-[80px] bg-[#000000c5] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {product['label']}
                </p>
        
                <button className=' bg-[#00000025] border-white hover:bg-[#f7d7c9] text-xl w-36 h-12  flex flex-col items-center justify-center text-center absolute lg:mt-[17%] lg:ml-[12%] rounded-3xl opacity-0 text-white hover:text-black transition-opacity duration-500 group-hover:opacity-100' onClick={handleDetailsClick}>Details</button>


                <img className="recipiesImg lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[400px] sm:h-[400px] min-[320px]:w-[320px] min-320px:h-[320px] rounded-2xl" src={product['image']} />


            </div>
        </div>
    );
};

export default EachRecipes;

//opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[#ffffff86]