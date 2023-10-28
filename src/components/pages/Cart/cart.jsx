import { Fragment } from "react";
import "./cart.css"
import Header from "../../Header/header";

function Cart({ cart, removeItemFromCart, }) {
    
    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
      };

    return (
        <Fragment>
            <Header counter={cart}/>
            <ul className="section-cart">
                {cart.map((item) => (
                    
                        <div key={item.id} className="product-added">
                            <div className="img-prod">
                                <img className="cart-prod-img" src={item.image} alt="product" />
                            </div>
                            <div className="title-prod">
                                <p className="titlep">{item.title}</p>
                            </div>
                            <div className="price-prod">    
                                <p> $ {item.price}</p>
                            </div>
                            <button className="cart-button" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>         
                ))}
                </ul>
    </Fragment> );
}

export default Cart;