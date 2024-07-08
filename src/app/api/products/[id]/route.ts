import Product from "@/libs/models/product";
import { mongoDbConnection } from "@/libs/mongoDb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLparams: any) {
    try {
        const body = await request.json();
        
        if (!body) {
            throw new Error("Request body is null or undefined");
        }

        const { id } = URLparams.params;
        const { name, category, price } = body;

        await mongoDbConnection();

        const data = await Product.findByIdAndUpdate(
            id,
            { name, category, price },
            { new: true }
        );

        return NextResponse.json({msg: "Product updated successfully", data});
    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Error updating product",
            },
            { status: 400 }
        );
    }
}
