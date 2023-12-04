import Card from "../../Card/card";
import Header from "../../Header/header";
import './buzos.css'
import { Fragment ,useState, useEffect} from "react";

function Buzos({ data, cart, addToCart }) {
    
    const [loading, setLoading] = useState(true);
    const filteredData = data.filter(prod => prod.tipo === 'Buzo');

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
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>

        ) : (
            <section className="cards">
                {filteredData.map((prod) => (
                    <Card add={addToCart} prod={prod} key={prod._id} />
                ))}
            </section>
        )}
    </Fragment>
     );
}

export default Buzos;