import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Title from './Components/Title';
import Programs from './Components/Programs';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';

function App() {

  const [playState,setPlayState] = useState(false);


  return (
    <div >
      <Navbar/>
      <Hero/>
      <Title title="OUR PROGRAM" subTitle="What We Offer"/>
      <div className='pl-[10%] pr-[10%]'>
        <Programs/>
        <About playState={playState} setPlayState={setPlayState}/>
        <Title title="GALLERY" subTitle="Campus Photos"/>
        <Gallery/>
        <Title title="TESTIMONIALS" subTitle="What Student Says"/>
        <Testimonial/>
        <Title title="CONTACT US" subTitle="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;