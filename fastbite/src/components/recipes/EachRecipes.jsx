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
        <div className="">
            <img className="recipiesImg" src={product['image']} />
            <p className="recipiesTitle">{product['label']}</p>
            <button onClick={handleDetailsClick}>Details</button>
        </div>
    );
};

export default EachRecipes;