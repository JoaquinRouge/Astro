import "./card.css"
import { useState,Fragment } from "react"
import ProductView from "../ProductView/productview"

function Card({ add, prod }) {
    
    let [show, setShow] = useState(false)
    const ShowInfoProd = () => {
        setShow(true)
    }

    return (
        <Fragment>
            <div className="card-container">
                <div className="prod-expand">
                <i className="fa-solid fa-up-right-and-down-left-from-center expand" onClick={()=>setShow(true)}></i>
                </div>
            <div className="prod-image">
                <img src={prod.image} alt="imagen de producto" />
                <hr className="hrcard" />
            </div>
            <div className="prod-title">
                <p className="prod-title-p">{prod.title}</p>
            </div>
            <div className="prod-price">
                <p className="pepo">${prod.price}</p>
            </div>
            <div className="button">
                <button className="product-button"
                    onClick={() => {
                        add(prod)
                        console.log(prod)
                     }}
                    ><i className="fa-solid fa-cart-shopping"></i> Añadir al carrito</button>
            </div>
            </div>
                {show === true ? <ProductView setShow={setShow} title={prod.title} image={prod.image} price={prod.price} stock={prod.rating.count} category={prod.category} add={add} prod={prod}  />:''}   
        </Fragment>
            
        )
}

export default Card;
