
import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import PropertyCollection from "../Common/PropertyCollection"
import Card from "../Common/Card";
import SearchBar from "../Common/SearchBar";




function Home ({searchData, handleInput, handleClick}) {
    //TypeWriter Effect
    const [text] = useTypewriter({
        words: ['Nairobi', 'Nakuru', 'Mombasa'],
        loop: {},
    })

    return (
        <div>
        <div className="container">
            <div className="hero-div">
            <h1>For the most exciting properties in<span style={{fontWeight: 'bold', color:'rgb(212, 209, 5)'}}> {text}</span> <Cursor/></h1>
                <div className="intro-btn">
                    <a href="./"><button className="button-53">Get Started</button></a>
                </div>
            </div>
        </div>

        //
        <div className="products">
      <h1>Our Products</h1>
      <div className="producttittle">
        <h2>Roadmap.</h2>
        <p className="lead">This is how our Application works</p>
      </div>
      <div className="product">
        <div className="card">
        <div className="card1"></div>
          <h3>Find Home</h3>
          <p>
          Our application provides a user-friendly interface that allows you to easily search for available homes in your preferred location. 
          </p>
        </div>
        <div className="card">
        <div className="card2"></div>
          <h3>Make payments</h3>
          <p>
           Our platform ensures that your payment information is secure, so you can have peace of mind knowing that your sensitive information is safe.
          </p>
        </div>
        <div className="card">
            <div className="card3"></div>
    
          <h3>Secure</h3>
          <p>
          Our platform is built with security in mind. We use the latest security technologies and protocols to ensure that your personal and payment information is always safe and secure. 
          </p>
        </div>
      </div>
    </div>

    

        <div className="bottom-container">
            <SearchBar searchData={searchData} handleInput={handleInput}/>
            <PropertyCollection handleClick={handleClick}/>
        </div>
        </div>
    )
}

export default Home