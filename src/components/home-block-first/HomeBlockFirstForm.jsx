import React from 'react';

const HomeBlockFirstForm = () => {
  return (
    <div className="site-section pt-0 pb-0 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <form className="trip-form">
              <div className="row align-items-center mb-4">
                <div className="col-md-6">
                  <h3 className="m-0">Begin your trip here</h3>
                </div>
                <div className="col-md-6 text-md-right">
                  <span className="text-primary">32</span> <span>cars available</span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="cf-1">Where you from</label>
                  <input type="text" id="cf-1" placeholder="Your pickup address" className="form-control" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="cf-2">Where you go</label>
                  <input type="text" id="cf-2" placeholder="Your drop-off address" className="form-control" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="cf-3">Journey date</label>
                  <input type="text" id="cf-3" placeholder="Your pickup address"
                         className="form-control datepicker px-3" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="cf-4">Return date</label>
                  <input type="text" id="cf-4" placeholder="Your pickup address"
                         className="form-control datepicker px-3" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlockFirstForm;