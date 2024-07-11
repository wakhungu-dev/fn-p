
import TrendingProduct from '@/components/front-end/TrendingProduct'
import { NavbarCartWrapper } from '@/components/front-end/NavbarCartWrapper'
import Footer from '@/components/front-end/Footer'


const Home = async () => {

 return (

    <main>
      <NavbarCartWrapper />
      <TrendingProduct  />
      <Footer />
    </main>
  )
}

export default Home