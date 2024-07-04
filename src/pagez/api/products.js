import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const data = ({ title, description, price, images } = req.body);

    const productDoc = await product.create({
      title,
      description,
      price,
      images,
    });
    res.json(productDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await product.findById(req.query.id));
    } else {
      res.json(await product.find());
    }

    if (method === "PUT") {
      const data = ({ title, description, price, images , _id} = req.body);
      await product.updateOne(
        { _id },
        {
          title,
          description,
          price,
          images,
        }
      );
      res.json(true);
    }
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      await product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
