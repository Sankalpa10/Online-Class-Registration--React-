import React , {useRef,useEffect} from 'react'
import './header.css'

import {Container,  Button, Nav, Navbar} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

import Logo from  '../Assets/image/Logo1.png'

const nav_link=[
  {
    path:'/home', display:'Home'
  },
  {
    path:'/aboutus', display:'Aboutus'
  },
  {
    path:'/class', display:'Class'
  },
  {
    path:'/payment',display:'Payment'
  }
]


function Navibar() {

  const headerRef=useRef(null)

const stickyHeaderFunc=()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add('sticky_header')
    }
    else{
      headerRef.current.classList.remove('sticky_header')

    }
  })
}

useEffect(()=>{
  stickyHeaderFunc()
  return window.removeEventListener('scroll',stickyHeaderFunc)
})
  return (
    <header className='header' ref={headerRef}>
    <Container>
      <Navbar  className='menu d-flex align-items-center gap-5 '>
    
      <Navbar.Brand>
        <img src={Logo} alt="" className='logo' />
      </Navbar.Brand>
          <Nav className="me-auto nav_items gap-4 mt-2">
            {nav_link.map((item,index)=>(<NavLink key={index} to={item.path} 
           className={navClass=>navClass.isActive?"active_link":""} >{item.display}</NavLink>))}
          </Nav>
          
          <div className="nav_btns d-flex gap-2 align-item-center">
          <Link to='/login'><Button className='login_btn' >Login</Button></Link>
          <Link to='/register'><Button className='btn reg_btn'>Register</Button></Link>
          <span className='mobile_menu'>
          <i class="fa-solid fa-bars"></i>
          </span>
          </div>
          
     
      </Navbar>
    </Container>
    </header>
  )
}

export default Navibar