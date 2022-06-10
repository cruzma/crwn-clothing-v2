import React, { useState, useContext } from 'react'

import { FormInput } from '../form-input/FormInput.component'

import { Button } from '../button/button.component'

import { UserContext } from '../../contexts/user.context'

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',

  }

export const SignInForm = () => {

    const [formFields, setFormFields ] = useState(defaultFormFields)
    const { email, password } = formFields
    
    const { setCurrentUser } = useContext(UserContext)

    const loginData = { email, password }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    // const signInWithGoogle = async() => {

    // }

    const handleChange = (event) => {
        const { name, value } = event.target
        
        setFormFields({ ...formFields, [name]: value})
    }

    const signin = async(e)  => {
        e.preventDefault();
        
        try{
            const response = await fetch('http://localhost:3001/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })

            const json = await response.json()
            
            setCurrentUser(response)

            alert(json.message)
            
            resetFormFields()
        } catch(error){
            alert("some error ocurred");
            console.log(error)
        }


    }
    
      return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={signin}>
                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password"required onChange={handleChange} name="password" value={password}/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    {/* <Button buttonType='google' onClick={signInWithGoogle}>Google sign in</Button> */}
                </div>
                
            </form>

        </div>
      )
    }