import { Fragment, useState, useEffect } from "react";
import Header from "../../Header/header";
import Card from "../../Card/card";
import Footer from "../../Footer/footer";
import Loading from '../../Loading/loading.jsx'

function Hombre({ data, cart, addToCart, infoUsers }) {
    
    const [loading, setLoading] = useState(true);
    const filteredData = data.filter(prod => prod.category === 'Ropa de hombre');

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
        {loading ? (
            <div className="Loading">
                <Loading/>
            </div>

        ) : (
            <section className="cards">
                {filteredData.map((prod) => (
                    <Card add={addToCart} prod={prod} key={prod._id} infoUsers={infoUsers} />
                ))}
            </section>
            )}
            {loading ? '' : <Footer/>}
    </Fragment>
     );
}

export default Hombre;