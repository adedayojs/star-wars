import React from 'react'
import './Card.css'

function Card(props){
    return(
        <div>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <p>sample test</p>
            <span>Read More</span>
        </div>
    )
}

export default Card