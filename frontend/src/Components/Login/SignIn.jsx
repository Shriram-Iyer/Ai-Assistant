import React from 'react'
import './SignIn.css'

import { FaUser, FaLock, FaUnlock, FaEnvelope } from 'react-icons/fa';
import { signInHandler } from '../../functions';

const SignIn = (props) => {
    const {loginAction, setLoginAction} = props
    const [loginUsername, setLoginUsername] = React.useState('')
    const [loginPassword, setLoginPassword] = React.useState('')
    const [rememberMe, setRememberMe] = React.useState(false)
    const [signUpUsername, setSignUpUsername] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [signUpPassword, setSignUpPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [passwordType, setPasswordType] = React.useState('password')
    
    const signInLink = (event) => {
        event.preventDefault()
        setLoginAction('')
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
    
    const signUpLink = (event) => {
        event.preventDefault()
        setLoginAction(' active')
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

    const onLoginUsernameChange = (event) => {
        event.preventDefault()
        setLoginUsername(event.currentTarget.value)
    }

    const onLoginPasswordChange = (event) => {
        event.preventDefault()
        setLoginPassword(event.currentTarget.value)
    }

    const onRememberMeClick = (event) => {
        event.preventDefault()
        setRememberMe(!rememberMe)
    }
  
  return (
    <div className={`wrapper${loginAction}`}> 
        <div className="form-box signIn">
            <form onSubmit={(e)=>signInHandler(e,loginUsername,loginPassword)}>
                <h1>SignIn</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' value={loginUsername} onChange={onLoginUsernameChange} required/><FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Password' value={loginPassword} onChange={onLoginPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' checked={rememberMe} onChange={onRememberMeClick}/>Remember Me</label>
                    <a href='#'>Forgot Password</a>
                </div>
                <button type='submit'>SignIn</button>
                <div className='sign-up-link'>
                    <p>Don't have a account? <a href='#' onClick={signUpLink}>SignUp</a></p>
                </div>
            </form>
        </div> 
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

export default SignIn
