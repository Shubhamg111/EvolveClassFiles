import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStar from '../components/RatingStar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Productdetails = () => {
    const [products,setProducts] = useState([])
    const [qty,setQty] = useState(1)
    const pid = useParams().productid

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${pid}`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    })

    const addtocart = ()=>{
        // fetching data from local storage if exists otherwise create an empty array
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        // assigning data of product in object variable
        const productItem ={
            id:products.id,
            title:products.title,
            image:products.image,
            price:products.price,
            category:products.category,
            quantity: qty
        }

        // check if the product is already exists or not
        const existingItems = cartItems.find((item)=>item.id === products.id)
        if(existingItems){
            toast.error('Product already added.')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success("Product added successfully.")
        }
    }

    const increase =()=>{
        setQty(qty+1)
    }

    const decrease =()=>{
        setQty(qty-1)
    }



  return (
    <div>
        <ToastContainer position='top-right' theme='colored'/>
        <div className='container py-5'>
            <div className='d-flex justify-content-center'>
                <div className='d-lg-flex justify-content-evenly shadow'>
                    <div className='col-lg-4 col-6 m-auto p-3'>
                        <img src={products.image} alt={'products.title'} width='300px' className=''></img>
                    </div>
                    <div className='product-info p-3'>
                        <Link to={'/'} className='text-primary'>Home </Link> /
                        <Link to={'/products'} className='text-primary'> Products </Link> /
                        <span className='text-dark'> {products.title}</span>

                        <h2 className=''>{products.title}</h2>
                        <p className='text-secondary mb-4'>{products.category}</p>
                        <h3>Price:<span className='text-success'>${products.price}</span></h3>
                        <div className='mb-5 d-flex w-50'>
                            <button className='fw-bolder fs-3 btn btn-secondary me-2' onClick={decrease}>-</button>
                            <input type='text' value={qty} min='1' className='text-center w-25 form-control bg-secondary-subtle'/>
                            <button className=' fw-bolder fs-3 btn btn-secondary ms-2' onClick={increase}>+</button>

                        </div>
                         
                            {
                                products.rating && <RatingStar rating = {products.rating.rate}/>
                            }
                          

                        <h3>Description</h3>
                        <p>{products.description}</p>

                        <div className='d-flex my-3'>
                            
                            <button className='btn btn-warning text-danger me-5' onClick={addtocart}><i class="bi bi-bag-plus-fill"></i> Add to Cart</button>
                            <button className='btn btn-success text-light'><i class="bi bi-bag-plus-fill"></i> Add to Wishlist</button>



                        </div>
                       





                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Productdetails
