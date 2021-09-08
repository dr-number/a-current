import React from 'react';

const Step = ({number, caption}) => {
  return (
      <div className="step">
        <span className="number"><span>{number}</span></span>
        <span className="caption">{caption}</span>
      </div>
  );
};

export default Step;