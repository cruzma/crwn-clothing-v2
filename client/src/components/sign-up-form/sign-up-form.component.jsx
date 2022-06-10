import React, { useState, useContext } from 'react'

import { FormInput } from '../form-input/FormInput.component'

import { Button } from '../button/button.component'

import { UserContext } from '../../contexts/user.context'

import './sign-up-form.style.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {

  const [formFields, setFormFields ] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const { setCurrentUser } = useContext(UserContext);

  console.log('hit')

  const registerData = { displayName, email, password }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
}

  const handleChange = (event) => {
    const { name, value } = event.target
  
    setFormFields({ ...formFields, [name]: value})
  }
  
  const signup = async(e)  => {
    e.preventDefault();
    
    if(password !== confirmPassword){
      alert("passwords do not match")
      return;
    }
    
    try{
      const response = await fetch('http://localhost:3001/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      })
      const json = await response.json()

      setCurrentUser(response)

      alert(json.message)
    
    } catch(error){
      console.log(error)
    }

    resetFormFields();
    
  }

  return (
    <div className='sign-up-container'>

      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
        <form onSubmit={signup}>
            
            <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput label="Password" type="password"required onChange={handleChange} name="password" value={password}/>

            <FormInput label="Confirm Password" type="password"required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

            <Button type="submit" >Sign up</Button>
        </form>
    </div>
  )
}
