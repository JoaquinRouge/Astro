import "./card.css"
import { useState,Fragment } from "react"
import ProductView from "../pages/Product-View/productview"
import { Link } from "react-router-dom"

function Card({ add, prod }) {
    
    let [show, setShow] = useState(false)
    const ShowInfoProd = () => {
        setShow(true)
    }

    return (
        <Fragment>
            <Link to={`/product/${prod.id}`}>
             <div className="card-container" onClick={() => setShow(true)}>
            <div className="prod-image">
                <img src={prod.image} alt="imagen de producto" />
                <hr className="hrcard" />
                </div>
                <div className="container-tpb">
            <div className="prod-price">
                <p className="p-price">${prod.price}</p>
                    </div> 
             <div className="prod-title">
                <p className="prod-title-p">{prod.title}</p>
            </div> 
                </div>    
            </div>
            </Link>
       
        </Fragment>
            
        )
}

export default Card;
