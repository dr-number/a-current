import React from 'react';

const HomeServices = ({data}) => {

  return (
    <div className="col-lg-4">
      <div className="service-1">
              <span className="service-1-icon">
                <span className={data.classIco} />
              </span>
        <div className="service-1-contents">
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;