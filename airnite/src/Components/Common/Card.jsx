//Card component
import React from "react";

function Card({property, handleClick}) {

    return (
       
        // <div className="cards" onClick={()=>handleClick((property.id))}>
        //     <img src={property.image} alt={property.title}/>
        //     <h3>{property.title}</h3>
        //     <h2>Kshs  {property.price}</h2>
        //     <a href={`/properties/${property.id}`}><button class="button-33" role="button">View</button></a>
        // </div>


        <article class="card-1-1" style={{width:'300px'}}>
  <img
    class="card__background"
    src={property.image}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="300"
    height="300"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">{property.title}</h2>
      <p class="card__description">
        {property.description}
      </p>
    </div>
    <a href={`/properties/${property.id}`}><button class="button-33" role="button">View</button></a>
  </div>
</article>



        

        // <div className="products-img col-lg-4 mb-4 mt-4 ">
        //       <div className="card h-100 text-center p-4" >
        //         <img src={property.image} className="card-img-top" alt={property.title} height="400px"/>
        //         <div className="card-body">
        //             <h5 className="card-title mb-0">{property.title}</h5>
        //             <p className="card-text lead fw-bold">${property.price}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Card