import React from "react";
import Card from "../Common/Card";

function DisplayProperties({propertyData, handleClick}) {

    return (
    <div className="cards-container">
        
        {propertyData.map((property)=> <Card handleClick={handleClick} key={property.id} property={property}/>)}
    </div>)

}

export default DisplayProperties