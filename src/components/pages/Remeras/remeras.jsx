import { Fragment, useState, useEffect } from "react";
import Header from "../../Header/header";
import Card from "../../Card/card";
import Footer from "../../Footer/footer";
import Loading from "../../Loading/loading";
import './remeras.css'
import { Link } from "react-router-dom";

function Remeras({data,cart}) {

    const [loading, setLoading] = useState(true);
    const filteredData = data.filter(prod => prod.tipo === 'Remera');

    useEffect(() => {
        if (filteredData.length === 0) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [filteredData]);

    return ( 
        <Fragment>
            <Header counter={cart} />
            <Link to="/AddProduct"><div className="addProduct">
                <i className="fa-solid fa-plus plus"></i>
                <p>Añadir producto</p>
            </div></Link>
            {loading ? (
                <div className="Loading">
                    <Loading/>
                </div>
            ) : (
                <section className="cards">
                    {filteredData.map((prod) => (
                        <Card prod={prod} key={prod._id} />
                    ))}
                </section>
            )}
            {loading ? "" : <Footer/>}
        </Fragment>
     );
}

export default Remeras;