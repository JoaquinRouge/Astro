import { Fragment } from "react";
import "./cart.css"
import Header from "../../Header/header";
import { Link } from "react-router-dom";

function Cart({ cart, removeItemFromCart, }) {
    
    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
      };

      const groupedProducts = cart.reduce((acc, product) => {
        if (acc[product.id]) {

            acc[product.id].quantity += 1;
        } else {
            acc[product.id] = { ...product };
        }
        return acc;
    }, {});
    
    const groupedProductArray = Object.values(groupedProducts);
    
    return (
        <Fragment>
            <Header counter={cart}/>
            <ul className="section-cart">
                {cart.length === 0 ? (<Link to="/Welcome"><p className="cartEmpty">No has agregado ningun producto al carrito, presiona este botón para dirigirte al lugar de compra</p></Link>):""}
                {groupedProductArray.map((item) => (
                        <div key={item.id} className="product-added">
                            <div className="img-prod">
                                <img className="cart-prod-img" src={item.image} alt="product" />
                            </div>
                        <div className="title-prod">
                            <div className="cardtitle-p">Titulo</div>
                                <div className="item-info"><p className="titlep">{item.title}</p></div>
                            </div>
                        <div className="price-prod">  
                            <div className="cardtitle-p">Precio</div>
                               <div className="item-info"><p className="p-price">${item.price}</p></div>
                            </div>
                        <div className="quantity-prod">
                            <div className="cardtitle-p">Cantidad</div>
                                 <div className="item-info">{item.quantity}</div> 
                            </div>
                        <div className="total-price">
                            <div className="cardtitle-p">Total</div>
                                <div className="item-info"><p className="p-price">${item.price * item.quantity}</p></div>
                            </div>
                                <button className="cart-button" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                             </div>         
                ))}
                </ul>
    </Fragment> );
}

export default Cart;