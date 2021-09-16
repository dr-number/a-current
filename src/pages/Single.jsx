import React, {useEffect, useState} from 'react';
import BlockFirst from "../components/block-first/BlockFirst";
import getSingle from "../api/getSingle";
import SiteSections from "../components/site-sections/SiteSections";
import getOurServices from "../api/getOurServices";
import getSteps from "../api/getSteps";
import getTestimony from "../api/getTestimony";
import getHomeOurBlog from "../api/getHomeOurBlog";
import SingleSearchForm from "../components/forms/SingleSearchForm";
import SingleCategories from "../components/single-categories/SingleCategories";
import SingleAuthor from "../components/single-author/SingleAuthor";
import SingleParagraph from "../components/single-paragraph/SingleParagraph";

const Single = ({match}) => {

  const [data, setData] = useState([])
  const id = match.params.id

  useEffect(() => {

    getSingle(id).then(function (result) {
      setData(result)

    }, function (error) {
      console.log(error);
    })

  },[])


  const title = <span className="d-block mb-3 text-white aos-init aos-animate" data-aos="fade-up">{ data.date }<span className="mx-2 text-primary">•</span> { data.author } </span>

  return (
    <>
      <BlockFirst title={title} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>

      <SiteSections>
        <div className="row">

          <div className="col-md-8 blog-content">
            { data.text }
          </div>

          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <SingleSearchForm />
            </div>

            <div className="sidebar-box">
              <SingleCategories data={data.categories}/>
            </div>

            <div className="sidebar-box">
              <SingleAuthor />
            </div>

            <div className="sidebar-box">
              <SingleParagraph />
            </div>

          </div>

        </div>
      </SiteSections>
    </>
  );
};

export default Single;
