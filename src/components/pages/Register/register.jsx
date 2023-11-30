import { Fragment , useState } from "react";
import './register.css'

function Register() {

    const [showPwd,setShowPwd] = useState(false)

    return ( 
        <Fragment>
            <div className="container">
                <form className="form-container">
                <p className="p-register">Registrate</p>
                    <div className="username">
                        <label htmlFor="username" className="label-register"> Nombre de usuario <span className="asterisco">*</span></label>
                        <input type="text" id="username" className="input-register" required />
                    </div>
                    <div className="email">
                        <label htmlFor="email" className="label-register">Direccion de correo electronico <span className="asterisco">*</span></label>
                        <input type="email" id="email" className="input-register" required />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="label-register">Contraseña <span className="asterisco">*</span></label>
                        <input type={showPwd === false ? "password" : "text" } id="password" className="input-register" maxLength="50" required />
                        {showPwd === false ? <i class="fa-solid fa-eye-slash eye" onClick={()=>setShowPwd(!showPwd)}></i> : <i class="fa-solid fa-eye eye" onClick={()=>setShowPwd(!showPwd)}></i>}
                    </div>
                    <div className="register-button">
                        <input type="submit" role="button" className="btn-register" value="Registrarse" />
                    </div>
                </form>
            </div>
        </Fragment>
     );
}

export default Register;