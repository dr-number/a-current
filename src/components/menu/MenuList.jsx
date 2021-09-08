import React from 'react';
import {privateRouters} from "../../router/Routs";
import {Link} from "react-router-dom";

const MenuList = ({pathname}) => {
  return (
    <>
      {
        privateRouters.map(item =>
          <li className={pathname == item.path ? "active" : ""}>
            <Link className="nav-link" exact={item.exact} to={item.path}>{item.title}</Link>
          </li>
        )
      }
    </>
  );
};

export default MenuList;