import { Fragment } from "react";
import './productview.css'
import Header from "../../Header/header";
import { useParams } from "react-router-dom";

function ProductView({ data , cart , add}) {
    
    const { productId } = useParams()
    const prod = data.find(prod => prod.id === parseInt(productId));

    if (!prod) {
        return<div className="Loading">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
    }

    return ( 
        <Fragment>
            <Header counter={cart}/>
            <div className="ProductViewContainer">
                <div className="Product-view-top">
                    <div className="PV-image">
                        <img src={prod.image} alt={prod.title} className="image-pv" />
                    </div>
                    <div className="PV-texts">
                        <div className="PV-title">
                            <p className="title-pv p">{prod.title}</p>
                        </div>
                        <div className="PV-price">
                            <p className="price-pv p">${prod.price}</p>
                        </div>
                        <div className="PV-category">
                            <p className="category-pv p">Categoria: {prod.category}</p>
                        </div>
                        <div className="PV-description">
                            <p className="description-pv p">Descripción del producto: {prod.description}</p>
                        </div>
                        <div className="PV-Stock">
                            <p className="stock-pv p">Stock: {prod.rating.count}</p>
                        </div>
                        <button onClick={() => {
                            add(prod)
                        }} className="pv-button">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}

export default ProductView;