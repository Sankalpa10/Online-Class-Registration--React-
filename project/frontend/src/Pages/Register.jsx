import React, {useState} from 'react'
import '../Components/register.css'
import registerside from '../Assets/image/registerside.avif'
import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'

function Register() {
    const [values,setValues] = useState({
        name : '',
        username: '',
        email: '',
        address: '',
        password: '',
        telenumber: ''
    })

     const handleChange = (event) =>{
         setValues({...values,[event.target.name]:[event.target.value]})
}
      const handleSubmit = (event) =>{
         event.preventDefault();
         axios.post('http://localhost:3001/register',values )
         .then(res => console.log ("Register Successfully"))
         .catch(err => console.log ("error"))
     }
 
  return (
    <Container>
        <Row>
            <Col>
    {/* <div className='m-4'> */}
        <form class="form" onSubmit = {handleSubmit}  >
    <p class="title">Register </p>
    <p class="message">Plese fill these information to register as new user </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" name= 'name' type="text" class="input" onChange={handleChange}/>
            <span>Name</span>
        </label>

        <label>
            <input required="" placeholder="" name= 'username' type="text" class="input"  onChange={handleChange}/>
            <span>Username</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" name= 'email' type="email" class="input"  onChange={handleChange}/>
        <span>Email</span>
    </label>

    <label>
        <input required="" placeholder="" name= 'address' type="address" class="input"  onChange={handleChange}/>
        <span>Address</span>
    </label> 

    <label>
        <input required="" placeholder="" name= 'password' type="password" class="input"  onChange={handleChange}/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" name= 'telenumber' type="telnumber" class="input" onChange={handleChange}/>
        <span>Telephone Number</span>
    </label>
    <button variant="primary" type="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="login">Login</a> </p>
    </form>
    </Col>
    <Col lg = '7'>
    <img src={registerside} className='d-flex' width={800} height={600} alt=""/>
    </Col>
    {/* </div> */}
    </Row>
    </Container>
  )
}

export default Register

