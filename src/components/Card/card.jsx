import "./card.css"

function Card({ add, prod }) {
    return (
        <div>
            <img src={prod.image} alt="asdasd" />
            <p>{prod.titulo}</p>
            <button onClick={() => { add(prod) }}>Presioname</button>
        </div>
        )
}

export default Card;