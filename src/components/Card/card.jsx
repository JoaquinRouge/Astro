import "./card.css"
import { useState, Fragment } from "react"
import { Link } from "react-router-dom"

function Card({ prod }) {

    const [showTools,setShowTools] = useState(false)

    return (
        <Fragment>
            
                <div className="card-container" onMouseOver={()=>{setShowTools(true)}} onMouseLeave={()=>{setShowTools(false)}}>
                    <div className="prod-image">
                    <Link to={`/product/${prod._id}/${prod.title}`}>
                        <img src={prod.image} alt="imagen de producto" className="imgproducto" />
                    </Link>
                        <hr className="hrcard" />
                    </div>
                    <div className="container-tpb">
                        <div className="prod-price">
                            <p className="p-price">${prod.price}</p>
                        </div>
                        <div className="prod-title">
                        <p className="prod-title-p">{prod.title}</p>
                        {showTools === true ?
                            <div className="admin_container">
                                    <i className="fa-solid fa-pencil"></i>
                                    <i className="fa-solid fa-trash"></i>
                                </div> : ""}
                        </div> 
                    </div>    
                </div>   
        </Fragment>
            
        )
}

export default Card;
