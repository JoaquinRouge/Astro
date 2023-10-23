import image from "../../assets/images/logo-min.png"
import "./header.css"
function Header({cart}) {
    return ( 
        <header>
            <img id="img-header" src={image} alt="logo astro" />
            <div className="header-sections">
                <ul>
                    <li>Remeras</li>
                    <li>Pantalones</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="cart">
                <div className="cart-counter"><p>{cart.length}</p></div>
                <i id="cart-icon" className="fa-solid fa-cart-shopping"></i>
            </div>
        </header>
    );
}

export default Header;