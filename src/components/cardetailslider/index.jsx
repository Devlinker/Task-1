import { useRef } from "react";
import Slider from "react-slick";
import "./carddetailslider.scss";
import car1 from "../../assets/img/cardcar1.svg";
import car2 from "../../assets/img/cardcar2.svg";
import car3 from "../../assets/img/cardcar3.svg";
import car4 from "../../assets/img/cardcar1.svg";
import car5 from "../../assets/img/cardcar2.svg";

const images = [car1, car2, car3, car4, car5];

export default function CardDetailSlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, i) => (
            <div className="card" key={i}>
              <img src={img} alt={`car-${i}`} />
            </div>
          ))}
        </Slider>

        <button
          className="arrow left"
          onClick={() => sliderRef.current.slickPrev()}
        >
          ‹
        </button>

        <button
          className="arrow right"
          onClick={() => sliderRef.current.slickNext()}
        >
          ›
        </button>
      </div>
    </>
  );
}
