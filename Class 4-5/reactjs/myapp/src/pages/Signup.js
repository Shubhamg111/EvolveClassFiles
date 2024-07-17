import React from 'react'
import {Formik, Form, ErrorMessage,Field } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
  return (
    <>
      <Formik initialValues={{
        fname:" ",lname:"",email:"", pwd:"",cpwd:""
      }}
      validationSchema={Yup.object({
            fname:Yup.string()
           .required('First name is mandatory')
           .max(20, "Must be lower than 20 characters"),

           lname:Yup.string()
           .required('Last name is mandatory')
           .max(20, "Must be lower than 20 characters"),

           email:Yup.string()
           .email("email is not valid")
           .required('email is mandatory'),

           pwd:Yup.string()
           .required('Password is mandatory')
           .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/,'weak password'),

           cpwd:Yup.string()
            .required('Confirm password is mandatory.')
            .oneOf([Yup.ref('pwd'),null], 'Password doesnot Match.')


      })}
      
      >
        <div className='container py-4'>
            <div className='d-flex justify-content-center'>
                <div className='col-md-5 shadow'>

                    <Form className='p-2'>
                    <div className='mb-3'>
                            <label htmlFor='fname'>First Name</label>
                            <Field className='form-control' type='text' name='fname' placeholder='First Name'/>

                            <ErrorMessage name='fname'>
                                {msg => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='lname'>Last Name</label>
                            <Field className='form-control' type='text' name='lname' placeholder='Last Name'/>

                            <ErrorMessage name='lname'>
                                {msg => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='email'>Email</label>
                            <Field className='form-control' type='email' name='email' placeholder='Email'/>

                            <ErrorMessage name='email'>
                                {msg => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='pwd'>Password</label>
                            <Field className='form-control' type='password' name='pwd' placeholder='Password'/>

                            <ErrorMessage name='pwd'>
                                {msg => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>

                        </div>


                        <div className='mb-3'>
                            <label htmlFor='cpwd'>Confirm Password</label>
                            <Field className='form-control' type='password' name='cpwd' placeholder='Confirm Password'/>

                            <ErrorMessage name='cpwd'>
                                {msg => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>

                        </div>

                        <div className='mb-2'>
                            <button type='submit' className='btn btn-primary w-100'>Submit</button>

                        </div>


                    </Form>

                </div>

            </div>
             
        </div>
      </Formik>
    </>
  )
}

export default Signup
