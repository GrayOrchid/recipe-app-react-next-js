export default class DeleteRequests {

    static async deleteRecipe(id, recipes, setRecipes) {
        try {
            await fetch(`/api/recipe?id=${id.toString()}`, {
                method: 'DELETE',
            });
            const filteredRecipes = recipes.filter((p) => p._id !== id);
            setRecipes(filteredRecipes);
        } catch (error) {
            console.error('Failed to delete recipe:', error);
        }
    };




    static async deleteCommentarie(id, setCommentaries, commentaries) {
        try {
            await fetch(`/api/commentaries?id=${id.toString()}`, {
                method: 'DELETE',
            });
            let commentariesFilter = commentaries.filter((item) => item._id !== id)
            setCommentaries(commentariesFilter)
        } catch (error) {
            console.error('Failed to delete from commentarie:', error);
        }
    };

    static async deleteLike(session, id) {
        try {
            await fetch('/api/likes', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: session?.user?.id, recipeId: id }),
            });
        } catch (error) {
            console.error('Failed to delete from like:', error);
        }
    }

    static async deleteFavorite(session, id, setC) {
        try {
            if (id) {
                await fetch('/api/addToFavorite', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: session?.user?.id, recipeId: id }),
                });
            }

        } catch (error) {
            console.error('Failed to delete from favorite', error);
        }
    }
}
