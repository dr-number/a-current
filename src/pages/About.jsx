import React, {useEffect, useState} from 'react';
import BlockFirst from "../components/block-first/BlockFirst";
import SiteSections from "../components/site-sections/SiteSections";

import getOurTeam from "../api/getOurTeam";
import CardOurTeam from "../components/meet-our-team/CardOurTeam";
import TextWithImage from "../components/site-sections/TextWithImage";

import bgCarCompany from "../images/hero_2.jpg";
import bgOurHistory from "../images/hero_1.jpg";
import SectionSteps from "../components/cars-steps/SectionSteps";
import getSteps from "../api/getSteps";

const About = () => {

  const [ourTeam, setOurTeam] = useState([])
  const [steps, setSteps] = useState({})

  useEffect(() => {

    getOurTeam().then(function (result) {
      setOurTeam(result)

    }, function (error) {
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
      <BlockFirst title={<h2 className="text-white">About Us</h2>} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>
      <SiteSections>
        <TextWithImage isRightImg data={
          {
            title: "Car Company",
            img: bgCarCompany,
            text: <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium
            eius nulla quam laudantium sequi.</p>
          <p>Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid
          delectus cum ipsa?</p></>}
        } />
      </SiteSections>

      <SiteSections classSection="bg-light" classNameRow="justify-content-center text-center mb-5 section-2-title">

        <div className="row justify-content-center text-center mb-5 section-2-title" >
          <div className="col-md-6">
            <span className="text-primary">Our Team</span>
            <h2 className="mb-4">Meet Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius ratione velit, voluptas
              laborum nemo quas ad necessitatibus placeat?</p>
          </div>
        </div>

        <div className="row align-items-stretch">
          { ourTeam.map( item => <CardOurTeam data={item}/> )}
        </div>

      </SiteSections>

      <SiteSections>
        <TextWithImage data={
          {
            title: "Our History",
            img: bgOurHistory,
            text: <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium
            eius nulla quam laudantium sequi.</p>
          <p>Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid
          delectus cum ipsa?</p></>}
        } />
      </SiteSections>

      <SectionSteps data={steps} />
    </>
  );
};

export default About;
