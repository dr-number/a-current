import React from 'react';

const CardTestimony = ({data}) => {
  return (
    <div key={data.id} className="col-lg-4 mb-4 mb-lg-0">
      <div className="testimonial-2">
        <blockquote className="mb-4">
          <p>{data.title}</p>
        </blockquote>
        <div className="d-flex v-card align-items-center">
          <img src={data.img} alt={data.alt} className="img-fluid mr-3" />
            <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CardTestimony;
