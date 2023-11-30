import { Fragment } from "react";

function Form() {
    return (
        <Fragment>
            <form action="http://localhost:4000/cargarPlato" method="post">
                <label htmlFor="nombrePlato">Nombre</label>
                    <input type="text" id="nombrePlato" name="nombrePlato" />
                <label htmlFor="precio">Precio</label>
                <input type="text" id="precio" name="precio"/>  
                <label htmlFor="stock">Stock</label>
                    <input type="text" id="stock" name="stock"/>
                <label htmlFor="categoria">Categoria</label>
                    <input type="text" id="categoria" name="categoria" />
                <label htmlFor="categoria">Descuento</label>
                     <input type="text" id="categoria" name="descuento"/>

                <input type="submit" />
            </form>
        </Fragment>
     );
}

export default Form;