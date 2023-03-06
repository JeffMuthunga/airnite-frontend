import React, {useState, useEffect} from "react";
import  {useParams, useHistory} from 'react-router-dom'
import Swal from "sweetalert2";
import ReviewCard from "../Common/ReviewCard";



const CardDetails1 = ({ handleClick,handleSubmit}) => {
    const id = useParams().id
    const [data, setData] = useState([])
    const [userId, setUserId] = useState()

   
    useEffect(()=>{

        fetch(`http://localhost:9292/properties/${id}`)
        .then(r=> r.json())
        .then((data) => setData(data))

    },[])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.bid.value)
        let bid = parseInt(e.target.bid.value)

        fetch(`http://localhost:9292/properties/${id}`, {
            method: "PATCH",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({price: bid})
        })
        .then(r=>r.json())
        .then(data => setData(data))

        true ? Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bid Updated',
            showConfirmButton: false,
            timer: 1500
        }) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    function handleClick() {

        fetch(`http://localhost:9292/properties/${id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then((data)=> setData(data))

      true ? Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Property Deleted',
        showConfirmButton: false,
        footer: '<a href="/properties"> Go back</a>'
        
      }) :  Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })

           
    }

    function handleSubmitReview(e) {
      e.preventDefault()
      
      
      fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json" 
      },
        body: JSON.stringify({
            name: e.target.name.value
          })
      })
      .then(r => r.json())
      .then((data) => {
          setUserId(data.id)
          fetch('http://localhost:9292/reviews', {
              method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json" 
            },
            body: JSON.stringify({
              star_rating: e.target.star_rating.value,
              comment: e.target.comment.value,
              property_id: id,
              user_id: data.id
            })
          }).then(r => r.json())
            .then((data) => {
              // do something with the response data
              console.log(data)
            }).catch((error) => {
              console.log(error)
            })
        }).catch((error) => {
          console.log(error)
        })
        true ? Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your review has been  added',
          showConfirmButton: false,
          
        }) :  Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Review not Submitted!',
                  footer: '<a href="">Why do I have this issue?</a>'
                })
}


  return (
    <div>
    <div className="card-details-container1">
         <div className="card-around">
      <div className="card-details-header">
        <img
          className="card-details-image"
          src={data.image}
          alt={data.title}
        />
        <div className="card-details-title">{data.title}</div>
        <div className="card-details-location">{data.city}</div>
        <div className="card-details-price">${data.price}</div>
        <div className="card-details-bedrooms">{data.bedrooms} bedrooms</div>
        <div className="card-details-sqft">{data.sqrfeet} sq. ft.</div>
        <div className="card-details-description">{data.description}</div>
        <div className="form-div">
        <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Change Bid</label>
        <input type="number" id="fname" name="bid" placeholder="Change Bid"/>          
        <input type="submit"  value="Change Bid"/>
    </form>
    <button className="button" onClick={()=>handleClick(id)} >Delete</button>

    <form onSubmit={handleSubmitReview}>
        <label htmlFor="fname">Write a Review</label>
        <input type="text"  name="name" placeholder="User name"/> 
        <input type="text"  name="comment" placeholder="Leave a Review..."/>     
        <input type="number"  name="star_rating" placeholder="Stars"/>       
        <input type="submit"  value="Post Review"/>
    </form>
    </div>
      </div>
      <h2>Reviews</h2>
      <div className="l-card-around">
      <div className="card-details-reviews">
        { data.reviews && data.reviews.map((review)=> <ReviewCard key={review.id} data ={review}/>)}
      </div>
      
      </div>
      
      
      </div>
      
      </div>
    </div>
    
  );
};

export default CardDetails1;
