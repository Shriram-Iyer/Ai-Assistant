import React from 'react'

const ForgotPassword = () => {
    const [action, setAction] = React.useState('')
    
    const forgotPassword = (event) => {
        event.preventDefault()
        setAction(' active')
    }
  return (
    <div className={`wrapper${action}`}> 
    <div className="form-box signIn">
        <form action=''>
            <h1>Forgot Password</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username/email' value={loginUsername} onChange={onLoginUsernameChange} required/><FaUser className='icon'/>
            </div>
            <button type='submit'>SignIn</button>
        </form>
    </div> 
    <div className="form-box signUp">
        <form action=''>
            <h1>ResetPassword</h1>
            <div className='input-box'>
                <input type={passwordType} placeholder='Password' value={signUpPassword} onChange={onSignUpPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
            </div>
            <div className='input-box'>
                <input type={passwordType} placeholder='Confirm Password' value={confirmPassword} onChange={onConfirmPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
            </div>
            <button type='submit'>SignUp</button>
        </form>
    </div> 
</div>
  )
}

export default ForgotPassword
