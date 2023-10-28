import "./card.css"

function Card({ add, prod}) {
    return (
        <div className="card-container">
            <img src={prod.image} alt="product image" className="prod-image" />
            <div className="product-title">
                <p>{prod.title}</p>
            </div>
            <div className="product-price">
            <p>$ {prod.price}</p>
            </div>
            <div className="button">
                <button className="product-button"
                    onClick={() => {
                        add(prod)
                        console.log(prod)
                     }}
                    >Añadir al carrito</button>
            </div>
        </div>
        )
}

export default Card;
