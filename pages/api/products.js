import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    const { method } = req;

    await mongooseConnect();

    if (method === "POST") {
        const data = {title, description, price, images} = req.body;

        const productDoc = await product.create({title, description, price, images});
        res.json(productDoc);
    }
    if (method === 'DELETE') {
        if(req.query.id){
            await product.deleteOne({_id:req.query.id});
            res.json(true)

        }
        
    }
}