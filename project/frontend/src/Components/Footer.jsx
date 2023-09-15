import React from 'react'
import './footer.css'

import { Container,Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../Assets/image/Logo1.png'



const quick_link=[
  {
    path:'/class', display:'Class'
  },
  {
    path:'/aboutus', display:'Aboutus'
  },
  {
    path:'/register', display:'Register'
  },
  {
    path:'/faq', display:'FAQ'
  }
]

function Footer() {
const year=new Date().getFullYear

  return (
    <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={Logo} alt=""/>
            <p>Welcome to MASTER to be a MASTER</p>
            <div className="social_link d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i class="fa-brands fa-youtube"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="fa-brands fa-github"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="fa-brands fa-facebook"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="fa-brands fa-instagram"></i></Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
        <h5 className="footer_link-title">Discovery</h5>
       <Link to={'/faq'}>FAQ</Link><br/><br/>
       <Link to={'/aboutus'}>About us</Link>

        </Col>

        <Col lg='3'>
        <h5 className="footer_link-title">Quick Links</h5>
        <ListGroup className='footer_quick-links'>
          {quick_link.map((item,index)=>(
            <ListGroupItem key={index} className='ps-0 border-0'><Link to={item.path}>{item.display}</Link></ListGroupItem>
          
          ))}
          </ListGroup>
        </Col>

        <Col lg='3'>
        <h5 className="footer_link-title">Contact us:</h5>
        <ListGroup className='footer_quick-links'>
          
            <ListGroupItem  className='ps-0 border-0 d-flex align-items-center'>
                <h6 className='mb-0 d-flex align-items-center gap-1'>
                  <span><i class="fa-solid fa-map-pin"></i></span>
                  Address : 
                </h6>
                <p className='mb-0'>Meerigama Rd,Divulapitiya</p>

            </ListGroupItem>
            <ListGroupItem  className='ps-0 border-0 d-flex align-items-center'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-solid fa-envelope"></i></span>
                  Email : 
                </h6>
                <p className='mb-0'>master-edu@gmail.com</p>

            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0 d-flex align-items-center'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-solid fa-phone"></i></span>
                  Phone : 
                </h6>
                <p className='mb-0'>0772361704</p>

            </ListGroupItem>
          
         
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center pt-4'>
            <p className="copyright align-items-center ">Copyright {year}, design and develop by Kalochitha Sankalpa. All rights reserved</p>
        </Col>
      </Row>

    </Container>
    </footer>
  )
}

export default Footer