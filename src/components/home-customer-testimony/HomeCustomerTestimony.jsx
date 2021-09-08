import React from 'react';
import CardTestimony from "./CardTestimony";

const HomeCustomerTestimony = ({data}) => {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-7 text-center mb-5">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>
        <div className="row">

          {
            data.cards.map(item => <CardTestimony data={item}/>)
          }

        </div>
      </div>
    </div>
  );
};

export default HomeCustomerTestimony;