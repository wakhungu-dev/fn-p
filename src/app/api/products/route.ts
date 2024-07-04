import { mongooseConnect } from "@/lib/mongoose";
import { ProductModel } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest){
    try {
        await mongooseConnect();
        const products = await ProductModel.find();
        return NextResponse.json(products);
     
        
    } catch (error:any ) {
        return NextResponse.json({error: error.message}, {status: 500});
        
    }
   
}
export async function POST(req:NextRequest){

    try {
        let body = await req.json();
        await mongooseConnect();
        const formatedBody = Array.isArray(body) ? body : [body];
        const savedProducts = await ProductModel.insertMany(formatedBody);
        return NextResponse.json(savedProducts );
        
    } catch (error:any ) {
        return NextResponse.json({error: error.message}, {status: 500});
        
    }
   
}

