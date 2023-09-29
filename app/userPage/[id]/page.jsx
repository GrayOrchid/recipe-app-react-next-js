"use client"
import Loader from '@/components/loader/Loader';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './userPage.css';
import Image from 'next/image';
import UserPageRecipes from '@/components/userPageComponents/UserPageRecipes';
import GetRequests from '@/utils/GеtRequests';
import { useSession } from 'next-auth/react';
import DeleteRequests from '@/utils/DeleteRequest';

const UserPage = () => {
    let [recipes, setRecipes] = useState([]);
    let [favoriteRecipes, setFavoriteRecipes] = useState([]);
    let [user, setUser] = useState({});
    let params = useParams();
    let { data: session } = useSession();
    let id = params.id;
    const [hasError, setHasError] = useState(false);
    const handleOnError = (error, errorInfo) => {

        console.error(error, errorInfo);
        setHasError(true);
    };


    useEffect(() => {
        async function getData(params) {
            await GetRequests.getUser(setUser, setFavoriteRecipes, id);
            await GetRequests.getUserRecipes(setRecipes, id);
        }
        console.log('w');
        handleOnError()
        getData();
    }, []);

    const deleteRecipe = async (e) => {
        let id = e._id
        try {
            await DeleteRequests.deleteRecipe(id, recipes, setRecipes)
        } catch (error) {
            console.error('Failed to delete recipe:', error);
        }
    };

    return (
        <div className='user-page'>
            {user ? (
                <>
                    <div className="user-page__user-info">
                        <Image className="user-page__user-info-image" src={user.image} width={250} height={250} />
                        <h1 className='user-page__user-info-name'>{user.username}</h1>
                    </div>
                    <UserPageRecipes deleteRecipe={deleteRecipe} favoriteRecipes={favoriteRecipes} recipes={recipes} session={session} />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default UserPage;
