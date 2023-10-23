import { Link } from "react-router-dom";
import './login.css'
import image from '../../../assets/images/logo.png'

function Login() {
    return ( 
        <section className="login">
            <div className="login-container">
                <img id="img-login" src={image} alt="logo astro" />
                <div className="inputs">
                    <input placeholder="Nombre de usuario" className="input" type="text" />
                </div>
                <div className="inputs">
                    <input placeholder="Contraseña" className="input" type="password" />
                </div>    
                <Link to="/Welcome"><input className="btn-login" role="button" type="submit" value="Iniciar Sesión" /></Link>
                <p>Registrarme</p>
            </div>
       </section>
     );
}

export default Login;