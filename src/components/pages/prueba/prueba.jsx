import { useEffect, useState } from "react";
import Form from "./form";

function Prueba() {

    const [menu, setMenu] = useState([])

    const traerInfo = async () => {
        await fetch("http://localhost:4000/menu")
            .then((res)=>{
                return res.json()
            })
            .then((data) => {
                setMenu(data)
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
                {menu.map((menus) => {
                    return <li key={menus._id}>{menus.nombrePlato}</li>
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