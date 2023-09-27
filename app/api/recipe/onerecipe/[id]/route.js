
import Recipe from "@/models/recipe";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";


export let GET = async (request, { params }) => {
    await connect
    try {

        let recipe = await Recipe.findById(params.id)
            .populate('creator')
            .populate('likes')

        return NextResponse.json({ recipe })
    } catch (error) {
        return new Response("Failed to fetch all recipes", { status: 500 })


    }
}

export const PATCH = async (req, { params }) => {
    let {
        title,
        description,
        portions,
        time,
        img,
        diete,
        recipe,
        type,
        ingredients,
        cooking,

    } = await req.json()

    try {

        await connect

        const existingRecipe = await Recipe.findById(params.id);

        if (!existingRecipe) {
            return new Response("Recipe not found", { status: 404 });
        }

        existingRecipe.title = title
        existingRecipe.description = description
        existingRecipe.portions = portions
        existingRecipe.time = time
        existingRecipe.img = img
        existingRecipe.diete = diete
        existingRecipe.type = type
        existingRecipe.recipe = recipe
        existingRecipe.ingredients = ingredients
        existingRecipe.cooking = cooking

        await existingRecipe.save();

        return new Response("Successfully updated the Recipe", { status: 200 });
    } catch (error) {
        console.log(error);
    }
};
