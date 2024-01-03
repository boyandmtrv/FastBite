const EachRecipes = ({
    recipe
}) => {

    return (
        <div className="">
            <img className="recipiesImg" src={recipe.recipe['image']} />
            <p className="recipiesTitle">{recipe.recipe['label']}</p>
            <p className="uri">{recipe.recipe['url']}</p>
        </div>
    );
};

export default EachRecipes;