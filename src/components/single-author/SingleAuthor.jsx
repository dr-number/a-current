import React from 'react';
import {Link} from "react-router-dom";

const SingleAuthor = ({data}) => {
  return (
    <>
      <img src="images/person_1.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid mb-4 w-50 rounded-circle" />
      <h3 className="text-black">data.title}</h3>
      <p>data.text}</p>
      <p><Link to="#" className="btn btn-primary btn-md text-white">Read More</Link></p>
    </>
  );
};

export default SingleAuthor;
