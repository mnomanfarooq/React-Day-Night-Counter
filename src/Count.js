import React, { useState } from 'react'

export const Count = () => {
    let [count, setCount] = useState(0);
    return (
        <>
            <h3>The click counter value is : {count} </h3>
            <button onClick= {() => setCount(++count)}>Counter Increase</button>             <button onClick= {() => setCount(--count)}>Counter Decrease</button>
        </>
    )
}
