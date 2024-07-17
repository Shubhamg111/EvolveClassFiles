import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])
    const [limit,setLimit]=useState(12)

    axios.get("https://fakestoreapi.com/products")
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))


    const loadmore = ()=>{
        setLimit(limit+3)
    }

    const loadless=()=>{
        setLimit(12)
    }

    return (
        <>
            <div>
                <div className='d-flex'>

                    <div className='category col-md-2 border p-2'>
                        <h3>All Categories</h3>
                        <hr />
                        <Link>See All</Link>

                        <div className=' d-flex m-2'>
                            <input type='checkbox' id='clothes' className='me-2' />
                            <label htmlFor='clothes'>Clothes</label>
                        </div>
                        <div className=' d-flex m-2'>
                            <input type='checkbox' id='Health' className='me-2' />
                            <label htmlFor='Health'>Health and Beauty</label>
                        </div>
                        <div className=' d-flex m-2'>
                            <input type='checkbox' id='Foods' className='me-2' />
                            <label htmlFor='Foods'>Foods</label>
                        </div>
                        <div className=' d-flex m-2'>
                            <input type='checkbox' id='Electronics' className='me-2' />
                            <label htmlFor='Electronics'>Electronics</label>
                        </div>
                        <div className=' d-flex m-2'>
                            <input type='checkbox' id='Machinery' className='me-2' />
                            <label htmlFor='Machinery'>Machinery</label>
                        </div>

                        <div className=' d-flex m-2'>
                            <input type='checkbox' id='Cosmetics' className='me-2' />
                            <label htmlFor='Cosmetics'>Cosmetics</label>
                        </div>
                    </div>


                    <div>
                        <div className='container p3-5'>
                            <div className='row row-cols-2 row-cols-lg-3 g-1 g-lg-2 '>
                                {
                                    products.slice(0,limit).map((product,i) => (
                                        <Card item={product} key={i} />

                                    ))
                                }
                            </div>
                            <div className='m-auto w-25 py-3'>

                                {
                                    limit < products.length && <button className='btn btn-primary me-3'  onClick={loadmore}>Load More</button>
                                }
                                
                                {
                                    limit > products.length && <button className='btn btn-warning' onClick={loadless}>Load Less</button>
                                }
                                

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products
