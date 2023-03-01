import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faBed, faHome} from "@fortawesome/free-solid-svg-icons"
import Swal from "sweetalert2";

function CardDetails(){
    const id = useParams().id
    const [card, setCard] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r=>r.json())
        .then((data) => setCard(data))
    },[])
    //PATCH method
    function handleSubmit(e){
        e.preventDefault()
        let bid = parseInt(e.target.bid.value)
        
        fetch(`http://localhost:9292/properties/${id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({price : bid})
        })
        .then(r=>r.json())
        .then((data) => setCard(data))

        true ? Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    //DELETE Method
    function handleClick(id){
        fetch(`http://localhost:9292/properties/${id}`, {
            method: "DELETE"})
            .then(r=>r.json())
            .then((data)=> setCard(data))

        true ? Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your data has been deleted',
            showConfirmButton: false,
            footer: '<a href="/properties"> Go back</a>'
          }) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    return (
        //displaying the Card details
        <div className="row">
            <div className="column">
                <div className="card-details-container">
                    <div className="card-detail">
                        <img src={card.image} alt={card.title}/>
                        <h3><FontAwesomeIcon className="fa-map" icon={faMapMarkerAlt} beat /><span>{card.city}</span></h3>
                        <h2 style={{textAlign: "center"}}>{card.title}</h2>
                        <hr></hr>
                        <h3>Current Bid:<br></br> Kshs &nbsp;{card.price}</h3>
                        <hr></hr>
                        <h4><FontAwesomeIcon style={{color: "purple"}} icon={faBed} beat/>&nbsp;&nbsp;{card.bedrooms} bed</h4>
                        <h4><FontAwesomeIcon style={{color: "purple"}} icon={faHome} beat/>&nbsp;&nbsp;{card.sqrfeet} sq.ft</h4>
                        <hr></hr>
                        <h4>Description</h4>
                        <p style={{color: "white"}}>{card.description}</p>
                        <br></br>
                    
                    </div>
                </div>
            </div>
            <div className="form-div">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Change Bid</label>
                <input type="number" id="fname" name="bid" placeholder="Change Bid"/>          
                <input type="submit"  value="Change Bid"/>
            </form>
            <button className="button" onClick={()=>handleClick(id)} >Delete</button>
            </div>
        </div>
    )
}

export default CardDetails