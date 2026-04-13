import React from "react";
import "./searchbar.scss";
import { FiMapPin, FiCalendar, FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar-wrapper">
        <div className="container">
          <div className="search-bar">
            <div className="field city">
              <label>City</label>
              <div className="input">
                <FiMapPin className="icon" />
                <input type="text" placeholder="Coimbatore, Tamilnadu" />
              </div>
            </div>

            <div className="field start-date">
              <label>Starting Date</label>
              <div className="input">
                <FiCalendar className="icon" />
                <input type="date" />
              </div>
            </div>

            <div className="field end-date">
              <label>End Date</label>
              <div className="input">
                <FiCalendar className="icon" />
                <input type="date" />
              </div>
            </div>

            <button className="search-btn">
              <FiSearch />
              Search
            </button>
          </div>
          <p className="rent-duration">Duration: 1 day , 14 hrs</p>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
