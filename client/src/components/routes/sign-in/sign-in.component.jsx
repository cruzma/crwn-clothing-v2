import React, { useState } from 'react'
// import { SignUpForm } from '../../sign-up-form/sign-up-form.component'

export const SignIn = () => {

const [emailReg, setEmailReg ] = useState('')
const [passwordReg, setPasswordReg ] = useState('')
const [confirmPasswordReg, setConfirmPasswordReg ] = useState('')
const [nameReg, setNameReg] = useState('')

const [loginEmail, setLoginEmail] = useState('')
const [loginPassword, setLoginPassword] = useState('')


const registerData = { emailReg, passwordReg, nameReg }
const loginData = { loginEmail, loginPassword}

const signup = async(e)  => {
  e.preventDefault();
  
  if(passwordReg !== confirmPasswordReg){
    alert("passwords do not match")
    return;
  }

  const response = await fetch('http://localhost:3001/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerData)
  })
  const json = await response.json()
  console.log(json);

  console.log("its doing something");
  

}

const signin = async(e)  => {
  e.preventDefault();

  const response = await fetch('http://localhost:3001/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })

  const json = await response.json()
  
    if(json.message){
      alert(json.message)
    } else {
      alert('logged in')
    }


  

}

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder='Email...' onChange={(e) => {setLoginEmail(e.target.value)}} />
        <input type="password" placeholder='Password...' onChange={(e) => {setLoginPassword(e.target.value)}}/>
        <button onClick={signin}>Sign In</button>
      </form>


      <h1>Sign up with your email and password</h1>
        <form>
            <label htmlFor="">Display Name</label>
            <input type="text" required onChange={(e) => {setNameReg(e.target.value)}}/>

            <label htmlFor="" >email</label>
            <input type="email" required onChange={(e)=>{setEmailReg(e.target.value)}} />

            <label htmlFor="" >Password</label>
            <input type="password"required onChange={(e)=>{setPasswordReg(e.target.value)}} />

            <label htmlFor="">Confirm Password</label>
            <input type="password"required onChange={(e)=>{setConfirmPasswordReg(e.target.value)}}/>

            <button type="submit" onClick={signup}>Sign up</button>
        </form>
    </div>
  )
}
