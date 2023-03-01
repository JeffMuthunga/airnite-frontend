import React from "react";
import Card from "./Card";
import { useEffect, useState } from 'react';

// property component that is used to render an array of cards
function PropertyCollection({handleClick}){
    const [propertyData, setPropertyData] = useState([])
  
    useEffect(()=>{
      fetch(`http://localhost:9292/properties`)
      .then(r=>r.json())
      .then(data => setPropertyData(data))
    }, []) 
    return (
        <div className="cards-container">
            <div className="box-container">
                <div className="box"></div>
                <div className="box overlay">
                    <h2>Featured</h2> <hr></hr>
                    <h5 align="right">Listings</h5>
                    <a href="/properties"><button className="button-92" role="button">View All</button></a>
                </div>
            </div>
            {propertyData.map((property)=> <Card handleClick={handleClick} key={property.id} property={property}/>)}
        </div>
    )
}

export default PropertyCollection
