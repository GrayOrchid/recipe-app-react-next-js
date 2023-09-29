export default class GetRequests {




    static async getRecipes(setRecipes, search, diete, type, setNoResults, setIsLoading) {
        try {
            setIsLoading(true);
            const params = new URLSearchParams();
            if (type) params.append('type', type);
            if (diete) params.append('diete', diete);
            if (search) params.append('query', search);

            const response = await fetch(`/api/recipe?${params.toString()}`);
            const data = await response.json();

            if (data?.recipes?.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
                setRecipes(data.recipes);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }



    static async getUser(setUser, setFavoriteRecipes, id) {
        try {
            let response = await fetch(`/api/users/${id}`)
            if (response) {
                let data = await response.json()
                setUser(data.user)
                setFavoriteRecipes(data.user.favorite)
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async getUserRecipes(setRecipes, id) {
        try {
            let response = await fetch(`/api/recipe/userRecipes/${id}`)
            if (response) {
                let data = await response.json()
                setRecipes(data.recipes)
                console.log(data.recipes);
            }
        } catch (error) {
            console.log(error);
        }
    }


    static async getRecipe(setRecipe, setLikes, id) {

        try {
            if (id) {
                let response = await fetch(`/api/recipe/onerecipe/${id}`)
                let data = await response.json()
                setRecipe(data.recipe)
                setLikes(data.recipe.likes)
            }
        } catch (error) {
            console.log(error);
        }



    }


    static async getUserFavoriteRecipesList(session, setFavorites) {
        try {
            const userId = session?.user?.id;
            if (userId) {

                const response = await fetch(`/api/userFavorite/${userId}`);

                if (response.ok) {

                    const data = await response.json();
                    setFavorites(data.recipesIDs)
                } else {

                    console.error(`API request failed with status ${response.status}`);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    static async getCommentaries(id, setCommentaries) {
        try {
            const response = await fetch(`/api/commentaries/getCommentaries/${id}`);
            const data = await response.json();
            if (data) {
                setCommentaries(data.commentaries);
            }
        } catch (error) {
            console.error('Failed to fetch commentaries:', error);
        }
    };

}

