import { Link, useNavigate} from "react-router-dom";
import './login.css'
import image from '../../../assets/images/logo-bg-grey-removed.png'
import { useState } from "react";

function Login({userData}) {

    const navigate  = useNavigate()

    const [userFound,setUserFound] = useState(true)

    const LoginUser = async (event) => {
        event.preventDefault()
        const form = {
            "username": event.target[0].value,
            "password": event.target[1].value,
        }
        try {
            const response = await fetch("http://localhost:4000/login", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const dataUsers = await response.json();
            userData(dataUsers)
            if (dataUsers.user && dataUsers.token) {
                navigate("/Remeras"); 
            }

            else if (dataUsers.user === "not found" || dataUsers.contraseña === 'incorrecta') {
                setUserFound(false)
                setTimeout(()=>{setUserFound(true)},2500)
            }

            if (!dataUsers) {
                navigate("/"); 
            }
            console.log(dataUsers);
            
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    }

    const [showPwd, setShowPwd] = useState(false)
    
    return ( 
        <section className="login">
            <div className="login-container">
                <div className="login-image">
                    <img id="img-login" src={image} alt="logo astro" />
                </div>
                <form className="container-form" method="get" action="http://localhost:4000/login" onSubmit={(event)=>LoginUser(event)}>
                    <div className="inputs">
                    {userFound === false ? <p className="unf">Usuario o contraseña incorrectos </p> : ""} 
                    <input placeholder="Nombre de usuario" className="input" type="text" name="username" required />
                </div>
                <div className="inputs">
                    <input placeholder="Contraseña" className="input" type={showPwd === false ? "password" : "text"} name="password" required />
                    {showPwd === false ? <i className="fa-solid fa-eye-slash eye-login" onClick={()=>setShowPwd(!showPwd)}></i> : <i className="fa-solid fa-eye eye-login" onClick={()=>setShowPwd(!showPwd)}></i> }
                </div>    
                    <input className="btn-login" role="button" type="submit" value="Iniciar Sesión" />
                </form>
                <div className="register"><p className="p-account">¿No tenés una cuenta? <Link to="/Register" className="linkreg"><span className="span-register">Registrate</span></Link></p></div>
            </div>
       </section>
     );
}

export default Login;