

import React, { useState } from 'react'
import axios from "axios"
import "./register.css"
const Register = () => {
 const [email, setemail] = useState('')
 const [password, setpassword] = useState('')
 const [runlogin, setrunlogin] = useState(false)
 const [name, setname] = useState('')
 const [runerror, setrunerror] = useState(false)
 
const [datamsg, setDatamsg] = useState('')
 const handleClick= async()=>{ 
    //this is click function to handle click event when we click on button this function  run 
     
      console.log("log")

      const logindata = await axios.post(`http://localhost:5000/register`, { email: email , password : password , name: name })
      console.log(logindata.data.msg)

      if(logindata.data.msg){
        setDatamsg(logindata.data.msg)
      if(logindata.data.msg==="user registered"){
        setrunlogin(true)
        setrunerror(false)
      }
      if(logindata.data.msg==="user already exists, please login"){
        setrunerror(true)
        setrunlogin(false)
      }
    }
 }
  return (
    
    <div>
           <div className='contianer'>
           <input className='input' type='text' placeholder='name' value={name} onChange={(e)=>setname(e.target.value)} /> 
           <input className='input' type='email' placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} /> 
        <input className='input' type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> 
        <button className='button' onClick={handleClick} type='button'>Submit</button> 
    { runlogin&&<p className=' alert alert-success'> {datamsg} </p>}
    { runerror&&<p className=' alert alert-error'> {datamsg} </p>}
           </div>

          
        <br />
        



    </div>
  )
}

export default Register