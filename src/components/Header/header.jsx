import image from "../../assets/images/logo-bg-removed.png"
import { Link } from "react-router-dom";
import "./header.css"

function Header({ counter }) {
    
    return ( 
        <header>
            <img id="img-header" src={image} alt="logo astro" />
            <div className="header-sections">
                <nav>
                    <ul className="link-list">
                    <Link to="/Remeras"><li>Remeras</li></Link>
                    <Link to="/Buzos"><li>Buzos</li></Link>
                    <Link to="/Hombre"><li>Hombre</li></Link>
                    <Link to="/Mujer"><li>Mujer</li></Link>
                    </ul>   
                </nav>
            </div>
            <div className="cart">
                <div className="cart-counter"><p className="cart-counter-p">{counter.length}</p></div>
                 <Link to="/Cart"><i id="cart-icon" className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </header>
    );
}

export default Header;