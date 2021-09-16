import React from 'react';

const SiteSections = ({children, idSection, classSection}) => {
  return (
    <div id={idSection} className={ ["site-section", classSection].join(" ") }>
      <div className="container">
        { children }
      </div>
    </div>
  );
};

export default SiteSections;
