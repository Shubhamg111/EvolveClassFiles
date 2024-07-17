import React from 'react'
import { useDispatch } from 'react-redux'

const Item = () => {
    const dispatch = useDispatch()

    // add
    const add=()=>(
        dispatch({type:'Addtocart'})
    )

    const remove=()=>(
        dispatch({type:'Removefromcart'})
    )
  return (
    <div>
        <button className='btn btn-primary' onClick={add}>Add</button>
        <button className='btn btn-danger' onClick={remove}>Delete</button>

      
    </div>
  )
}

export default Item
