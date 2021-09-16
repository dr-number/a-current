import React from 'react';

const TextWithImage = ( {data, isRightImg} ) => {

  const classDef = "col-lg-6 mb-5 mb-lg-0"

  return (
    <div className="row">
      <div className={isRightImg ? [classDef, "order-lg-2"].join(' ') : classDef } >
        <img src={data.img} alt={data.alt} className="img-fluid"/>
      </div>
      <div className={ isRightImg ? "col-lg-4 mr-auto" : "col-lg-4 ml-auto"}>
        <h2>{ data.title }</h2>
        { data.text }
      </div>
    </div>
  );
};

export default TextWithImage;
