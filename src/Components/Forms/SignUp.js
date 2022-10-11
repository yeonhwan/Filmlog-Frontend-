import React, {useState} from 'react'
import axios from 'axios'

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [userPassWord, setUserPassWord] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleUserPassword = (e) => {
    setUserPassWord(e.target.value);
  }

  const createUserAccount = async(e) => {
    try{
      await axios.post('http://localhost:8000/signup',{username : username, password : userPassWord});
      console.log('created a new account successfully');
    }catch(err) {
      console.log('Cannot create an account \n An error occured \n', err);
    }
  }

  return (
    <div>
      <h3>Sign Up Form</h3>
      <input type='text' placeholder='username' onChange={handleUsername}/>
      <input type='text' placeholder='password' onChange={handleUserPassword}/>
      <button onClick={createUserAccount}>Sign Up</button>
    </div>
  )
}
