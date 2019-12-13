import React, { useState } from "react";
import axios from 'axios';
import "./App.css";

// Components
import Smurf from './Smurf';
import AddSmurf from './AddSmurf'

// Contexts
import { SmurfContext } from '../contexts/SmurfContext';


const App = () => {
  const [smurfs, setSmurfs] = useState([])

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      setSmurfs(res.data)
      console.log("Smurfs: " + smurfs)
    })
    .catch(err => {
      console.log(err)
    }, [])

  return (
    <SmurfContext.Provider value={{ smurfs }}>
      <div className="App">
        <h1>The Smurf Village</h1>
        <p>Add new smurf:</p>
        <AddSmurf />
        <Smurf />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
