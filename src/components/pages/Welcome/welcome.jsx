import { Fragment, useState } from "react";
import Header from "../../Header/header";
import Card from "../../Card/card";

function Welcome() {
    
    const [data,setData] = useState ([])

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => setData(json))
    
        
    const [ cart, setCart] =  useState ([])

    const handleClick = (prod) => {
        let CartUpdate = [...cart, prod]
        setCart(CartUpdate)
    }

    return ( 
        <Fragment>       
            <Header cart={cart}/>      
            {data.map((prod) => {
                return <Card add={handleClick} prod={prod} key={prod.id}/>
            })}
        </Fragment>
     );
}

export default Welcome;