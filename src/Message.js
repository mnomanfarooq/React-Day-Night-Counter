import React, {useState} from 'react'

export const Message = () => {
    let [isMorning, setMorning] = useState(false);

    return (
        <div className={`box ${isMorning ? 'daylight' : ''}`}>
         <h3>Good {isMorning ? 'Morning' : 'Night'} </h3>   
         <button onClick={() => 
             setMorning(!isMorning)
         }>Day Light on / off</button>     
        </div>
    )
}
