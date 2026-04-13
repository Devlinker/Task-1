import React, { useRef } from "react";
import Slider from "react-slick";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "./vacationslider.scss";
import img1 from "../../assets/vacationimg/vacationimg1.png";
import img2 from "../../assets/vacationimg/vacationimg2.png";
import img3 from "../../assets/vacationimg/vacationimg3.png";
import img4 from "../../assets/vacationimg/vacationimg4.png";
import img5 from "../../assets/vacationimg/vacationimg5.png";
import img6 from "../../assets/vacationimg/vacationimg1.png";
import img7 from "../../assets/vacationimg/vacationimg2.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function TravelSlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 425,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="travel-wrapper">
        <div className="container">
          <div className="header ">
            <h3>Where to next vacation trip?</h3>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {images.map((img, i) => (
              <div className="vacationcard" key={i}>
                <img src={img} alt={`place-${i}`} />
                <div className="info"></div>
              </div>
            ))}
          </Slider>

          <div className="nav-buttons">
            <button onClick={() => sliderRef.current.slickPrev()}>
              <LuChevronLeft />
            </button>
            <button onClick={() => sliderRef.current.slickNext()}>
              <LuChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
