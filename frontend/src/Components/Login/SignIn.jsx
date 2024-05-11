import React from 'react'
import './SignIn.css'

import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx'

const SignIn = () => {
    const [passwordType, setPasswordType] = React.useState('password')
    const [eye, setEye] = React.useState(<RxEyeClosed/>)
    const [action, setAction] = React.useState('')
    
    const signUpLink = () => {
        setAction(' active')
    }

    const signInLink = () => {
        setAction('')
    }

    const eyeChange = (event)=> {
        event.preventDefault()
        if(passwordType === "password") {
            setEye(<RxEyeOpen/>)
            setPasswordType("text")
        }
        else{
            setEye(<RxEyeClosed/>)
            setPasswordType("password")
        }
    }
  return (
    <div className={`wrapper${action}`}> 
        <div className="form-box signIn">
            <form action=''>
                <h1>SignIn</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/><FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Password' required/><FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remember Me</label>
                    <a href='#'>Forgot Password</a>
                </div>
                <button type='submit'>SignIn</button>
                <div className='sign-up-link'>
                    <p>Don't have a account? <a href='#' onClick={signUpLink}>SignUp</a></p>
                </div>
            </form>
        </div> 
        <div className="form-box signUp">
            <form action=''>
                <h1>SignUp</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/><FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required/><FaEnvelope className='icon'/>
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Password' required/><FaLock className='icon'/>
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Confirm Password' required/><FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>I agree to the terms & conditions</label>
                </div>
                <button type='submit'>SignUp</button>
                <div className='sign-up-link'>
                    <p>Already have a account? <a href='#' onClick={signInLink}>SignIn</a></p>
                </div>
            </form>
        </div> 
    </div>
  )
}

export default SignIn
