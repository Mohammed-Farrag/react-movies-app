import axios from 'axios';
import { Formik , Form, Field } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const API_DOMAIN = 'http://localhost:3000';

    const handleSubmit = (values) => {
        axios.post(`${API_DOMAIN}/login`, values).then(data => {
            dispatch({ type: 'LOGIN', payload: data.data.logged });
           if(data.data.logged){
               toast("Logged", {
                containerId: "1",
                type: 'success'
               })
               navigate("/movies");
            }else{
                toast("not registered", {
                    containerId: "1",
                    type: 'error'
                })
                navigate("/register");
            }
        })
    }
    return (
        <div className='login flex justify-center items-center h-80'>
           
                <Formik
                    initialValues={{ email: '', password: '' }}
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
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>

                {/* <ToastContainer  theme='dark' progressStyle={{backgroundColor:'blue'}}/> */}
        </div>
    )
}

export default Login