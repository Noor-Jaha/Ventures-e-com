
import Carousel from '../components/Carousel'
import { userData } from '../components/helper'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'





const Home = () => {
    const { username } = userData();
  


    return (
        <>
            <Navbar />
            <div>
                <h2>welcome to {username}</h2>
            </div>
            <Carousel />
          <Footer/>
        </>
    )
}

export default Home