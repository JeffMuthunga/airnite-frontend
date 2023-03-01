//Card component
import React from "react";

function Card({property, handleClick}) {

    return (
        
        <div className="cards" onClick={()=>handleClick((property.id))}>
            <img src={property.image} alt={property.title}/>
            <h3>{property.title}</h3>
            <h2>Kshs  {property.price}</h2>
            <a href={`/properties/${property.id}`}><button class="button-33" role="button">View</button></a>
        </div>
    )
}

export default Card