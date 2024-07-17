import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
    
  <div className="container-fluid bg-dark">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to ="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <h1 className='text-warning'>Mero Web</h1>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to ="/" className="nav-link text-white px-2 fw-bold  ">Home</Link></li>
        <li><Link to ={'/products'} className="nav-link text-white px-2">Products</Link></li>
        <li><Link to ={'/cart'} className="nav-link text-white px-2">Cart</Link></li>
        <li><Link to ="#" className="nav-link text-white px-2">FAQs</Link></li>
        <li><Link to ="#" className="nav-link text-white px-2">About</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to={'/login'}><button type="button" className="btn btn-outline-info me-2">Login</button></Link>
        <button type="button" className="btn btn-danger">Sign-up</button>
      </div>
    </header>
  </div>
      
    </>
  )
}

export default Header
