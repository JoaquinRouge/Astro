import { Link } from "react-router-dom";
import './login.css'
import image from '../../../assets/images/logo.png'
import { useState } from "react";

function Login() {

    const [showPwd,setShowPwd] = useState(false)

    return ( 
        <section className="login">
            <div className="login-container">
                <img id="img-login" src={image} alt="logo astro" />
                <div className="inputs">
                    <input placeholder="Nombre de usuario" className="input" type="text" />
                </div>
                <div className="inputs">
                    <input placeholder="Contraseña" className="input" type={showPwd === false ? "password" : "text"} />
                    {showPwd === false ? <i class="fa-solid fa-eye-slash eye-login" onClick={()=>setShowPwd(!showPwd)}></i> : <i className="fa-solid fa-eye eye-login" onClick={()=>setShowPwd(!showPwd)}></i> }
                </div>    
                <Link to="/Welcome"><input className="btn-login" role="button" type="submit" value="Iniciar Sesión" /></Link>
                <div className="register"><p className="p-account">¿No tenés una cuenta? <Link to="/Register" className="linkreg"><span className="span-register">Registrate</span></Link></p></div>
            </div>
       </section>
     );
}

export default Login;