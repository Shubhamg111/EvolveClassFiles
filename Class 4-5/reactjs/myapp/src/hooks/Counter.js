import React, { useEffect, useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(5)
// count is a variable that store the value and setCount is a function name that updates the value and store it.

    const up=()=>{
        setCount(count+1)
    }
    const down=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(5)
    }

    // useEffect
    useEffect(()=>{
            alert("State Changed.")
        },[])


  return (
    <>

    <h1 className='display-1'>{count}</h1>

      <button className='btn btn-primary' onClick={up}>Increase</button>

      { count>0 && <button className='btn btn-warning'  onClick={down}>Decrease</button>}
      <button className='btn btn-primary' onClick={reset}>Reset</button>
   

    </>
  )
}

export default Counter
