import React from 'react';
import Card from "./Card";
import Pagination from "./Pagination";

const SectionCards = ({arrayData}) => {
  return (
    <>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">

            { arrayData.map(item =>
              <div className="col-lg-4 col-md-6 mb-4">
                <Card data={item} />
              </div>
            ) }

            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCards;