import React from 'react'
import { SignUpForm } from '../../sign-up-form/sign-up-form.component'

export const SignIn = () => {



// const [loginEmail, setLoginEmail] = useState('')
// const [loginPassword, setLoginPassword] = useState('')



// const loginData = { loginEmail, loginPassword}



// const signin = async(e)  => {
//   e.preventDefault();

//   const response = await fetch('http://localhost:3001/sign-in', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(loginData)
//   })

//   const json = await response.json()
  
//   if(json.message){
//     alert(json.message)
//   } else {
//     alert('logged in')
//   }
  

// }

  return (
    <div>
      {/* <h1>Sign In</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder='Email...' onChange={(e) => {setLoginEmail(e.target.value)}} />
        <input type="password" placeholder='Password...' onChange={(e) => {setLoginPassword(e.target.value)}}/>
        <button onClick={signin}>Sign In</button>
      </form> */}

      <SignUpForm />

    </div>
  )
}
