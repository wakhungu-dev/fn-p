import { userController } from "@/controllers/UserController";
import { NextResponse } from "next/server";

export async function PUT(req: Request, query:{params: {id: string}}){
    const body = await req.json();
    try {
        const updatedUser = await userController.updateUser(query.params.id, body);
        return NextResponse.json(updatedUser);
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong "+ error.message }, { status: 500 });
    }
}