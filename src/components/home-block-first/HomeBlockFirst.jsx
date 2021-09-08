import React from 'react';
import bg from '../../images/hero_1.jpg'
import HomeBlockFirstForm from "./HomeBlockFirstForm";

const HomeBlockFirst = () => {
  return (
    <>
    <div className="ftco-blocks-cover-1">
      <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${bg})`}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="feature-car-rent-box-1">
                <h3>Range Rover S7</h3>
                <ul className="list-unstyled">
                  <li>
                    <span>Doors</span>
                    <span className="spec">4</span>
                  </li>
                  <li>
                    <span>Seats</span>
                    <span className="spec">6</span>
                  </li>
                  <li>
                    <span>Lugage</span>
                    <span className="spec">2 Suitcase/2 Bags</span>
                  </li>
                  <li>
                    <span>Transmission</span>
                    <span className="spec">Automatic</span>
                  </li>
                  <li>
                    <span>Minium age</span>
                    <span className="spec">Automatic</span>
                  </li>
                </ul>
                <div className="d-flex align-items-center bg-light p-3">
                  <span>$150/day</span>
                  <a href="contact.html" className="ml-auto btn btn-primary">Rent Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <HomeBlockFirstForm />
    </>
  );
};

export default HomeBlockFirst;