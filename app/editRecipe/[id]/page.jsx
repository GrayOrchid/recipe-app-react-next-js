'use client'
import Form from '@/components/form/Form';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GetRequests from '@/utils/GеtRequests';

const Page = ({ params }) => {
    const [recipe, setRecipe] = useState({});
    const id = params.id;
    const router = useRouter();

    useEffect(() => {
        async function getData() {
            await GetRequests.getRecipe(setRecipe, id);
        }
        getData();
    }, [id]);

    const imageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const dataURL = event.target.result;
            setRecipe({ ...recipe, img: dataURL });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const editRecipe = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/recipe/onerecipe/${params.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: recipe.title,
                    description: recipe.description,
                    img: recipe.img,
                    portions: recipe.portions,
                    time: recipe.time,
                    diete: recipe.diete ? recipe.diete : 'no diete',
                    type: recipe.type ? recipe.type : 'Appetizers',
                    ingredients: recipe.ingredients,
                    cooking: recipe.cooking,
                }),
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form handlSubmit={editRecipe} recipe={recipe} setRecipe={setRecipe} imageUpLoad={imageUpload} />
    );
};

export default Page;
