import Recipe from "@/models/recipe";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";



export const POST = async (req, res) => {
    let {
        userId,
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
        let newRecipe = new Recipe({
            creator: userId,
            title,
            description,
            portions,
            time,
            img,
            diete,
            type,
            recipe,
            ingredients,
            cooking,
        })
        await newRecipe.save()
        return new Response(JSON.stringify(newRecipe), { status: 201 })
    } catch (error) {
        return new Response("Failed to fetch all recipes", { status: 500 })
    }
}

export async function DELETE(params) {
    await connect
    let id = params.nextUrl.searchParams.get("id")

    await Recipe.findByIdAndRemove(id);
    return NextResponse.json({ messege: 'DELETE' }, { status: 200 })

}

export let GET = async (request, { params }) => {
    try {
        await connect;

        const type = request.nextUrl.searchParams.get('type');
        const diete = request.nextUrl.searchParams.get('diete');
        const query = request.nextUrl.searchParams.get('query');


        let filter = {};

        if (type) filter.type = type;
        if (diete) filter.diete = diete;

        if (query) {
            const regex = new RegExp(`^${query}`, 'i');
            filter.title = regex;
        }

        const getRecipes = await Recipe.find(filter).populate('creator');

        let recipes = getRecipes.map((field) => {
            let { title, creator, _id, img } = field;
            return { title, creator, _id, img };
        });


        return new Response(JSON.stringify({ recipes }), { status: 200, headers: { "Content-Type": "application/json" } });

    } catch (error) {
        return new Response("Failed to fetch all recipes", { status: 500 });
    }
}



