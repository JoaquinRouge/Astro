import { Fragment, useState } from "react";
import Header from "../../Header/header";
import Card from "../../Card/card";
import './welcome.css'

function Welcome({data,cart,addToCartFc}) {
    
    return ( 
        <Fragment>       
            <Header counter={cart}/>
            <section className="cards">
                {data.map((prod) => {
                    return <Card add={addToCartFc} prod={prod} key={prod.id}/>
                })}
            </section>
        </Fragment>
     );
}

export default Welcome;