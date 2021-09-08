import React from 'react';

const Raiting = ({value}) => {

  const drawRaiting = () => {
    let content = []

    for (let i = 1; i < 5; i++) {
      content.push(<span key={i} className={value >= i ? "icon-star text-warning" : "icon-star"} />)
    }
    return content
  }

  return (
    <div className="rating">{drawRaiting()}</div>
  );
};

export default Raiting;