import React from 'react';

const CardOurTeam = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <div className="post-entry-1 h-100 person-1">

        <img src="images/person_1.jpg" alt={ data.alt } className="img-fluid" />

          <div className="post-entry-1-contents">
            <span className="meta">{ data.meta }</span>
            <h2>{ data.title }</h2>
            <p>{ data.text }</p>
          </div>
      </div>
    </div>
  );
};

export default CardOurTeam;
