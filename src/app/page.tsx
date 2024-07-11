
import TrendingProduct from '@/components/front-end/TrendingProduct'
import { mongoDbConnection } from '@/libs/mongoDb'
import Product from '@/libs/models/product'
import { NavbarCartWrapper } from '@/components/front-end/NavbarCartWrapper'
const getProducts = async () => {
await mongoDbConnection();
const data = await Product.find();
return data;

}

const Home = async () => {
const products = await getProducts();
if (!products) return <div>Loading...</div>;
 return (

    <main>
      <NavbarCartWrapper />
      <TrendingProduct productz = {products}/>
    </main>
  )
}

export default Home