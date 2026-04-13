import React, { useRef } from "react";
import Slider from "react-slick";
import { LuCircleArrowLeft, LuCircleArrowRight } from "react-icons/lu";
import offerImg from "../../assets/img/offercards.png";
import "./offerSlider.scss";

const images = Array(5).fill(offerImg);

const OfferSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1240, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 760, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div className="offer-slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt={`offer-${index}`} />
            </div>
          ))}
        </Slider>

        <div className="nav-buttons">
          <button onClick={() => sliderRef.current.slickPrev()}>
            <LuCircleArrowLeft />
          </button>
          <button onClick={() => sliderRef.current.slickNext()}>
            <LuCircleArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default OfferSlider;
