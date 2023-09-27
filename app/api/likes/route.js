import Recipe from "@/models/recipe";
import User from "@/models/user";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";




export const POST = async (req, res) => {
    await connect
    let {
        userId,
        recipeId
    } = await req.json()

    try {


        const recipe = await Recipe.findById(recipeId);
        if (!recipe.likes) {
            recipe.likes = [];
        }

        recipe.likes.push(userId);

        await recipe.save();

        return new Response(JSON.stringify(recipe), { status: 201 })
    } catch (error) {
        return new Response(console.log(error))

    }
}


export const DELETE = async (req, res) => {
    let { userId, recipeId } = await req.json()


    try {
        await connect
        const recipe = await Recipe.findById(recipeId);
        recipe.likes = recipe.likes.filter((likeId) => likeId.toString() !== userId);

        await recipe.save();
        return NextResponse.json({ message: 'DELETE' }, { status: 200 });

    } catch (error) {
        console.log(error);
    }
}
