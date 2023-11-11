import "./card.css"

function Card({ add, prod}) {
    return (
        <div className="card-container">
            <div className="prod-image">
                <img src={prod.image} alt="imagen de producto" />
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
                    ><i class="fa-solid fa-cart-shopping"></i> Añadir al carrito</button>
            </div>
        </div>
        )
}

export default Card;
