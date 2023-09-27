import Recipe from "@/models/recipe"
import connect from "@/utils/connectToMongoDB"

import { NextResponse } from "next/server"

export let GET = async (request, { params }) => {
    try {
        await connect
        let getRecipes = await Recipe.find({ creator: params.id }).populate('creator')

        let recipes = getRecipes.map((fild) => {
            let { title, creator, _id, img } = fild
            return { title, creator, _id, img }
        })
        return NextResponse.json({ recipes })

    } catch (error) {
        console.log(error);
    }

}
