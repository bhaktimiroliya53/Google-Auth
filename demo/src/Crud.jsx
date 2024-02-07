import React, { useState } from 'react'
import "./pages/Crud.css"
import { db} from './fireStore-config'
import { googleAuthProvider , auth } from './fireStore-config' 
import { addDoc, collection } from 'firebase/firestore'
import { signInWithPopup, signOut } from 'firebase/auth'

function Crud() {

  let tbl = collection(db,"user")
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await addDoc (tbl,{
        name : name,
        email : email,
        password : password 
      })
      alert('Record Add')
      setName('')
      setEmail('') 
      setPassword('')
      const result = await signInWithPopup(auth,googleAuthProvider)
      console.log(result);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const login = async() => {
    const result = await signInWithPopup(auth,googleAuthProvider);
  }

  const logOut = async() => {
    try{
      await signOut(auth);
      alert("User Logout")

    }catch(err){
      console.log(err);
      return false
    }
  }

  return (
    <center>
      <div className="container">
        <div className="form-box">
          <form onSubmit={handleSubmit} className="form">
            <span className="title">Login Page</span>
            <div className="form-container">
              <input type="text" className="input" placeholder="Full Name" onChange={ (e) => setName(e.target.value)} value={name}/>
              <input type="email" className="input" placeholder="Email" onChange={ (e) => setEmail(e.target.value)} value={email}/>
              <input type="password" className="input" placeholder="Password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button type='submit'>Sign up</button>
          </form>
          <div className="form-section">
            <button onClick={ () => login()}><a href="#">Log In</a></button>
          </div>
          <div className="form-section">
          <button onClick={ () => logOut()}><a href="#">Log Out</a></button>
          </div>
        </div>
      </div>

    </center>
  )
}

export default Crud