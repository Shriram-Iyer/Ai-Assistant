import React from 'react'

const resetPassword = () => {
  return (
    <div className={`wrapper${loginAction}`}>
        <div className="form-box signUp">
            <form action=''>
                <h1>ResetPassword</h1>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Password' value={signUpPassword} onChange={onSignUpPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
                </div>
                <div className='input-box'>
                    <input type={passwordType} placeholder='Confirm Password' value={confirmPassword} onChange={onConfirmPasswordChange} required/>{passwordType === "password" ? <FaLock className='icon' onClick={(e)=>{passwordTypeHandler(e,"lock")}}/> : <FaUnlock className="icon" onClick={(e)=>{passwordTypeHandler(e,"unlock")}}/>}
                </div>
                <button type='submit'>ResetPassword</button>
            </form>
        </div>
    </div>
  )
}

export default resetPassword