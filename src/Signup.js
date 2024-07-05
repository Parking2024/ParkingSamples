import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import Validation from './SignUpvalidation'
function Signup(){
    const [values, setvalues]= useState({
        name:'',
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
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form action='' onSubmit={handleInput}>
                <div className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input type='name' placeholder='Enter Name' name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='enter email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='Password' placeholder='Password' name='password' onChange={handleInput} 
                    className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0' onClick={handlesubmit}><strong>Sign up</strong></button>
                <p>you are aggried terms and conditions</p>
                <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                
            </form>
        </div>
    </div>
    )
} export default Signup