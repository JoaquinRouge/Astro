import { Fragment, useState } from "react";
import './updateproduct.css'
import { useNavigate } from "react-router-dom";

function UpdateProduct({ prod }) {
    
    const navigate = useNavigate()
    const [prodUpdated,setprodUpdated] = useState(false)

    const updateProd = async(event) => {
        event.preventDefault()

        const form = {
            "titleOld":event.target[0].value,
            "title": event.target[1].value,
            "price": event.target[2].value,
            "category": event.target[3].value,
            "description": event.target[4].value,
            "stock": event.target[5].value,
            "tipo": event.target[6].value,
        }

        await fetch('http://localhost:4000/updateProduct', {
            method:"post",
            body: JSON.stringify(form),
            headers: {
                "content-type":"application/json"
            }
        })

            .then((res) => console.log(res))
            .then((data) => event.target.reset())
            .then(() => {
                setprodUpdated(true)
                setTimeout(()=>setprodUpdated(false),2000)
            })
            .then(() => {
                setTimeout(()=>navigate('/Remeras'),2000)
            })
            .catch((err)=>console.log(err))
    }

    return ( 
        
        <Fragment>
            {prodUpdated === false ? 
            <div className="formContainer">
            <form className="form-updtprod" action="http://localhost:4000/updateProduct" method="post" onSubmit={(event) => updateProd(event)}>
                <div className="h1-updt-prod">
                    <h1>Estas editando: {prod.title}</h1>
                </div>
                <input type="text" readOnly value={prod.title} name="titleOld" className="titleNONE" />
                <div className="title div-updt-prod">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" id="title" name="title" className="input-updateProd" required />
                </div>
                <div className="price div-updt-prod">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" name="price" id="price" className="input-updateProd" required/>
                </div>
                <div className="category div-updt-prod">
                    <label htmlFor="category">Categoria:</label>
                    <select name="category" id="category" className="input-updateProd" required>
                        <option value="Ropa de hombre">Ropa de hombre</option>
                        <option value="Ropa de mujer">Ropa de mujer</option>
                    </select>
                </div>
                <div className="description div-updt-prod">
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description" className="input-updateProd" required />
                </div>
                <div className="stock div-updt-prod">
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" className="input-updateProd" required />
                </div>
                <div className="tipo div-updt-prod">
                    <label htmlFor="tipo">Tipo:</label>
                    <select name="tipo" id="tipo" className="input-updateProd" required>
                        <option value="Remera">Remera</option>
                        <option value="Buzo">Buzo</option>
                    </select>
                </div>
                <div className="updt-prod-submit">
                    <input type="submit" value="EDITAR PRODUCTO" className="updt-prod-submit" />
                </div>
            </form>
        </div>
                : <div className="prEdited">
                    <div>
                       <p>¡PRODUCTO EDITADO CON EXITO!</p> 
                    </div>
                </div>
            }
            
        </Fragment>
     );
}

export default UpdateProduct;