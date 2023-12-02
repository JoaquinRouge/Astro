import { useEffect, useState } from "react";
import Form from "./form";
import Card from "../../Card/card";

function Prueba() {

    const [products, setProducts] = useState([])

    const traerInfo = async () => {
        await fetch("http://localhost:4000/products")
            .then((res)=>{
                return res.json()
            })
            .then((data) => {
                setProducts(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(() => {
        traerInfo()
    },[])
    return ( 
        <div>
            <h1>Prueba</h1>
            <ul>
                {products.map((prod) => {
                    return <Card prod={prod}/>
                })}
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Form/>
        </div>
     );
}

export default Prueba;