import React, { useState } from 'react'
import axios from "axios"
import "./login.css"
const Login = () => {
 const [email, setemail] = useState('')
 const [password, setpassword] = useState('')
 const [runlogin, setrunlogin] = useState(false)
 
const [datamsg, setDatamsg] = useState('')
 const handleClick= async()=>{ 
    //this is click function to handle click event when we click on button this function  run 
     
      console.log("log")

      const logindata = await axios.get(`http://localhost:5000/login?password=${password}&email=${email}`)
      console.log(logindata.data.msg)

      if(logindata.data.msg){
        setDatamsg(logindata.data.msg)
      if(logindata.data.msg==="login successfull"){
        setrunlogin(true)
      }
    }
 }
  return (
    
    <div>
           <div className='contianer'>
           <input className='input' type='email' placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} /> 
        <input className='input' type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> 
        <button className='button' onClick={handleClick} type='button'>Submit</button> 
    { runlogin&&<p className=' alert alert-success'> {datamsg} </p>}
           </div>

          
        <br />
        



    </div>
  )
}

export default Login