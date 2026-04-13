import React, { useRef, useState } from "react";
import "./brandslider.scss";
import honda from "../../assets/brandimg/honda.png";
import maruti from "../../assets/brandimg/suzuki.png";
import tata from "../../assets/brandimg/tata.png";
import vw from "../../assets/brandimg/volkswagen.png";
import hyundai from "../../assets/brandimg/hyundai.png";
import toyota from "../../assets/brandimg/toyota.png";
import Slider from "react-slick";

const brands = [
  honda,
  hyundai,
  tata,
  vw,
  maruti,
  toyota,
  honda,
  hyundai,
  tata,
  vw,
  maruti,
  toyota,
];

const PER_FRAME = 9;
const FRAMES = Math.ceil(brands.length / PER_FRAME);

export default function BrandSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? FRAMES - 1 : current - 1);
  };
  const sliderRef = useRef(null);

  // const settings = {
  //   infinite: true,
  //   vertical: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   cssEase: "linear",
  //   swipeToSlide: true,
  //   draggable: true,
  //   variableWidth: true,
  // };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    slidesToShow: 9,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const next = () => {
    setCurrent(current === FRAMES - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div className="container">
        <div className="brandslidermobile">
          <h3 className="container-titile">Popular Brands</h3>
          <Slider ref={sliderRef} {...settings}>
            {brands.map((img, i) => (
              <div className="slide-item" key={i}>
                <img src={img} alt="brand" />
              </div>
            ))}
          </Slider>

          <div className="arrows">
            <button onClick={() => sliderRef.current.slickPrev()}>‹</button>
            <button onClick={() => sliderRef.current.slickNext()}>›</button>
          </div>
        </div>
      </div>
    </>
  );
}
