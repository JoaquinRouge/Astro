import { Fragment } from "react";
import './footer.css'
import image from '../../assets/images/logo-bg-removed.png'

function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="footer-content">
                    <img src={image} alt="logo astro" className="img-footer" />
                    <p>Copyright © todos los derechos reservados.</p>
                    <div className="location">
                        <i className="fa-solid fa-location-dot location-icon"></i>
                        <p className="location-p">Av. Raúl Scalibrini Ortiz & Av. Santa Fe</p>
                    </div>
                </div>
               
            </footer>
        </Fragment>
    );
}

export default Footer;