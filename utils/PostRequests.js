export default class PostRequests {

    static async addRecipe(recipe, session) {
        try {
            await fetch("http://localhost:3000/api/recipe", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: recipe.title,
                    description: recipe.description,
                    img: recipe.img,
                    userId: session?.user.id,
                    portions: recipe.portions,
                    time: recipe.time,
                    diete: recipe.diete ? recipe.diete : 'no diete',
                    type: recipe.type ? recipe.type : 'Appetizers',
                    ingredients: recipe.ingredients,
                    cooking: recipe.cooking
                })
            })
        } catch (error) {
            console.log('Failed add tp Recipe: ', error);
        }
    }
    static async addCommentarie(session, setCommentarie, id, commentarie) {
        try {
            const newCommentarie = {
                text: commentarie,
                recipeId: id,
                userId: session?.user.id,
            };

            let response = await fetch(`http://localhost:3000/api/commentaries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCommentarie),
            });

            if (response.ok) {
                setCommentarie('');
            }

        } catch (error) {
            console.error('Failed to add Commentarie:', error);
        }
    };

    static async addToFavorite(session, id) {
        console.log(id);
        try {
            await fetch(`http://localhost:3000/api/addToFavorite`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recipeId: id, userId: session.user.id }),
            });

        } catch (error) {
            console.error('Failed to add to favorites:', error);
        }
    };

    static async like(id, session) {
        try {
            await fetch('http://localhost:3000/api/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recipeId: id, userId: session.user.id }),
            })
        } catch (error) {
            console.error('Failed to add to likes:', error);
        }
    }

}