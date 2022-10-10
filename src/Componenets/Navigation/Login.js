import React from 'react'
import SignUp from '../Forms/SignUp'

export default function Login() {
  return (
    <div>
      <h3>Login</h3>

      <input type='text' placeholder='type ur id'/>
      <input type='password' placeholder='password'/>

      <h3>if you dont have an account</h3>
      <h3>create an account !</h3>
      <SignUp/>
    </div>
  )
}
