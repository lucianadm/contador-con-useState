
import React, {useState} from 'react';

const Cuenta = () => {

    const [delta,setDelta]=useState(0);

    const inDeltaMas = (e) =>{
        setDelta(delta+1);
        console.log(delta);

    }

    const inDeltaMenos = (e) =>{
        setDelta(delta-1);
        console.log(delta);

    }

  return (
    <div>
        <h1>Contador</h1>

        <button onClick={inDeltaMas}>+</button>
        <button onClick={inDeltaMenos}>-</button>
        <h3>{delta}</h3>

    </div>
  )
}

export default Cuenta