import React from 'react'

const LoginForm = () => {
    return (
        <>
            <div className='container py-5'>
                <div className='d-flex justify-content-center'>
                    <div className='col-md-5 shadow-lg'>
                        <form className='p-3' autocomplete='off'>
                            <h2 className='text-center'>Login form</h2>
                            <hr />

                            <div className='form-floating mb-2'>
                                <input type="email" className="form-control" id="floatingInput" placeholder="" />
                                <label htmlFor="floatingInput">Email address</label>

                            </div>
                            <div className='form-floating mb-2'>
                                <input type="password" className="form-control" id="floatingInput" placeholder="" />
                                <label htmlFor="floatingInput">Password</label>

                            </div>
                            <hr/>

                            
                                <div className="m-3">
                                    <input className="border border-1 mx-2" type="checkbox" value="#" /> 
                                    Remember Me
                                </div>
                                <hr/>
                            
                            <div className='mb-2 w-100 mb-5'>
                                <button type='Submit' className='btn btn-primary w-100'>Submit</button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>


        </>
    )
}

export default LoginForm
