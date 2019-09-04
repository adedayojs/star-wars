import React from 'react'
import './Popular.css'

function Popular(props){
    return(
        <section>
            <h1>Popular {props.title}</h1>
            <div>
                {props.content}
            </div>
        </section>
    )
}

export default Popular