import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const cartData = localStorage.getItem("cartItems")
        setProducts(JSON.parse(cartData))
    }, [])


    const removeItems = (id) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        let filteredItems = cartItems.filter((items) => items.id !== id)

        setProducts(filteredItems)
        localStorage.setItem('cartItems', JSON.stringify(filteredItems))
        toast.success("Item Removed Successfully.")
    }

    return (

        <>
            <ToastContainer position='top-right' theme='colored' />
            <div className='d-flex'>
                {
                    products.length === 0 ?
                        <h1 className='text-center display-1 w-100 my-5 py-5'>Your Cart is Empty.</h1>
                        :
                        <>

                            <div className='col-md-8 px-4'>
                                <div className='d-flex border-bottom my-3 justify-content-evenly col-md-10 p-2 align-items-center'>
                                    <div className='col-4'>
                                        <p className='fw-bold'>Product Name</p>
                                    </div>

                                    <div className='col-2'>
                                        <p className='fw-bold'>Category</p>
                                    </div>

                                    <div className='col-2'>
                                        <p className='fw-bold'>Price</p>
                                    </div>

                                    <div className='col-2'>
                                        <p className='fw-bold'>Quantity</p>
                                    </div>

                                    <div className='col-2'>
                                        <p className='fw-bold'>Image</p>
                                    </div>

                                    <div className='col-2'>
                                        <p className='fw-bold'>Status</p>
                                    </div>


                                </div>


                                {
                                    products.map((data, i) => (
                                        <Fragment key={i}>

                                            <div className='d-flex border-bottom my-3 justify-content-evenly col-md-10 p-2 align-items-center'>
                                                <div className='col-4'>
                                                    <p>{data.title}</p>
                                                </div>

                                                <div className='col-2'>
                                                    <p>{data.category}</p>
                                                </div>

                                                <div className='col-2'>
                                                    <p className='text-center'>${data.price}</p>
                                                </div>

                                                <div className='col-2'>
                                                    <p className=''>{data.quantity} units</p>
                                                </div>

                                                <div className='col-2'>
                                                    <img src={data.image} alt={data.name} width='70px' />
                                                </div>

                                                <div className='col-2'>
                                                    <button className='btn btn-danger' onClick={() => removeItems(data.id)}><FaTrash /></button>
                                                </div>


                                            </div>

                                        </Fragment>
                                    ))
                                }

                            </div>

                            <div className='col-md-4'>
                                <div className='col-md-10 shadow p-2'>
                                    <h2 className='text-center'>Cart History</h2>
                                    <hr />

                                    <p>Total Units: <span>
                                        {products.reduce((acc, items) => {
                                            return acc + items.quantity
                                        }, 0)} Units
                                    </span></p>
                                    <p>Total Price :
                                        ${
                                            products.reduce((acc, items) => {
                                                return acc + items.price * items.quantity
                                            }, 0)
                                        }
                                    </p>

                                    <button className='btn btn-success'>CheckOut</button>

                                </div>

                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Cart
