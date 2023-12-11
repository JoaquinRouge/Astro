import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../pages/Login/login";
import Remeras from "../pages/Remeras/remeras";
import Cart from "../pages/Cart/cart";
import Register from "../pages/Register/register";
import Prueba from "../pages/prueba/prueba";
import ProductView from "../pages/Product-View/productview";
import Buzos from "../pages/Buzos/buzos";
import Hombre from "../pages/Hombre/hombre";
import Mujer from "../pages/Mujer/mujer";


function Router() {

    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res=>res.json())
            .then(json => setData(json))
    },[]) 
    
    const addToCart = (prod) => {
        const existingProductIndex = cart.findIndex((item) => item.id === prod._id)

        if (existingProductIndex !== -1) {
            setCart([...cart])
        }
        else {
            prod.quantity = 1
            setCart([...cart,prod])
        }

        setCart([...cart, prod])

    }

    const removeItemFromCart = (prodID) => {
        const updatedCart = cart.filter((prod) => prod._id !== prodID)
        setCart(updatedCart)
    }

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Remeras" element={<Remeras data={data} cart={cart} addToCart={addToCart} />}></Route>
                <Route path="/Cart" element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/prueba" element={<Prueba />}></Route>
                <Route path="/product/:productId/:productTitle" element={<ProductView data={data} cart={cart} add={addToCart} />}></Route>
                <Route path="/Buzos" element={<Buzos data={data} cart={cart} addToCart={addToCart} />}></Route>
                <Route path="/Hombre" element={<Hombre data={data} cart={cart} addToCart={addToCart} />}></Route>
                <Route path="/Mujer" element={<Mujer data={data} cart={cart} addToCart={addToCart}/>}></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default Router;