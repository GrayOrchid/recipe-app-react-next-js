import RecipeInfoText from './RecipeInfoText';
import RecipeInfoItems from './RecipeInfoItems';
import Image from 'next/image';

const RecipeIfno = ({ recipe, postFavorite, toggleAddToFavorite, deleteFavorite, session }) => {
    return (
        <div className="recipe-page__info">
            <Image className="recipe-page__info-img --desctop-image" width={800} height={700} src={recipe?.img} alt="recipe-image" />
            <Image className="recipe-page__info-img --mobile-image" src={recipe?.img} alt="recipe-image" width={310} height={310} />
            <div className="recipe-page__info-main">
                <RecipeInfoText recipe={recipe} />
                <RecipeInfoItems recipe={recipe} postFavorite={postFavorite} toggleAddToFavorite={toggleAddToFavorite} deleteFavorite={deleteFavorite} session={session} />
            </div>
        </div>
    );
}

export default RecipeIfno;

