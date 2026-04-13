import offerIcon from "../../assets/img/cardsoffer.svg";
import carImage from "../../assets/img/cardscar.png";
import rightBg from "../../assets/img/cardsbg2.png";
import "./cards.scss";
import { FaCar } from "react-icons/fa";

export default function Cards() {
  return (
    <>
      <div className="container">
        <div className="cards-wrapper">
          <div className="left-card">
            <h3>LET'S TRAVEL TOGETHER!</h3>
            <p className="left-card-content">
              With Valam, every mile turns into a personal <br /> adventure on
              the road.
            </p>
          </div>

          <div
            className="right-card"
            style={{ backgroundImage: `url(${rightBg})` }}
          >
            <div className="right-content">
              <div className="ride-safe">
                <FaCar className="ride-icon" />
                <span>Ride Safe with Valam</span>
              </div>

              <p className="descriptions">
                Drive into Deals & Enjoy Exclusive,
                <br />
                Discounts – Limited Time Offer
              </p>

              <div className="offer">
                <img src={offerIcon} alt="Offer" />
                <span>Get Rs 500/- OFF</span>
              </div>
            </div>

            <div className="car">
              <img src={carImage} alt="Car" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
