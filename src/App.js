import React from "react";
import "./App.css";
import Carousel from "./carousel/index";

function App() {
  return (
    <div className="App" style={{paddingBottom:"100px"}}>
      <h2>Grid Carousel</h2>
      <Carousel autoScroll={false} showArrowBg={true} sliderType="grid">
        <img src="https://via.placeholder.com/300X400&text=slide1" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide2" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide3" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide4" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide5" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide6" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide7" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide8" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide9" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide10" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide11" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide12" alt="" />
        <img src="https://via.placeholder.com/300X400&text=slide13" alt="" />
      </Carousel>
      {/*  <h2>FullScreen Carousel</h2>
      <Carousel
        autoScroll={true}
        autoScrollTimer={1500}
        classes="fullScreen-slider"
        hideArrow={false}
        leftArrow="<"
        rightArrow=">"
      >
        <img src="/images/flower1.jpg" alt="" />
        <img src="/images/flower2.jpg" alt="" />
        <img src="/images/flower3.jpg" alt="" />
        <img src="/images/forest1.jpg" alt="" />
        <img src="/images/forest2.jpg" alt="" />
        <img src="/images/forest3.jpg" alt="" />
      </Carousel> */}
      <h2>FullScreen Carousel</h2>
      <Carousel sliderType="fullScreen" autoScroll={false} showArrowBg={true}>
        <img src="https://via.placeholder.com/1440X400&text=slide1" alt="" />
        <img src="https://via.placeholder.com/1440X400&text=slide2" alt="" />
        <img src="https://via.placeholder.com/1440X400&text=slide3" alt="" />
        <img src="https://via.placeholder.com/1440X400&text=slide4" alt="" />
        <img src="https://via.placeholder.com/1440X400&text=slide5" alt="" />
        <img src="https://via.placeholder.com/1440X400&text=slide6" alt="" />
      </Carousel>
    </div>
  );
}

export default App;
