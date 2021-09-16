import React from 'react';

const Step = ({data}) => {
  return (
      <div className="step">
        <span className="number"><span>{data.number}</span></span>
        <span className="caption">{data.caption}</span>
      </div>
  );
};

export default Step;
