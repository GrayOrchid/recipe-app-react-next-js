"use client"
import Form from '@/components/form/Form';
import PostRequests from '@/utils/PostRequests';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RecipeAddPage = () => {
    let { data: session } = useSession();
    let router = useRouter();
    let [recipe, setRecipe] = useState({
        title: "",
        time: 0,
        portions: 0,
        description: "",
        cooking: "",
        ingredients: "",
        diete: "defaultDieteValue",
        type: "defaultTypeValue",
        likes: [],
    });

    let handlSubmit = async (e) => {
        e.preventDefault();
        try {
            await PostRequests.addRecipe(recipe, session);
            router.push('/');
        } catch (error) {
            console.log('Failed add to Recipe: ', error);
        }
    };

    let imageUpLoad = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            let dataURL = event.target.result;
            setRecipe({ ...recipe, img: dataURL });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='recipe-add-page' style={{ textAlign: 'center', paddingTop: '20px' }}>
            <h1 className='recipe-add-page_title' >Add Recipe</h1>
            <Form recipe={recipe} setRecipe={setRecipe} imageUpLoad={imageUpLoad} handlSubmit={handlSubmit} />
        </div>
    );
}

export default RecipeAddPage;
