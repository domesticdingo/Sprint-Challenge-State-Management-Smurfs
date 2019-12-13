import axios from 'axios'
import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
padding: 20px;
border: 1px solid black;
`

const SmurfCard = props => {
    const { id, name, age, height } = props;

    const deleteSmurf = ({id}) => {
        
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then( res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Main>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={()=>{deleteSmurf({id})}}>Delete smurf</button>
        </Main>
    )
}

export default SmurfCard;