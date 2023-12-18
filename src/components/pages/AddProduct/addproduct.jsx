import { Fragment } from "react";
import './addproduct.css'
import image from '../../../assets/images/logo-bg-white-removed.png'

function AddProduct() {

    const product = async(event) => {
        event.preventDefault()

        const formData = new FormData();

        formData.append("title", event.target[0].value);
        formData.append("price", event.target[1].value);
        formData.append("category", event.target[2].value);
        formData.append("description", event.target[3].value);
        formData.append("stock", event.target[4].value);
        formData.append("tipo", event.target[5].value);
        formData.append("file", event.target[6].files[0]);

        await fetch('http://localhost:4000/uploadProduct', {
            method: "post",
            body: formData,
            headers: {
                
            }
        })

            .then((res => console.log(res)))
            .then((data) => event.target.reset())
            .catch((err)=>console.log(err))
    }
    return ( 
        <Fragment>
            <div className="addProduct-container">
                <div className="form">
                    <form action="http://localhost:4000/uploadProduct" method="post" onSubmit={(event) => product(event)}>
                        <div className="image">
                            <img src={image} alt="logo astro" className="img-astro-add-prod" />
                        </div>
                        <div className="title labels">
                            <label htmlFor="title">Titulo del producto:</label>
                            <input type="text" id="title" name="title" className="input-addprod" required />
                        </div>
                        <div className="price labels">
                            <label htmlFor="price">Precio del producto:</label>
                            <input type="number" id="price" name="price" className="input-addprod" required/>
                        </div>
                        <div className="category labels">
                            <label htmlFor="category">Categoria:</label>
                            <select name="category" id="category" className="input-addprod" required>
                                <option value="Ropa de hombre">Ropa de hombre</option>
                                <option value="Ropa de mujer">Ropa de mujer</option>
                            </select>
                        </div>
                        <div className="description labels">
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" name="description" className="input-addprod" required/>
                        </div>
                        <div className="stock labels">
                            <label htmlFor="stock">Stock:</label>
                            <input type="number" id="stock" name="stock" className="input-addprod" required/>
                        </div>
                        <div className="tipo labels">
                            <label htmlFor="tipo">Tipo:</label>
                            <select name="tipo" id="tipo" className="input-addprod" required>
                                <option value="Remera">Remera</option>
                                <option value="Buzo">Buzo</option>
                            </select>
                        </div>
                        <div className="file labels">
                            <input type="file" name="file" className="file" required />
                        </div>
                        <input type="submit" className="addprod-button" value="Agregar Producto" />
                    </form>
                </div>
            </div>
        </Fragment>
     );
}

export default AddProduct;