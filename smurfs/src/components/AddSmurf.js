import React, { useState } from 'react';
import axios from 'axios';

const AddSmurf = () => {
    const [smurf, setSmurf] = useState({ name: "", age: null, height: ""})

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        axios
            .post(`http://localhost:3333/smurfs`, {...smurf})
            .then(() => {
                setSmurf({ name: "", age: null, height: ""})
            })
            .catch(err => {
                console.log("Post error: " + err)
            })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChanges} value={smurf.name} placeholder="Name" />
                <input type="number" name="age" onChange={handleChanges} value={smurf.age} placeholder="Age" />
                <input type="text" name="height" onChange={handleChanges} value={smurf.height} placeholder="Height" />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default AddSmurf;