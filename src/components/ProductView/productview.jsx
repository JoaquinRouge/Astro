import { Fragment } from "react";
import './productview.css'

function ProductView({title,price,image,category,stock,setShow,add,prod}) {
    return ( 
        <Fragment>
            <div className="ProductViewContainer animate__animated animate__fadeInDown">
                <div className="close-logo">
                    <i className="fa-solid fa-xmark close" onClick={()=>{setShow(false)}}></i>
                </div>
                <div className="ProductviewMain">
                    <div className="ProductViewImage">
                        <img src={image} alt="product image" className="PVimage" />
                    </div>
                    <div className="ProductViewInformation">
                        <div className="PVtitle">
                            <p className="PVtitle">{title}</p>
                        </div>
                        <div className="PVprice">
                            <p className="PVprice">$ {price}</p>
                        </div>
                        <div className="PVcategory">
                            <p className="PVcategory">Categoria: {category}</p>
                        </div>
                        <div className="PVstock">
                            <p className="PVstock">Stock: {stock}</p>
                        </div>
                        <div className="PVaddContainer">
                            <button className="PVadd" onClick={() => {
                                add(prod)
                            }}><i className="fa-solid fa-cart-shopping"></i> Añadir al carrito</button>
                        </div>
                    </div>
            </div>
            </div>

        </Fragment>
     );
}

export default ProductView;