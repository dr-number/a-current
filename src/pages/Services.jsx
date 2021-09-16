import React, {useEffect, useState} from 'react';
import BlockFirst from "../components/block-first/BlockFirst";
import SectionSteps from "../components/cars-steps/SectionSteps";
import HomeServices from "../components/home-block-first/HomeServices";
import getOurServices from "../api/getOurServices";
import getSteps from "../api/getSteps";
import SiteSections from "../components/site-sections/SiteSections";

const Services = () => {

  const [ourServices, setOurServices] = useState([])
  const [steps, setSteps] = useState({})

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

  },[])

  return (
    <>
      <BlockFirst title={<h2 className="text-white">Our For Rent Cars</h2>} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>

      <SiteSections>
          { ourServices.map( item => <HomeServices key={item.id} isDark={true} data={item} /> ) }
      </SiteSections>

      <SectionSteps data={steps} />
    </>
  );
};

export default Services;
