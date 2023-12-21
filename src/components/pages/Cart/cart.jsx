import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer.jsx"
import Header from "../../Header/header";
import "./cart.css"

function Cart({ cart, removeItemFromCart, }) {

    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        calculateTotal()
    })

    const calculateTotal = () => {
        const total = cart.reduce((acc, product) => {
          return acc + product.price * product.quantity;
        }, 0);

        const roundedTotal = parseFloat(total.toFixed(2))

        setTotalPrice(roundedTotal);
    };
        

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
      };

      const groupedProducts = cart.reduce((acc, product) => {
        if (acc[product._id]) {

            acc[product._id].quantity += 1;
        } else {
            acc[product._id] = { ...product };
        }
        return acc;
    }, {});
    
    const groupedProductArray = Object.values(groupedProducts);
  
    return (
        <Fragment>
            <Header counter={cart} />
            <div className="main-container-cart">
                <div className="section-cart">
                {cart.length === 0 ? (<Link to="/Remeras"><p className="cartEmpty">No has agregado ningun producto al carrito, presiona este recuadro para dirigirte al lugar de compra</p></Link>):""}
                    {groupedProductArray.map((item) => (
                             <div key={item._id} className="product-added">
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
                                <div id="quant" className="item-info">{item.quantity}</div> 
                            </div>
                        <div className="total-price">
                            <div className="cardtitle-p">Total</div>
                                <div className="item-info"><p className="p-price">${item.price * item.quantity}</p></div>
                            </div>
                                <button className="cart-button" onClick={() => handleRemoveItem(item._id)}>Eliminar</button>
                        </div>       
                ))}
                </div>
                {cart.length > 0 ?
                    <div className="end-buy">
                        <div className="end-buy-title">Resumen de compra</div>
                        <hr className="hr-cart" />
                        <div className="end-buy-products">
                            <p className="end-buy-products">Productos ({cart.length})</p>
                            <p className="end-buy-products">$ {totalPrice}</p>
                        </div>
                        <div className="end-buy-total">
                            <p className="end-buy-total">Total</p>
                            <p className="end-buy-total">$ {totalPrice}</p>
                        </div>
                        <div className="button-end-buy">
                            <button className="end-buy-button">Continuar compra</button>
                        </div>
                    </div>
                    : ""}
            </div>
    </Fragment> );
}

export default Cart;