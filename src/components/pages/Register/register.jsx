import { Fragment , useState } from "react";
import './register.css'
import image from '../../../assets/images/logo-min.png'

function Register() {

    const [showPwd, setShowPwd] = useState(false)
    const [userRegisterOk,setuserRegisterOk] = useState(false)

    const registerUser = async (event) => {
        event.preventDefault()
        const form = {
            "username": event.target[0].value,
            "email": event.target[1].value,
            "password": event.target[2].value
        }

        await fetch('http://localhost:4000/newUser', {
            method : "post",
            body: JSON.stringify(form),
            headers: {
                'Content-type':"application/json"
            }
        })
            .then((res) => console.log(res))
            .then(data => event.target.reset())
            .then(() => {
                setuserRegisterOk(true)
                setTimeout(()=>setuserRegisterOk(false),2000)
            })
            .catch((err)=> console.log(err))
    }

    return ( 
        <Fragment>
            {userRegisterOk === false ?
            <div className="container">
                <form className="form-container" method="post" action="http://localhost:4000/newUser" onSubmit={(event)=>registerUser(event)}>
                    <div className="header-register">
                        <p className="p-register">Registrate</p>
                        <img src={image} alt="logo astro" className="logo-register" />
                    </div>
                    <div className="username">
                        <label htmlFor="username" className="label-register"> Nombre de usuario <span className="asterisco">*</span></label>
                        <input type="text" id="username" className="input-register" name="username" required />
                    </div>
                    <div className="email">
                        <label htmlFor="email" className="label-register">Direccion de correo electronico <span className="asterisco">*</span></label>
                        <input type="email" id="email" className="input-register" name="email" required />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="label-register">Contraseña <span className="asterisco">*</span></label>
                        <input type={showPwd === false ? "password" : "text" } id="password" className="input-register" maxLength="50" name="password" required />
                        {showPwd === false ? <i className="fa-solid fa-eye-slash eye" onClick={()=>setShowPwd(!showPwd)}></i> : <i class="fa-solid fa-eye eye" onClick={()=>setShowPwd(!showPwd)}></i>}
                    </div>
                    <div className="register-button">
                        <input type="submit" role="button" className="btn-register" value="Registrarse" />
                    </div>
                </form>
                </div> :

                <div className="user-created-container">
                    <div className="user-created">
                        <p>¡Tu usuario ha sido creado correctamente!</p>
                    </div>
                </div>}
            
        </Fragment>
     );
}

export default Register;