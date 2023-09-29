"use client"
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Comments from '@/components/comments/Comments';
import Loader from '@/components/loader/Loader';
import AddCommentarie from '@/components/RecipeComponents/AddCommentarie';
import GetRequests from '@/utils/GеtRequests';
import RecipeIfno from '@/components/RecipeComponents/RecipeIfno';
import './recipePage.css';
import PostRequests from '@/utils/PostRequests';
import Likes from '@/components/RecipeComponents/Likes';
import DeleteRequests from '@/utils/DeleteRequest';

const PageRecipe = () => {
    const params = useParams();
    const { data: session } = useSession();
    const id = params.id;
    const [recipe, setRecipe] = useState({});
    const [commentaries, setCommentaries] = useState([]);
    const [commentarie, setCommentarie] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState([])
    const [hasError, setHasError] = useState(false);
    const handleOnError = (error, errorInfo) => {

        console.error(error, errorInfo);
        setHasError(true);
    };

    useEffect(() => {
        // handleOnError()
        const getData = async () => {
            try {
                await GetRequests.getRecipe(setRecipe, setLikes, id);
                await GetRequests.getUserFavoriteRecipesList(session, setFavorites);
                await GetRequests.getCommentaries(id, setCommentaries);
            } catch (error) {
                console.error('Failed to query recipes:', error);
            }
        };
        console.log('ww');
        getData();
    }, [session]);


    let postCommentarie = async (e) => {
        e.preventDefault();
        try {
            await PostRequests.addCommentarie(session, setCommentarie, id, commentarie);
            await GetRequests.getCommentaries(id, setCommentaries);
        } catch (error) {
            console.error(error);
        }
    };

    let postFavorite = async () => {
        try {
            await PostRequests.addToFavorite(session, id);
            await GetRequests.getUserFavoriteRecipesList(session, setFavorites);
        } catch (error) {
            console.error('Failed to query : ', error);
        }
    };

    let postLike = async () => {
        try {
            await PostRequests.like(id, session)
            await GetRequests.getRecipe(setRecipe, setLikes, id);
        } catch (error) {
            console.error('Failed to query : ', error);
        }
    }

    let deleteCommentarie = async (e) => {
        let id = e._id
        try {
            await DeleteRequests.deleteCommentarie(id, setCommentaries, commentaries)
        } catch (error) {
            console.error('Failed to query : ', error);
        }
    }



    const deleteLike = async (e) => {
        try {
            await DeleteRequests.deleteLike(session, id)
            await GetRequests.getRecipe(setRecipe, setLikes, id);

        } catch (error) {
            console.error('Failed to delete from likes:', error);
        }
    }

    const deleteFavorite = async (e) => {
        try {
            if (id) {
                await DeleteRequests.deleteFavorite(session, id);
                await GetRequests.getUserFavoriteRecipesList(session, setFavorites);
            } else {
                console.error('ID is undefined');
            }
        } catch (error) {
            console.error('Failed to delete from favorites:', error);
        }
    };


    const isFavorite = favorites.some((favorite) => favorite._id === id);
    const toggleAddToFavorite = isFavorite ? true : false;

    const isLike = likes.some((like) => like._id === session?.user?.id)
    const toggleLike = isLike ? true : false

    return (

        <div className="recipe-page"
        >
            {recipe.title ? (
                <>
                    <h1 className="recipe-page__title">{recipe?.title}</h1>
                    <Link className="recipe__creator-link" href={`/userPage/${recipe?.creator?._id}`}>
                        <Image className="recipe__creator-image" src={recipe?.creator?.image} width={30} height={30} alt="user-avatar" /> {recipe?.creator?.username}
                    </Link>
                    <RecipeIfno recipe={recipe} postFavorite={postFavorite} toggleAddToFavorite={toggleAddToFavorite} deleteFavorite={deleteFavorite} session={session} />
                    <Likes likes={likes} postLike={postLike} toggleLike={toggleLike} session={session} deleteLike={deleteLike} />
                    <Comments commentaries={commentaries} deleteCommentarie={deleteCommentarie} session={session} />
                    {session?.user && <AddCommentarie postCommentarie={postCommentarie} commentarie={commentarie} setCommentarie={setCommentarie} />}
                </>
            ) : (
                <Loader />
            )}
        </div>

    );
};

export default PageRecipe;
