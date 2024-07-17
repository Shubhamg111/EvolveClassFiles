import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>


            <div className="col">
                <div className="card m-3 rounded shadow">
                    <img src={props.item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" title={props.item.title}>{props.item.title.slice(0, 20)}...</h5>
                        <p className='text-success fs-4 fw-bold'>${props.item.price}</p>
                        <div className='d-flex justify-content-between my-3'>
                            <Link to={`/productdetails/${props.item.id}`}><button className='btn btn-info'> <i class="bi bi-eye"></i> View Details</button></Link>
                            <button className='btn btn-warning text-danger'><i class="bi bi-bag-plus-fill"></i> Add to Cart</button>


                        </div>
                        <hr/>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>


            </div>


            {/* </div> */}



        </>
    )
}

export default Card
