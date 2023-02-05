import './App.css';
import './aos.css'
import coverImg from './assets/coverimage.jpeg';

import React ,{useState, useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


//type writer
import { Typewriter } from 'react-simple-typewriter';
//import "./styles.css";
//import {Container} from 'react-bootstrap'
import { db } from './firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { render } from '@testing-library/react';
import Header from './components/header'



function App() {

  const [newName, setNewName] = useState(" ");
  const [newEmail, setNewEmail] = useState(" ");
  const [newMessage, setNewMessage] = useState(" ");

  // const click = () =>{
  //   console.log(newName, newEmail, newMessage);
  // }

  //const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "userInfo");

  const createMessage = async () =>{
    await addDoc(usersCollectionRef, {name: newName, email: newEmail, message: newMessage});
    console.log(newName, newEmail, newMessage);
    alert('Your message has been sent!')
  };
  
  // useEffect(()=>{
  //   const getUsers = async () =>{
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data.docs.map(doc=>({...doc.data(), name: 'deo'})))

  //   };

  //   //getUsers();
  // }, [])
  
  return (
    <div className="App">
      <Header/>
      <div className='container hero-section bg-dark text-center d-flex align-items-center justify-content-center flex-column text-light'>
        <img src={coverImg} alt='profile' className='img'/>
        <div  className='hero-section_body'>
          <p className='hero-section_body-text' style={{fontSize: '28px'}}>
            Hello, my name is
            <span style={{color: '#F41F4E', fontWeight: 'bold'}}>
              <Typewriter 
                words={[' Gerard Obomby']}
                loop={2}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <br/>
            <span>
              I'm a full-stack web developer based in Ghana
            </span>
            <br/>
            <br/>
            <div className='container d-flex justify-content-evenly mt-3'>
              <span className='span-color'>Got a project?</span>
              <a href='mailto:deoobomby@gmail.com' className='text-decoration-none btn btn-outline-danger'>Let's talk</a>
            </div>
          </p><br/>
          <div className='container d-flex justify-content-around align-items-center mb-5'>
            <span className=' circle-icon'>
              <a href='https://linkedin.com/in/gerardobomby'>
                <i class="fa-brands fa-linkedin-in fa-2x"></i>
              </a>             
            </span>
            <span className=' circle-icon-2'>
              <a href='https://github.com/NeoLucem'>
                <i class="fa-brands fa-github fa-2x"></i>
              </a>             
            </span>
            <span className=' circle-icon'>
              <a href='https://wa.me/+233561160094'>
                <i class="fa-brands fa-whatsapp fa-2x"></i>
              </a>             
            </span>
            <span className=' circle-icon-2'>
              <a href='mailto:deoobomby@gmail.com'>
                <i class="fa-sharp fa-solid fa-envelope fa-2x"></i>
              </a>             
            </span>
          </div>
        </div>
      </div>

      {/*about section*/}
      <div className='container-fluid about-section' id='about'>
        <h1 style={{marginBottom: '62px'}} className='about-section_title text-center  mt-5'>I.<span className='about-section_title_colored'>ABOUT ME</span></h1>
        <div className='row gy-5'>
          <div className='col-md-4'>
            <div className='container'>
              <h1>GERARD OBOMBY</h1>
              <p style={{fontSize:'3em'}}>LEAD <span className='text_colored-redpink'>WEB DEVELOPER</span><br/> AND <span className='text_colored-redpink'>WEB DESIGNER</span></p>
              <ul className='icon_list'>
                <li style={{marginRight: '24px'}}><a href='https://github.com/NeoLucem'><i class="fa-brands fa-github fa-2x text_colored-redpink"></i></a></li>
                <li style={{marginRight: '24px'}}><a className='icon_link' href='https://linkedin.com/in/gerardobomby'><i class="fa-brands fa-linkedin fa-2x"></i></a></li>
                <li style={{marginRight: '24px'}}><a href='mailto:deoobomby@gmail.com'><i class="fa-sharp fa-solid fa-envelope fa-2x text_colored-redpink"></i></a></li>
                <li style={{marginRight: '24px'}}><a className='icon_link' href='https://wa.me/+233561160094'><i class="fa-brands fa-whatsapp fa-2x"></i></a></li>
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <p className='about_txt-1'>Hello, I’m a self taugh web developer based in Ghana.
               I started this journey back in 2019 when I first discovered the infinite possibility that IT world and the web provide.
            </p><br/>
            <p className='about_txt-2 text_colored-redpink'>
              Today I’m persuing a Bachelor in science of Information technology at BLUECREST UNIVERSITY COLLGE,
              focusing more in my career goals. Beside my days on campus, I build website for clients and businesses.
            </p>
            <span className='about_txt-3'>
              Here are a few technologies I’ve been working with recently:
            </span><br/><br/>
            <div className='row gy-3'>
              <div className='col-md-4'>
                <span className='d-flex align-items-center'><i class="fa-brands fa-python fa-4x me-3"></i>PYTHON</span>
                <span className='d-flex align-items-center'><i class="fa-brands fa-js fa-4x me-3"></i>JAVASCRIPT</span>
                <span className='d-flex align-items-center'><i class="fa-brands fa-css3-alt fa-4x me-3"></i>CSS</span>
                <span className='d-flex align-items-center'><i class="fa-brands fa-html5 fa-4x me-3"></i>HTML</span>
              </div>
              <div className='col-md-4'>
                <span className='d-flex align-items-center'><i class="fa-brands fa-square-git fa-4x me-3"></i>GIT</span>
                <span className='d-flex align-items-center'><i class="fa-brands fa-node fa-4x me-3"></i>NODE</span>
                <span className='d-flex align-items-center'><i class="fa-brands fa-figma fa-4x me-3"></i>FIGMA</span>
                <span className='d-flex align-items-center'><i class="fa-brands fa-wordpress fa-4x me-3"></i>WORDPRESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ad section section */}
      <div className='container-fluid ads'>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          autoplay={{delay: 1, disableOnInteraction: false}}
          speed={5000}
          loopAdditionalSlides={1}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>DESIGN</SwiperSlide>
          <SwiperSlide>DEVELOPMENT</SwiperSlide>
          <SwiperSlide>STATEGY</SwiperSlide>
          <SwiperSlide>SEO</SwiperSlide>
          <SwiperSlide>DESIGN</SwiperSlide>
          <SwiperSlide>DEVELOPMENT</SwiperSlide>
          <SwiperSlide>STATEGY</SwiperSlide>
          <SwiperSlide>SEO</SwiperSlide>
          <SwiperSlide>DESIGN</SwiperSlide>
        </Swiper>
      </div>

      {/* experience section */}
      <div className="container-fluid experience-section" style={{marginTop: 0}} id='work'>
        <h2 className='text-center experience-section_title' style={{marginTop: 24}}><span className='experience-section_title_black'>II.</span>EXPERIENCE</h2>
        <h4 className='text-center experience-section_title-text'>This is a list of projects and experience accumulated</h4>

        <div className='container'>
          <div className='row gy-3'>
            <div className='col-md-3'>
              <div className="card">
                <img src={coverImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Featured project</h5>
                  <span className='experience-section_card_title'>IDMBSTREAM <a style={{color: "#F41F4E"}} href='https://idmbstream.com'>https://idmbstream.com</a></span><br/><br/>

                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://idmbstream.com" className="btn btn-danger contact-btn">More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="card">
                <img src={coverImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Featured project</h5>
                  <span className='experience-section_card_title'>IDMBSTREAM <a style={{color: "#F41F4E"}} href='https://idmbstream.com'>https://idmbstream.com</a></span><br/><br/>

                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://idmbstream.com" className="btn btn-danger contact-btn">More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="card">
                <img src={coverImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Featured project</h5>
                  <span className='experience-section_card_title'>IDMBSTREAM <a style={{color: "#F41F4E"}} href='https://idmbstream.com'>https://idmbstream.com</a></span><br/><br/>

                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://idmbstream.com" className="btn btn-danger contact-btn">More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="card">
                <img src={coverImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Featured project</h5>
                  <span className='experience-section_card_title'>IDMBSTREAM <a style={{color: "#F41F4E"}} href='https://idmbstream.com'>https://idmbstream.com</a></span><br/><br/>

                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://idmbstream.com" className="btn btn-danger contact-btn">More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* experience_section button container */}
        <div className='container d-flex justify-content-evenly align-items-center mt-5'>
          <a href='33333' className='btn btn-outline-dark resume-btn'>Resume</a>
          <a href='33333' className='btn  btn-danger contact-btn'>Contact me</a>
        </div>
      </div>

      {/* ad section section */}
      <div className='container-fluid ads'>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          autoplay={{delay: 1, disableOnInteraction: false}}
          speed={5000}
          loopAdditionalSlides={1}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>DESIGN</SwiperSlide>
          <SwiperSlide>DEVELOPMENT</SwiperSlide>
          <SwiperSlide>STATEGY</SwiperSlide>
          <SwiperSlide>SEO</SwiperSlide>
          <SwiperSlide>DESIGN</SwiperSlide>
          <SwiperSlide>DEVELOPMENT</SwiperSlide>
          <SwiperSlide>STATEGY</SwiperSlide>
          <SwiperSlide>SEO</SwiperSlide>
          <SwiperSlide>DESIGN</SwiperSlide>
        </Swiper>
      </div>

      {/*Contact us section */}
      <div className="section">
      <div className="container">
        <h2 className='text-center' style={{marginBottom: '2em'}}>Get in touch</h2>
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-info">
              <div className="address mt-2">
                <h4 className="mb-2">Location:</h4>
                <p>
                  B20/40, Lapaz Fish Pond<br/>
                  Accra, Ghana
                </p>
              </div>

              {/*<div className="open-hours mt-4">
                <i className="icon-clock-o"></i>
                <h4 className="mb-2">Open Hours:</h4>
                <p>
                  Sunday-Friday:<br/>
                  11:00 AM - 2300 PM
                </p>
              </div>*/}

              <div className="email mt-4">
                <h4 className="mb-2">Email:</h4>
                <p><a href='mailto:deoobomby@gmail.com' style={{textDecoration: 'none', color: '#F41F4E'}}>gerard@obomby.com</a></p>
              </div>

              <div className="phone mt-4">
                <h4 className="mb-2">Call:</h4>
                <p style={{color: '#f41f4e'}}>+233 56 116 00 94</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <form>
              <div className="row">
                <div className="col-6 mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control"  onChange={(event)=>{setNewName(event.target.value)}} value={newName} placeholder="Your Name"/>
                </div>
                <div className="col-6 mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" onChange={(event)=>{setNewEmail(event.target.value)}} value={newEmail}/>
                </div>
                <div className="col-12 mb-3">
                  <label>Message</label>
                  <textarea   cols="30" rows="7" className="form-control" placeholder="Message" onChange={(event)=>{setNewMessage(event.target.value)}} value={newMessage}></textarea>
                </div>

                
              </div>
            </form>
            <div className="col-12">
                  <button onClick={createMessage} className='btn btn-danger'>Submit</button>
                </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
              <p className='text-center' style={{color: '#000', fontWeight: 'bold', backgroundColor: '#FBFBFB'}}>Copyright 2022 Gerard Obomby. All rights reserved.</p>
    </footer>
           
    </div>
  );
}

export default App;
