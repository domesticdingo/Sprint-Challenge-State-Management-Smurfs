import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
padding: 20px;
border: 1px solid black;
`

const SmurfCard = props => {
    return (
        <Main>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </Main>
    )
}

export default SmurfCard;