import React, { useState } from 'react'
import '../Components/register.css'
import loginside from '../Assets/image/loginside.jpg'
import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'

function Login() {
  const [username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/login',{username,password})
    .then (res =>console.log(res))
    .catch (err => console.log(err));
  }
  return (
    // <div className='m-5'>
    <Container>
      <Row>
        <Col lg = '5'>
    <form onSubmit={handleSubmit}  class="form" >
    <p class="title">Login </p>
    <p class="message">Enter your User name,Password here</p>
    <label>
        <input required="" placeholder="" type="username" class="input"
        onChange={e => setUsername(e.target.value)}/>
        <span>User Name</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"
        onChange={e => setPassword(e.target.value)}/>
        <span>Password</span>
    </label>
    <button class="submit">Login</button>
    <p class="signin">Forgot your password ? <a href="forgotpass">forgot password</a> </p>
    
</form></Col>
<Col lg = '5'>
<img src={loginside} className='d-flex' width={800} height={600} alt=""/>
</Col>
</Row>
</Container>

// </div> 


  )
}

export default Login
