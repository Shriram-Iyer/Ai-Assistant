import React from 'react'

import { FaUser, FaLock, FaUnlock, FaEnvelope } from 'react-icons/fa';

const SignUp = (props) => {
    const {loginAction, setLoginAction} = props
    const [signUpUsername, setSignUpUsername] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [signUpPassword, setSignUpPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [passwordType, setPasswordType] = React.useState('password')
    
    const signInLink = (event) => {
        event.preventDefault()
        setLoginAction('')
    }
    
    const passwordTypeHandler = (event, button) => {
        event.preventDefault()
        if(button === "lock") {
            setPasswordType("text")
        }
        else if(button === "unlock") {
            setPasswordType("password")
        }
    }
    
    const onSignUpUsernameChange = (event) => {
        event.preventDefault()
        setSignUpUsername(event.currentTarget.value)
    }

    const onSignUpPasswordChange = (event) => {
        event.preventDefault()
        setSignUpPassword(event.currentTarget.value)
    }

    const onConfirmPasswordChange = (event) => {
        event.preventDefault()
        setConfirmPassword(event.currentTarget.value)
    }

    const onEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.currentTarget.value)
    }
    
  return (
    <div className={`wrapper${loginAction}`}>
        <div className="form-box signUp">
            <form loginAction=''>
                <h1>SignUp</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' value={signUpUsername} onChange={onSignUpUsernameChange} required/><FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' value={Email} onChange={onEmailChange} required/><FaEnvelope className='icon'/>
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Password' value={signUpPassword} onChange={onSignUpPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Confirm Password' value={confirmPassword} onChange={onConfirmPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
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

export default SignUp