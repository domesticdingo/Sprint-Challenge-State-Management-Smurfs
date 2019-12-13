import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfCard from './SmurfCard';

const Smurf = () => {
    const { smurfs } = useContext(SmurfContext)

    return (
        <div>
            {smurfs.map(smurf => (
                <SmurfCard
                    id={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
            ))}
        </div>
    )
}

export default Smurf;