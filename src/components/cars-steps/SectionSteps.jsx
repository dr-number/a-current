import React from 'react';
import Step from "./Step";

const SectionSteps = ({data}) => {

  //console.log(data.steps)
  //data.steps.map(step => console.log(step) )
  //return(<></>)

  return (
    <div className="container site-section mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-7 text-center mb-5">
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </div>
      <div className="how-it-works d-flex">

        {
          data.steps && data.steps.map(step => <Step data={step} /> )
        }

      </div>
    </div>
  );
};

export default SectionSteps;
