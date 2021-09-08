import React from 'react';
import {Link} from "react-router-dom";

const FooterListUnstyled = ({data}) => {

  return (

      data.map(item =>

        <div key={item.id} className="col-lg-3">
          <h2 className="footer-heading mb-4">{item.title}</h2>
          <ul className="list-unstyled">

            {
              item.links.map( link =>
                <li key={link.id}><Link to={link.href}>{link.title}</Link></li>
              )
            }

          </ul>
        </div>

      )

  );
};

export default FooterListUnstyled;