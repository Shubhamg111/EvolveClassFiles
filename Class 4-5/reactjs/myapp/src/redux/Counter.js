import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const Counter = () => {
    const data = useSelector(store => store)
  return (
    <div>
      <h2 className='text-center display-1'>The cart Number is {data.cart}</h2>
      <Item/>
    </div>
  )
}

export default Counter
