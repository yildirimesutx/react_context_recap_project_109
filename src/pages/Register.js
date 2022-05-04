import React, { useState } from 'react'

const Register = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    
 
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name, email, password);

    }  





  return (
      <div style={{backgroundImage:"url(https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)", backgroundSize:"cover", height:"87vh",padding:"10rem" }}>
    <div class="w-50 m-auto">
        
    <form class="w-75 m-auto" onSubmit={handleSubmit}>
  <div class="mb-3">
  <label for="exampleInputName" class="form-label text-white fs-5">Nickname</label>
    <input type="text" class="form-control min-vw-75" id="exampleInputName" onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-white fs-5">Email address</label>
    <input type="email" class="form-control min-vw-75" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-white fs-5">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label text-white" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary mw-75" >Register</button>
</form>
<button class='btn btn-secondary mt-3 mw-25'> Continue <img src="https://seeklogo.com/images/G/google-2015-new-logo-D28485E83C-seeklogo.com.png" alt="" style={{width:"5rem"}} /></button>    
        
        
    </div>
    </div>
  )
}

export default Register