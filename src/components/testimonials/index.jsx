import React from "react";
import "./testimonials.scss";

const reviews = [
  {
    id: 1,
    name: "Suresh Kumar",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 2,
    name: "Raj",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/50?img=5",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="container">
        <div className="testimonials">
          <div className="testimonials-content">
            <div className="summary">
              <div className="left-side">
                <h4>Happy customers</h4>
                <div className="rating">
                  <span className="score">4.8</span>
                  <span className="out-of">/5</span>
                </div>

                <div className="stars">★★★★★</div>
                <p className="count">120 ratings</p>
              </div>
              <div className="bars">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div className="bar-row" key={star}>
                    <span>{star} Star</span>
                    <div className="bar">
                      <div
                        className="fill"
                        style={{ width: `${(star / 5) * 150}px` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reviews">
            {reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="header">
                  <img src={review.avatar} alt={review.name} />
                  <div>
                    <h5>{review.name}</h5>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
