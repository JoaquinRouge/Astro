import { Fragment, useState, useEffect } from "react";
import Header from "../../Header/header";
import Card from "../../Card/card";
import Footer from "../../Footer/footer";
import Loading from "../../Loading/loading";
import './remeras.css'
import { Link, useNavigate } from "react-router-dom";

function Remeras({data,cart,infoUsers,setUpdater}) {

    const [loading, setLoading] = useState(true);
    const filteredData = data.filter(prod => prod.tipo === 'Remera');
    const navigate = useNavigate()

    useEffect(() => {
        if (filteredData.length === 0) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [filteredData]);

    console.log(infoUsers)

    return ( 
        <Fragment>
            <Header counter={cart} />
            {infoUsers.user === 'admin' && infoUsers.token ? 
        <Link to="/AddProduct"><div className="addProduct">
                <i className="fa-solid fa-plus plus"></i>
                <p>Añadir producto</p>
            </div></Link>
        : ""}  
            {loading ? (
                <div className="Loading">
                    <Loading/>
                </div>
            ) : (
                <section className="cards">
                    {filteredData.map((prod) => (
                        <Card prod={prod} key={prod._id} infoUsers={infoUsers} setUpdater={setUpdater} />
                    ))}
                </section>
            )}
            {loading ? "" : <Footer/>}
        </Fragment>
     );
}

export default Remeras;