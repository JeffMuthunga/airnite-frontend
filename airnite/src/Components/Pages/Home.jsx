
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
            <h1>For the most exciting properties in<span style={{fontWeight: 'bold', color:'purple'}}> {text}</span> <Cursor/></h1>
                <div className="intro-btn">
                    <a href="./"><button className="button-53">Get Started</button></a>
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