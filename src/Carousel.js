import React, { Component } from 'react';
import "./carousel.scss";

class Carousel extends Component {
  render() {
    const { showLeftArrow, showRightArrow } = this.state;
    const classes = `${this.props.classes ? " " + this.props.classes : ""} ${
      this.props.sliderType === "grid" ? "gridSlider" : ""
    } ${this.props.sliderType === "fullScreen" ? "fullScreen-slider" : ""}`;
    const showArrowBg = this.props.showArrowBg ? true : false;
    const slideUnit = this.props.postslider ? "px" : "%";
    const { hideArrow } = this.props;

    return (
      <div onMouseEnter={this.clearTimer} onMouseLeave={this.startCarousel} id="ns-carousel"
        ref={div => {
          this.carousel = div;
        }}
      >
        {!hideArrow && showLeftArrow && (showArrowBg ? (
            <div
              className="arrowBg arrowBg-left arrowClick"
              onClick={this.slideLeft}
            >
              <i className="fa fa-chevron-left" />
            </div>
          ) : (
            this.arrowMaker("leftArrow")
          ))}
        {!hideArrow && showRightArrow && (showArrowBg ? (
            <div
              className="arrowBg arrowBg-right arrowClick"
              onClick={this.slideRight}
            >
              <i className="fa fa-chevron-right" />
            </div>
          ) : (
            this.arrowMaker("leftArrow")
          ))}
        <div
          className="carousel-inner-container"
          style={{
            transform: `translateX(${this.state.transform}${slideUnit})`
          }}
          ref={div => {
            this.carouselInnerContent = div;
          }}
        >
          {this.props.children.map((slide, index) => {
            return (
              <div className={"carousel-item"} key={index}>
                {slide}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


