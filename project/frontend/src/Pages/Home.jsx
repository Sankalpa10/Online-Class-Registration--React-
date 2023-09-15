import * as React from 'react';

import s1 from '../Assets/image/s1.png'
import bg from '../Assets/image/background.gif';
import q1 from '../Assets/image/quotes1.jpg';
import q2 from '../Assets/image/quotes2.jpg';
import q3 from '../Assets/image/quotes3.jpg';
import q4 from '../Assets/image/quotes4.jpg';
import q5 from '../Assets/image/quotes5.jpg';
import q6 from '../Assets/image/quotes6.png';
import { Container,Row,Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


export default function ActionAreaCard() {


  return (
    <> 
    
  <section>
  <Container>
    <Row>
      <Col>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" /> */}
      {/* <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <h2 className='font-unbounded'>
            Online learning is now very easy as MASTER Online Learning System is equipped with modern, innovative features that all 
            students need to carry out their learning activities online seamlessly.
            </h2>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
            src={bg} class="h-3 w-5"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              {/* <div className="font-semibold text-gray-900">Judith Black</div> */}
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              {/* <div className="text-gray-600">CEO of Workcation</div> */}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
      </Col>
    </Row>
  </Container>
 </section>

 <section>
  <Container>
    <Row>
      <Col>
      <Carousel slide>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q5}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q6}
          alt="Sixth slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
      </Row>
  </Container>
 </section>

 <section>
  <Container>
    <Row>
      <Col>
      <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Others Are Saying...!</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">"She is the first student who studeid in our institution and was selected for University"</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2023-06-06" class="text-gray-500">Jun 06, 2023</time><br></br>
           <h5>Elected to the University of Colombo</h5>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"><br></br>
            {/* <a href="#">
              <span class="absolute inset-0"></span> */}
              Taniya Anjali
            {/* </a> */}
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-style-italic">"I want to express my gratitude for the tuition class that played a crucial role in my academic journey. Without a doubt, it was a pivotal factor in my successful admission to the university. The dedicated instructors, comprehensive study materials, and personalized attention significantly contributed to my growth and development as a student. I am thankful for the support and guidance I received, and I highly recommend this tuition class to any student aiming for university admission."</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src={s1} alt="" class="h-3 w-2 rounded-full bg-gray-50"/>
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              {/* <a href="#">
               <span class="absolute inset-0"></span>
                Taniya Anjali
              </a> */}
            </p>
            {/* <p class="text-gray-600">2016 A/L in Technology</p> */}
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

      </Col>
      </Row>
  </Container>
 </section>
 </>
  

  );
}