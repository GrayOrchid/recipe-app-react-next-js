import Commentarie from "@/models/commentaries";
import connect from "@/utils/connectToMongoDB"
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
    let { text, recipeId, userId } = await req.json()

    try {
        await connect
        let newCommentarie = new Commentarie({
            creator: userId, text, recipeId,
        })

        await newCommentarie.save()
        return new Response(JSON.stringify(newCommentarie), { status: 201 })
    } catch (error) {
        console.log(error);
    }
}

export const PATCH = async (req, { params }) => {
    let { text } = await req.json()

    try {

        await connect;

        const existingCommentarie = await Commentarie.findById(params.id);

        if (!existingCommentarie) {
            return new Response("Not found", { status: 404 });
        }
        existingCommentarie.text = text


        await existingCommentarie.save();

        return new Response("Successfully updated ", { status: 200 });
    } catch (error) {

        console.log(error);
    }
};


export async function DELETE(params) {
    await connect
    let id = params.nextUrl.searchParams.get("id")

    await Commentarie.findByIdAndRemove(id);
    return NextResponse.json({ messege: 'DELETE' }, { status: 200 })

}

