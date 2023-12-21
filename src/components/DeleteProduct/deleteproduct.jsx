import { Fragment } from "react";
import './deleteproduct.css'

function DeleteProduct(title,cancel) {
    return ( 
        <Fragment>
            <div className="form-container">
                <form action="http://localhost:4000/deleteProduct" method="delete">
                    <div className="input-title">
                       <input type="text" value={title} className="input-title-send" /> 
                    </div>
                    <input type="submit" value='Eliminar' />
                    <button>Cancelar</button>
                </form>
            </div>
        </Fragment>
     );
}

export default DeleteProduct;