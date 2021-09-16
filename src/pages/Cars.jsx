import React, {useEffect, useState} from 'react';
import BlockFirst from "../components/block-first/BlockFirst";
import SectionCards from "../components/cars-section-cards/SectionCards";
import SectionSteps from "../components/cars-steps/SectionSteps";

import getSteps from "../api/getSteps";
import getCars from "../api/getCars";


const Cars = () => {

  const [steps, setSteps] = useState({})
  const [cars, setCars] = useState([])

  useEffect(() => {

  getSteps().then(function (result) {
    setSteps(result)

  }, function (error) {
    console.log(error);
  })

    getCars().then(function (result) {
      setCars(result)

    }, function (error) {
      console.log(error);
    })

  },[])

  return (
    <>
      <BlockFirst title={<h2 className="text-white">Our For Rent Cars</h2>} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>
      <SectionCards arrayData={cars}/>
      <SectionSteps data={steps} />
    </>
  );
};

export default Cars;
