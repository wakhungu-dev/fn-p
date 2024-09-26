import { userController } from "@/controllers/UserController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        

        const users = await userController.getUsers();
        return NextResponse.json(users);

        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong "+ error.message }, { status: 500 });
        
    }
}

export async function POST(req: NextRequest){
    try {
        
const body = await req.json();
const user = await userController.createUser(body);
        return NextResponse.json(user);

        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong "+ error.message }, { status: 500 });
        
    }
}