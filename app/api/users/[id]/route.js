import User from "@/models/user";
import connect from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";

export let GET = async (request, { params }) => {
    try {
        await connect
        let user = await User.findById(params.id).populate({
            path: 'favorite',
            populate: {
                path: 'creator',
            },
        });

        return NextResponse.json({ user })
    } catch (error) {
        console.log(error);

    }
}


