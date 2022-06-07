import React from 'react'

export const SignUpForm = () => {
  return (
    <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={() => {}}>
            <label htmlFor="">Display Name</label>
            <input type="text" required />

            <label htmlFor="">email</label>
            <input type="email" required />

            <label htmlFor="">Password</label>
            <input type="password"required />

            <label htmlFor="">Confirm Password</label>
            <input type="password"required />

            <button type="submit">Sign up</button>
        </form>
    </div>
  )
}
