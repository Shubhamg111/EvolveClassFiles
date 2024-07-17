import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Aboutpage from './pages/Aboutpage'
import LoginForm from './pages/LoginForm'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Counter from './redux/Counter'

const MyRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/productdetails/:productid' element={<Productdetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/signup' element={<Signup/>}/>




          </Route>

          <Route path='/redux/cart' element={<Counter/>} />


        </Routes>
      </Router>

    </>
  )
}

export default MyRoute
