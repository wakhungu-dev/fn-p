import { mongooseConnect } from "@/lib/mongoose";
import { ProductModel } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;
  return new NextResponse(JSON.stringify({ id }));
}

 export async function PUT(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
    
  } = query;
  try {
    let body = await req.json();
      await mongooseConnect();
   
    const savedProducts = await ProductModel.findByIdAndUpdate(id, body, );
    return NextResponse.json(savedProducts );
    
} catch (error:any ) {
    return NextResponse.json({error: error.message}, {status: 500});
    
    
}
 
}

export async function DELETE(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;
  return new NextResponse(JSON.stringify({ id }));
}