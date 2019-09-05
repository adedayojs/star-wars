import React from 'react'
import './Card.css'

function Card(props){
    console.log(props)
    const randomImage = Math.floor(Math.random()*props.img.length)
    return(
        <div className="card-div">
            <img className="planet-card-image" src={props.img[randomImage] } />
        </div>
    )
}

export default Card