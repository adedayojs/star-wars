import React from 'react'
import './PopularPlanets.css'
import Card from './Card'

function PopularPlanets(props){
    return(
        <section>
            <h1 className="popular-section-header">Popular {props.title}</h1>
            <div className="card-container">
                {props.content.map(content=><Card key={content} {...{img:props.images}}/>)}
            </div>
        </section>
    )
}


export default PopularPlanets