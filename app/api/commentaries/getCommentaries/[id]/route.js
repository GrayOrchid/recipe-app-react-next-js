import Commentarie from "@/models/commentaries";
import connect from "@/utils/connectToMongoDB"
import { NextResponse } from "next/server";

export let GET = async (request, { params }) => {
    try {
        await connect
        let commentaries = await Commentarie.find({ recipeId: params.id }).populate(`creator`);

        return NextResponse.json({ commentaries })
    } catch (error) {
        console.log(error);

    }
}
