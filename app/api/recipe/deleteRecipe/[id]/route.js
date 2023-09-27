import Recipe from "@/models/recipe";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";


export async function DELETE(req) {
    await connect;
    let { id } = await req.json()

    try {
        await Recipe.findByIdAndRemove(id);
        return NextResponse.json({ message: 'DELETE' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete recipe' }, { status: 500 });

    }
}
