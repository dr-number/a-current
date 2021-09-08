import React from 'react';
import {Link} from "react-router-dom";
import Raiting from "./Raiting";

const Card = ({data}) => {

  return (
      <div className="item-1">
        <Link to="#"><img src={data.img} alt={data.alt} className="img-fluid" /></Link>
        <div className="item-1-contents">
          <div className="text-center">
            <h3><Link to={data.hrefMore}>{data.title}</Link></h3>

            <Raiting value={data.raiting}/>
            <div className="rent-price"><span>{data.price}/</span>day</div>
          </div>
          <ul className="specs">
            <li>
              <span>Doors</span>
              <span className="spec">{data.doors}</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="spec">{data.seats}</span>
            </li>
            <li>
              <span>Transmission</span>
              <span className="spec">{data.Transmission}</span>
            </li>
            <li>
              <span>Minium age</span>
              <span className="spec">{data.MiniumAge}</span>
            </li>
          </ul>
          <div className="d-flex action">
            <Link to="contact.html" className="btn btn-primary">Rent Now</Link>
          </div>
        </div>
      </div>
  );
};

export default Card;