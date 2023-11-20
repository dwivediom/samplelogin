import React, { useState } from 'react'
import "./login.css"
const Login = () => {
 const [username, setusername] = useState('')
 const [password, setpassword] = useState('')
 const [runlogin, setrunlogin] = useState(false)
 const handleClick=()=>{ 
    //this is click function to handle click event when we click on button this function  run 
      setrunlogin(true)
      console.log("log")
 }
  return (
    
    <div>
           <div className='contianer'>
           <input className='input' type='text' placeholder='username ' value={username} onChange={(e)=>setusername(e.target.value)} /> 
        <input className='input' type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> 
        <button className='button' onClick={handleClick} type='button'>Submit</button> 
    { runlogin&&<p className=' alert alert-success'> login success </p>}
           </div>

          
        <br />
        



    </div>
  )
}

export default Login