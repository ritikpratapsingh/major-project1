import React from 'react'
import { useEffect } from 'react';
import "./App.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'




gsap.registerPlugin(ScrollTrigger)

function App() {
  

  useEffect(()=>{
    gsap.to(".main2",{
      backgroundColor:"white",
      color:"black",
      scrollTrigger:{
        trigger: ".main",
       //scroller: ".main2",
        //markers:true,
      //delay:2,
        start: "top -100%",
        end: "top -110%",
        scrub: 3,
        
      }

    })
  })




  useEffect(()=>{
    gsap.to(".main3",{
      backgroundColor:"#0F0D0D",
      color:"white",
      scrollTrigger:{
        trigger: ".main",
      // scroller: ".main3",
        markers:true,
      //delay:2,
        start: "top -280%",
        end: "top -300%",
        scrub: 3,
        
      }

    })
  })

 

  


  return (
    
    <>
  
    <div className='main'>
      <div className="nav">
          <h4>HOME</h4>
          <h4>WORK</h4>
          <h4>STUDIO</h4>
          <h4>CONTACT US</h4>
          <h4>ABOUT</h4>
      </div>

      <div className="main-text">
        <h1>
          Digitally Crafted
        </h1>
        <h2>
          Brand Experinces
        </h2>
      </div>
    </div>
    
    
    
    
    
    <div className="main2"> 
      <h3 className='f-h3'>
        We Are Duo-Studio
      </h3>
      <div className="page2-container">
          <div className="page2-left">
              <h3 className="sec-h3">
              A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL
              </h3>
            </div>
            <div className="page2-right">
              <p>We weave together bold strategy and creative execution to produce thought-provoking digital experiences. We take a highly personalized approach to delivering branding, web design, and content marketing solutions. Born in the DC area - now serving clients worldwide.</p>
              <button>About Us</button>
            </div>
          </div>
    </div>


    <div className="main3">
      <h1>
        Selected Works
      </h1>
      <div className="page3-part1">
        <img src="https://d33wubrfki0l68.cloudfront.net/aa3d2ff66de5f16336bd94fd68c3c2ce61e29f68/d5064/assets/home/home-casestudy-mgny.webp" alt="" />
        <video autoPlay loop muted
                    src="https://d33wubrfki0l68.cloudfront.net/a13ea7c2ca2f38134748966280e54af4340ce821/f976d/assets/home/projects_madegood-reduced.mp4"></video>
      </div>

      <div className="page4">
      <div className="elem">
        <img src="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="text-div">
          <h1>Stategy</h1>
          <h1>Strategy</h1>
        </div>
        <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt="" />
      </div>

      <div className="elem">
        <img src="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="text-div">
          <h1>Idetity</h1>
          <h1>Idetityy</h1>
        </div>
        <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt="" />
      </div>

      <div className="elem">
        <img src="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="text-div">
          <h1>Experience</h1>
          <h1>Experience</h1>
        </div>
        <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt="" />
      </div>

      
    </div>

    <div class="page5">
            <h2>Mentions Clients</h2>
            <div class="box"
                data-image="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div class="box"
                data-image="https://images.unsplash.com/photo-1688232543149-5602b136ba11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div class="box"
                data-image="https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div class="box"
                data-image="https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div class="box"
                data-image="https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
        </div>
      
    </div>
        
      
    
    
    </>
  )
}

export default App