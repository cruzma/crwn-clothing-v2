import React, { useState } from 'react'
// import { SignUpForm } from '../../sign-up-form/sign-up-form.component'

export const SignIn = () => {

const [emailReg, setEmailReg ] = useState('')
const [passwordReg, setPasswordReg ] = useState('')
const [nameReg, setNameReg] = useState('')

const data = { emailReg, passwordReg, nameReg }

const signup = (e)  => {
  e.preventDefault();
  
  fetch('http://localhost:3001/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  console.log("its doing something");
  

}

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder='Email...' />
        <input type="password" placeholder='Password...' />
        <button>Sign In</button>
      </form>


      <h1>Sign up with your email and password</h1>
        <form>
            <label htmlFor="">Display Name</label>
            <input type="text" required onChange={(e) => {setNameReg(e.target.value)}}/>

            <label htmlFor="" >email</label>
            <input type="email" required onChange={(e)=>{setEmailReg(e.target.value)}} />

            <label htmlFor="" >Password</label>
            <input type="password"required onChange={(e)=>{setPasswordReg(e.target.value)}} />

            {/* <label htmlFor="">Confirm Password</label>
            <input type="password"required /> */}

            <button type="submit" onClick={signup}>Sign up</button>
        </form>
    </div>
  )
}
