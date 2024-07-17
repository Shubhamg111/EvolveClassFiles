import React, { useState } from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Counter from '../hooks/Counter'

const Homepage = () => {
  const [products, setProducts] = useState([])

  axios.get("https://fakestoreapi.com/products")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

  return (
    <>
      {/* <Counter/> */}
      <Slider />

      <div className='container-fluid'>
        <h1 className='text-danger text-center pt-5'>Trending Products</h1>
        <hr className='container' />

        <div className='container p3-5'>
          <div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3 '>
            {
              products.slice(0, 3).map((product, i) => (
                <Card item={product} key={i} />

              ))
            }
          </div>

        </div>
      </div>



      <div className='see text-end me-5 mb-3'>
        <Link to={'/products'} className='text-danger'><i class="bi bi-plus-circle-fill"></i> See More</Link>
      </div>


    </>
  )
}

export default Homepage
