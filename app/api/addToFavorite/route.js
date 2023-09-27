import User from "@/models/user";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";




export const POST = async (req, res) => {
    let {
        userId,
        recipeId
    } = await req.json()

    try {
        await connect

        const user = await User.findById(userId);
        if (!user.favorite) {
            user.favorite = [];
        }

        user.favorite.push(recipeId);
        await user.save();

        return new Response(JSON.stringify(user), { status: 201 })
    } catch (error) {
        return new Response("Failed to fetch all recipes", console.log(error))
    }
}



export const DELETE = async (req, res) => {
    let { userId, recipeId } = await req.json()


    try {
        await connect
        const user = await User.findById(userId);
        user.favorite = user.favorite.filter((favoriteRecipeId) => favoriteRecipeId.toString() !== recipeId);
        await user.save();
        return NextResponse.json({ message: 'DELETE' }, { status: 200 });

    } catch (error) {
        return new Response("Failed to fetch all recipes", console.log(error))
    }
}
