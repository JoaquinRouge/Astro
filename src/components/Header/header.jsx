import image from "../../assets/images/logo-min.png"
import { Link } from "react-router-dom";
import "./header.css"

function Header({counter}) {
    return ( 
        <header>
            <img id="img-header" src={image} alt="logo astro" />
            <div className="header-sections">
                <ul>
                    <Link to="/Welcome"><li>Remeras</li></Link>
                    <li>Pantalones</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="cart">
                <div className="cart-counter"><p className="cart-counter-p">{counter.length}</p></div>
                 <Link to="/Cart"><i id="cart-icon" className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </header>
    );
}

export default Header;