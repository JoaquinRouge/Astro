import "./card.css"
import { useState, Fragment } from "react"
import { Link } from "react-router-dom"

function Card({ prod, infoUsers, setUpdater }) {

    const [showTools,setShowTools] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [productDeleted,setproductDeleted] = useState(false)

    const deleteProd = async(event)=>{
        event.preventDefault()

        const form = {
            "title" : event.target[0].value
        }

        await fetch('http://localhost:4000/deleteProduct', {
            method: "post",
            body: JSON.stringify(form),
            headers: {
                'content-type':'application/json'
            }
        })

            .then((res) => console.log(res))
            .then((data) => event.target.reset())
            .then(() => {
                setproductDeleted(true)
                setTimeout(()=>setproductDeleted(false),2100)
                setTimeout(()=>location.reload(),2000)
            })
            .catch((err)=>console.log(err))
    }

    return (
        <Fragment>
            
            <div className={showTools === true ? 'card-container shadow' : 'card-container'} onMouseOver={() => { setShowTools(true) }} onMouseLeave={() => { setShowTools(false) }}>
                    <div className={deleteProduct === true ? 'prod-image blur' : 'prod-image'}>
                    <Link to={`/product/${prod._id}/${prod.title}`}>
                        <img src={prod.image} alt="imagen de producto" className="imgproducto" />
                    </Link>
                        <hr className="hrcard" />
                    </div>
                    <div className="container-tpb">
                        <div className={deleteProduct === true ? 'prod-price blur' : 'prod-price    '}>
                            <p className="p-price">${prod.price}</p>
                        </div>
                        <div className={deleteProduct === true ? 'prod-title blur' : 'prod-title'}>
                        <p className="prod-title-p">{prod.title}</p>
                        {infoUsers.user === 'admin' && infoUsers.token && showTools === true ? 
                            <div className="admin_container">
                                    <Link to="/UpdateProduct"><i className="fa-solid fa-pencil icon-card" onClick={()=>setUpdater(prod)}></i></Link>
                                    <i className="fa-solid fa-trash icon-card" onClick={()=>setDeleteProduct(true)}></i>
                                </div> 
                    : ""} 
                        </div> 
                </div>    
                {deleteProduct === true ? 
                            <div className="form-container-delete">
                            <form action="http://localhost:4000/deleteProduct" method="post" onSubmit={(event)=>deleteProd(event)}>
                                <div className="input-title">
                                   <input type="text" value={prod.title} className="input-title-send" name="title" readOnly /> 
                            </div>
                            <div className="p-delete">
                                <p>{productDeleted === false ? '¿Estas seguro que deseas eliminar este producto?' : "¡Producto elminado correctamente!"}</p>
                            </div>
                            <div className={productDeleted === false ? 'buttons-delete' : 'buttons-delete-d-none'}>
                                <input type="submit" value='Eliminar' className="button-delete" />
                                <button onClick={()=>setDeleteProduct(false)} className="button-delete">Cancelar</button>
                            </div>
                            </form>
                        </div>
                : ''}
                </div>   
        </Fragment>
            
        )
}

export default Card;
