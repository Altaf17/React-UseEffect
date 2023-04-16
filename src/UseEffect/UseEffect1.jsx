import React, { useState, useEffect } from 'react'

const UseEffect1 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("useeffect is triggered")
    },[]);

    return (
        <div className='--center-all'>
            <h1>{count}</h1>
            <button className='--btn --btn-primary'
                onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffect1