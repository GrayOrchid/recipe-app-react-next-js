import User from "@/models/user";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";

export let GET = async (request, { params }) => {
    try {
        await connect
        if (params.id) {

            let getRecipes = await User.findById(params.id).populate('favorite');
            let recipesIDs = getRecipes.favorite.map((field) => {
                let { _id } = field
                return { _id }
            })
            return NextResponse.json({ recipesIDs })
        }


    } catch (error) {
        console.log(error);
    }
}


