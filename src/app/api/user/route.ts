import { userController } from "@/controllers/UserController";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        

        const users = await userController.getUsers();
        return NextResponse.json(users);

        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong "+ error.message }, { status: 500 });
        
    }
}

export async function POST(req: Request){
    const body = await req.json();
    try {
        const user = await userController.createUser(body);
        return NextResponse.json(user);
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong "+ error.message }, { status: 500 });
    }
}