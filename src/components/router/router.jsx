import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../pages/Login/login";
import Welcome from "../pages/Welcome/welcome";
import Cart from "../pages/Cart/cart";
import Prueba from "../pages/prueba/prueba";
import Register from "../pages/Register/register";

function Router() {

    const [data,setData] = useState ([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => setData(json))
    },[]) 
    
    const addToCart = (prod) => {
        const existingProductIndex = cart.findIndex((item) => item.id === prod.id)

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
        const updatedCart = cart.filter((prod) => prod.id !== prodID)
        setCart(updatedCart)
    }

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Welcome" element={<Welcome data={data} cart={cart} addToCart={addToCart} />}></Route>
                <Route path="/Cart" element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} />}></Route>
                <Route path="/prueba" element={<Prueba />}></Route>
                <Route path="/Register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default Router;