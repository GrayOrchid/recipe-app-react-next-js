'use client'
import GetRequests from '@/utils/GеtRequests';
import HomeCards from '@/components/homeComponents/HomeCards';
import TypesBtns from '@/components/homeComponents/TypesBtns';
import Loader from '@/components/loader/Loader';
import Search from '@/components/homeComponents/Search';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import DeleteRequests from '@/utils/DeleteRequest';

const Home = () => {
    const { data: session } = useSession();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');
    const [diete, setDiete] = useState('');
    const [noResults, setNoResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        async function getData() {
            await GetRequests.getRecipes(setRecipes, search, diete, type, setNoResults, setIsLoading);
        }
        getData();
    }, [search, diete, type]);

    const deleteRecipe = async (e) => {
        let id = e._id
        console.log(id);
        try {
            await DeleteRequests.deleteRecipe(id, recipes, setRecipes)
        } catch (error) {
            console.error('Failed to delete recipe:', error);
        }
    };

    return (
        <div className="home">
            <div className="home__text"></div>
            <Search recipes={recipes} setRecipes={setRecipes} search={search} setSearch={setSearch} />
            <TypesBtns search={search} setSearch={setSearch} setDiete={setDiete} setType={setType} type={type} diete={diete} />
            {isLoading ? (
                <Loader />
            ) : recipes?.length ? (
                !noResults ? (
                    <HomeCards recipes={recipes} deleteRecipe={deleteRecipe} session={session} search={search} />
                ) : (
                    <h1 className='home__not-found'>No matches</h1>
                )
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Home;
