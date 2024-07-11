
import TrendingProduct from '@/components/front-end/TrendingProduct'
import { NavbarCartWrapper } from '@/components/front-end/NavbarCartWrapper'


const Home = async () => {

 return (

    <main>
      <NavbarCartWrapper />
      <TrendingProduct  />
    </main>
  )
}

export default Home