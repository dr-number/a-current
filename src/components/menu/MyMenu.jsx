import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {privateRouters} from "../../router/Routs";
import MenuList from "./MenuList";

const MyMenu = () => {
  const pathname = useLocation().pathname;

  return (
      <>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <MenuList pathname={pathname} />
            </ul>
          </div>
        </div>
        <header className="site-navbar site-navbar-target" role="banner">

          <div className="container">
            <div className="row align-items-center position-relative">

              <div className="col-3 ">
                <div className="site-logo">
                  <a href="index.html">CarRent</a>
                </div>
              </div>

              <div className="col-9  text-right">


                <span className="d-inline-block d-lg-none">
                  <a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white active">
                    <span className="icon-menu h3 text-white"/></a></span>


                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                  <ul className="site-menu main-menu js-clone-nav ml-auto ">
                    <MenuList pathname={pathname} />
                  </ul>
                </nav>
              </div>


            </div>
          </div>

        </header>
      </>
  );
};

export default MyMenu;