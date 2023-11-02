import { Fragment } from "react";
import "./cart.css"
import Header from "../../Header/header";

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
                {cart.length === 0 ? (<p className="cartEmpty">No has agregado ningun producto al carrito</p>):""}
                {groupedProductArray.map((item) => (
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
                             <div className="quantity-prod">
                                 Cantidad: {item.quantity}
                            </div>
                            <button className="cart-button" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>         
                ))}
                </ul>
    </Fragment> );
}

export default Cart;