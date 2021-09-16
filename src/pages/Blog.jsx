import React, {useEffect, useState} from 'react';
import SectionSteps from "../components/cars-steps/SectionSteps";
import getOurTeam from "../api/getOurTeam";
import getSteps from "../api/getSteps";
import SiteSections from "../components/site-sections/SiteSections";
import Pagination from "../components/cars-section-cards/Pagination";
import getHomeOurBlog from "../api/getHomeOurBlog";
import CardOurBlog from "../components/home-our-blog/CardOurBlog";
import CardBlog from "../components/blog/CardBlog";
import BlockFirst from "../components/block-first/BlockFirst";

const Blog = () => {

  const [steps, setSteps] = useState({})
  const [homeOurBlog, setHomeOurBlog] = useState({})

  useEffect(() => {

    getSteps().then(function (result) {
      setSteps(result)

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
      <BlockFirst title={<h2 className="text-white">Our For Rent Cars</h2>} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>

      <SiteSections classSection="bg-light">
        <div className="row">

          { homeOurBlog.cards && homeOurBlog.cards.map(card => <CardBlog data={card} />) }
          { homeOurBlog.cards && homeOurBlog.cards.map(card => <CardBlog data={card} />) }
          <Pagination />
        </div>
      </SiteSections>
      <SectionSteps data={steps} />
    </>
  );
};

export default Blog;
