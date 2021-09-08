import React from 'react';
import {Link} from "react-router-dom";

const CardOurBlog = ({data}) => {
  return (
    <div key={data.id} className="col-lg-4 col-md-6 mb-4">
      <div className="post-entry-1 h-100">
        <Link to="/single/:data.id">
          <img src={data.img} alt={data.alt} className="img-fluid" />
        </Link>
        <div className="post-entry-1-contents">

          <h2><Link to="/single/:data.id">{data.title}</Link></h2>
          <span className="meta d-inline-block mb-3">{data.date}<span className="mx-2">by</span>
            <a
            href="#">{data.author}</a></span>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOurBlog;