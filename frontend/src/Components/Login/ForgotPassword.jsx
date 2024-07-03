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
</div>
  )
}

export default ForgotPassword
