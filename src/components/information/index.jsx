import "./information.scss";
import priceIcon from "../../assets/img/money.png";
import carIcon from "../../assets/img/outlinecar.png";
import clockIcon from "../../assets/img/money1.png";
import bookIcon from "../../assets/img/steering.png";
import serviceIcon from "../../assets/img/cardrive.png";
import homeIcon from "../../assets/img/parking.png";

export default function Information() {
  return (
    <>
      <div className="container">
        <h3 className="why-title">
          Coimbatore Car Rental: Real Time Information
        </h3>

        <div className="stats">
          <div className="stats__item">
            <img src={priceIcon} alt="price" />
            <div>
              <h4>₹1500</h4>
              <p>Avg Daily Price</p>
            </div>
          </div>

          <div className="stats__item">
            <img src={carIcon} alt="car" />
            <div>
              <h4>Swift</h4>
              <p>Most Popular Model</p>
            </div>
          </div>

          <div className="stats__item">
            <img src={clockIcon} alt="rate" />
            <div>
              <h4>₹120</h4>
              <p>Cheapest Rate</p>
            </div>
          </div>

          <div className="stats__item">
            <img src={priceIcon} alt="rating" />
            <div>
              <h4>
                4.8 <span className="stars">★★★★★</span>
              </h4>
              <p>Avg Rating all cars</p>
            </div>
          </div>
        </div>

        <h3 className="why-title">Why Valam?</h3>

        <div className="why">
          <div className="why__card">
            <img src={bookIcon} alt="" />
            <div>
              <h4>Book with flexibility</h4>
              <p>Filter for cars with free cancellation, unlimited mileage.</p>
            </div>
          </div>

          <div className="why__card">
            <img src={serviceIcon} alt="" />
            <div>
              <h4>Well maintained cars</h4>
              <p>Regular service & inspections before each trip.</p>
            </div>
          </div>

          <div className="why__card">
            <img src={homeIcon} alt="" />
            <div>
              <h4>Home delivery & return</h4>
              <p>On-time doorstep service at your preferred location.</p>
            </div>
          </div>

          <div className="why__card">
            <img src={homeIcon} alt="" />
            <div>
              <h4>Price transparency</h4>
              <p>No hidden costs. What you see is what you pay.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
