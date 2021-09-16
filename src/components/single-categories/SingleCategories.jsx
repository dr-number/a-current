import React from 'react';
import {Link} from "react-router-dom";

const SingleCategories = ({data}) => {

  console.log(data)

  return (
    <div className="categories">
      <h3>Categories</h3>
      {
        data && data.map(item => <li><Link to={item.link}>{item.title}<span>({item.count})</span></Link></li>)
      }
    </div>
  );
};

export default SingleCategories;
