import React from 'react';

const SiteSections = ({children, classNameRow, classSection}) => {
  return (
    <div className={ ["site-section", classSection].join(" ") }>
      <div className="container">
        { children }
      </div>
    </div>
  );
};

export default SiteSections;
