import React, {useContext} from 'react';
import FooterListUnstyled from "./footer-list-unstyled";
import Copyright from "./copyright";
import {MainContext} from "../../content";

const Footer = () => {
  const mainContext = useContext(MainContext)
  const data = mainContext.dataFooter

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">{data.title}</h2>
            <p>{data.text}</p>
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
                <FooterListUnstyled data={data.listsUnstyled}/>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <Copyright />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;