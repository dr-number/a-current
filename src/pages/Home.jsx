import React, {useEffect, useState} from 'react';
import HomeBlockFirst from "../components/home-block-first/HomeBlockFirst";
import HomeOurOffer from "../components/home-block-first/HomeOurOffer";
import BlockFirst from "../components/block-first/BlockFirst";
import HomeServices from "../components/home-block-first/HomeServices";
import SectionSteps from "../components/cars-steps/SectionSteps";
import HomeCustomerTestimony from "../components/home-customer-testimony/HomeCustomerTestimony";

import HomeOurBlog from "../components/home-our-blog/HomeOurBlog";
import getOurServices from "../api/getOurServices";
import getSteps from "../api/getSteps";
import getTestimony from "../api/getTestimony";
import getHomeOurBlog from "../api/getHomeOurBlog";

const Home = () => {

  const [ourServices, setOurServices] = useState([])
  const [steps, setSteps] = useState({})
  const [testimony, setTestimony] = useState({})
  const [homeOurBlog, setHomeOurBlog] = useState({})

  useEffect(() => {

    getOurServices().then(function (result) {
      setOurServices(result)
      //console.log(ourServices)

    }, function (error) {
      //setMessage(error.toString());
      console.log(error);
    })

    getSteps().then(function (result) {
      setSteps(result)

    }, function (error) {
      console.log(error);
    })

    getTestimony().then(function (result) {
      setTestimony(result)

    }, function (error) {
      console.log(error);
    })

    getHomeOurBlog().then(function (result) {
      setHomeOurBlog(result)

    }, function (error) {
      console.log(error);
    })

  },[])

  return (
    <>
      <HomeBlockFirst />
      <HomeOurOffer />
      <BlockFirst title={<h2 className="text-white">Our services</h2>}>
        <div className="row">
          { ourServices.map( item => <HomeServices key={item.id} data={item} /> ) }

        </div>
      </BlockFirst>

      <SectionSteps data={steps} />
      <HomeCustomerTestimony data={testimony} />

      <HomeOurBlog data={homeOurBlog} />
    </>
  );
}

export default Home;
