import React from 'react';
import {Link} from "react-router-dom";

const CardBlog = ( {data} ) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="post-entry-1 h-100">
        <Link to={`/single/${data.id}`} >
          <img src={data.img} alt={data.alt} className="img-fluid" />
        </Link>
        <div className="post-entry-1-contents">

          <h2><Link  to={`/single/${data.id}`} >{data.title}</Link></h2>
          <span className="meta d-inline-block mb-3">{data.date}<span className="mx-2">by</span>
            <Link to={`/author/${data.authorId}`}>{data.author}</Link></span>
            <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
