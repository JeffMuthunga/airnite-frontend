import React, {useState} from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

function SearchBar({searchData, handleInput}){

// SearchBar component that is used to search through the data
const [inputData, setInputData] = useState({
    inputValue: ""
    })

    function handleChange(e){
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        let search = inputData.inputValue.toLowerCase()
        handleInput(search)
        
    }

    return (
        <div>
            <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
            <FontAwesomeIcon className="fa-map" icon={faMapMarkerAlt} beat />
                <input onChange={handleChange} type="text" name="inputValue" placeholder=" What are you Looking for?"/>
                <button type="submit" >Search</button>
            </form>
            </div>
        <div className="cards-container">
            {searchData.map((property)=><Card key={property.id} property={property}/>)}
        </div>
        </div>
    )

}

export default SearchBar