import React from 'react'
import './Popular.css'
import Card from './Card'

function Popular(props){
    console.log(props)
    return(
        <section>
            <h1>Popular {props.title}</h1>
            <div>
                {props.content.map(content=><Card key={content}/>)}
            </div>
        </section>
    )
}

export default Popular