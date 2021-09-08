import React from 'react';
import bg from '../../images/hero_2.jpg'

const BlockFirst = ({title, children}) => {
  return (
    <div className="ftco-blocks-cover-1">
      <div className="ftco-cover-1 overlay innerpage" style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              {title}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFirst;