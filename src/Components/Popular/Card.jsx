import React from 'react'
import './Card.css'

function Card(props){
    console.log(props)
    const randomImage = Math.floor(Math.random()*props.img.length)
    return(
        <div className="card-div">
            <img className="card-image" src={props.img[randomImage] } />
            <h3>{props.name}</h3>
            <p>sample test</p>
            <span>Read More</span>
        </div>
    )
}

export default Card