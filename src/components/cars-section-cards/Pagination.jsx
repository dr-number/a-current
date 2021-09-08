import React from 'react';
import {Link} from "react-router-dom";

const Pagination = ({countPages, currentPages}) => {



  return (
    <div>
      <div className="col-12">

        {
        //todo
        }

        <span className="p-3">1</span>
        <Link to="#" className="p-3">2</Link>
        <Link to="#" className="p-3">3</Link>
        <Link to="#" className="p-3">4</Link>
      </div>
    </div>
  );
};

export default Pagination;