
export default class DeleteRequests {

    static async deleteRecipe(id, recipes, setRecipes) {
        try {
            await fetch(`/api/recipe/deleteRecipe/${id.toString()}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            }
            );
            const filteredRecipes = recipes.filter((p) => p._id !== id);
            setRecipes(filteredRecipes);
        } catch (error) {
            console.error('Failed to delete recipe:', error);
        }
    };




    static async deleteCommentarie(id, setCommentaries, commentaries) {
        try {
            // commentaries
            await fetch(`/api/commentaries/deleteCommentaries/${id.toString()}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            }
            );
            const filteredCommentaries = commentaries.filter((p) => p._id !== id);
            setCommentaries(filteredCommentaries);
        } catch (error) {
            console.error('Failed to delete recipe:', error);
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
