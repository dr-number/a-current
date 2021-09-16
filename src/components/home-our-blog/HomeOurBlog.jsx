import React from 'react';
import CardOurBlog from "./CardOurBlog";

const HomeOurBlog = ({data}) => {
  return (
    <div className="site-section bg-white">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-7 text-center mb-5">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>

        <div className="row">

          {
            data.cards && data.cards.map(card => <CardOurBlog data={card} />)
          }

        </div>
      </div>
    </div>
  );
};

export default HomeOurBlog;
