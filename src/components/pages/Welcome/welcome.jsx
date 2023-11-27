import { Fragment, useState,useEffect } from "react";
import Header from "../../Header/header";
import Card from "../../Card/card";
import './welcome.css'

function Welcome({data,cart,addToCart}) {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data.length === 0) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [data]);

    return ( 
        <Fragment>
            <Header counter={cart} />
            {loading ? (
                <div className="Loading">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>

            ) : (
                <section className="cards">
                    {data.map((prod) => (
                        <Card add={addToCart} prod={prod} key={prod.id} />
                    ))}
                </section>
            )}
        </Fragment>
     );
}

export default Welcome;