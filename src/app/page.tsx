import Product from "@/libs/models/product";
import { mongoDbConnection } from "@/libs/mongoDb";
import Image from "next/image";
const getProducts = async () => {
  await mongoDbConnection();
  const products = await Product.find({});
  return products;
};
export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1>products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded-lg">
            <Image 
              src={product.imgSrc}
              width={200}
              height={200}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
