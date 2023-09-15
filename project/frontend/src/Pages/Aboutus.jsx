import React from 'react';
import '../Components/aboutUs.css';
import { Container } from 'react-bootstrap';

function Aboutus() {
  return (
    <div class="container">
    <div class="card">
      <div class="box">
        <div class="content">
          <h2></h2>
          <h3>Our Mission</h3>
          <p>To spearhead the transformation of the nation’s sons and daughters as competent and virtuous citizens via holistic education.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="box">
        <div class="content">
          <h2></h2>
          <h3>Our Vision</h3>
          <p>A generation endowed with wisdom and virtue.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="box">
        <div class="content">
          <h2></h2>
          <h3>Our Progress</h3>
          <p>MASTER Higher Education Center has also the highest percentage of students entering Universities in Divulapitiya area. In addition, there are many students who have won prizes in other professional courses.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>

  
  )
}

export default Aboutus