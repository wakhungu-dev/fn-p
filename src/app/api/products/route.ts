import Product from "@/libs/models/product";
import { mongoDbConnection } from "@/libs/mongoDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        await mongoDbConnection();
        const data = await  Product.find();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({
            error,
            msg: "Error fetching products",
        
    },{status: 500});

    }
}
export async function POST(request: NextRequest) {
    try {
        await mongoDbConnection();
        
        const body = await request.json();
        const { imgSrc, fileKey, name, category, price } = body;

        if (!imgSrc || !fileKey || !name || !category || !price) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const newProduct = new Product({
            imgSrc,
            fileKey,
            name,
            category,
            price,
        });

        await newProduct.save();

        return NextResponse.json({ message: 'Product added successfully', product: newProduct }, { status: 201 });
    } catch (error) {
        console.error('Error adding product:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
