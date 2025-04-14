import { Route, Routes } from "react-router-dom"
import Home from "./modules/Home"
import Logout from "./components/Logout"
import Products from "./components/Products"
import Signup from "./components/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from "./components/Login"
import Nav from "./components/Nav"
import CartList from "./components/CartList"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"







const App = () => {

  const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);


    const AddToCart = (pro) => {
        setCart([ pro])
        console.log(cart)
    }


    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("https://fakestoreapi.com/products?limit=5");
            const data = await response.json()
            console.log(data)
            setProducts(data);
        }
        fetchProduct();
    }, [])


  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products products={products} AddToCart={AddToCart}/>} />
        <Route path='/cartlist' element={<CartList cart={cart} />} />
      </Routes>
    </>
  )
}

export default App