import axios from 'axios';
import { Formik , Form, Field } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const API_DOMAIN = 'http://localhost:3000';

    const handleSubmit = (values) => {
        axios.post(`${API_DOMAIN}/register`, values).then(data => {
            dispatch({ type: 'LOGIN', payload: data.data.logged });
            toast("Registered Successfully ", { type: 'success'})  
            navigate('/login')              
        })
    }
    return (
        <div className='login flex justify-center items-center h-auto mt-5'>
           
                <Formik
                    initialValues={{ email: '', password: '' , name: ''}}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched
                    }) => (
                        <Form 
                        className='flex flex-col gap-2 mx-auto w-1/2 
                        p-4 bg-slate-950 rounded-lg '>

                            <label htmlFor="name" className='text-white'>User Name</label>
                            <Field
                                className="outline-none p-2 border-s-4 "
                                type="text"
                                name="name"
                                as="input"
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}


                            <label htmlFor="email" className='text-white'>Email</label>
                            <Field
                                className="outline-none p-2 border-s-4 "
                                type="email"
                                name="email"
                                as="input"
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            
                            
                            <label htmlFor="password" className='text-white'>Password</label>
                            <Field
                                className="outline-none p-2 border-s-4 "
                                type="password"
                                name="password"
                                as="input"
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            
                            <button 
                            className="rounded text-white py-2 mt-4 bg-sky-600 " 
                            type="submit "
                            >
                                Register
                            </button>
                        </Form>
                    )}
                </Formik>

        </div>
    )
}

export default Register