import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
const Jumbo = styled.section`
height:50vh;
background: red url('/assets/hero-banner.jpg')
`

function Jumbotron() {
    return (
        <Jumbo>
            <Logo />
        </Jumbo>)
}


export default Jumbotron
