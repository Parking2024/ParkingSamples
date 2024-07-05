import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './loginvalidation'


function Login(){
    const [values, setvalues]= useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState({})
    const handleInput =(event)=> {

        setvalues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }

    const handlesubmit=(event)=> {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign In</h2>
                <form action='' onSubmit={handlesubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' placeholder='enter email 'className='form-control rounded-0' onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='Password' name='password'  placeholder='Password' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                    <p>you are agree terms and conditions</p>
                    <Link to='./signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    <Link to='/Booking' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Booking</Link>
                    
                </form>
            </div>

            
        </div>
    )
}export default Login