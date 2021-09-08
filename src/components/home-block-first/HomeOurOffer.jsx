import React from 'react';
import Card from "../cars-section-cards/Card";
import img1 from "../../images/img_1.jpg";
import img2 from "../../images/img_2.jpg";
import img3 from "../../images/img_3.jpg";

const HomeOurOffer = () => {

  const dataSection1 = [
    {id: 1, img: img1, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$150",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 1},

    {id: 2, img: img2, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$250",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 2},

    {id: 3, img: img3, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe",
      price: "$350", doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 3},

    {id: 4, img: img1, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$150",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 4},

    {id: 5, img: img2, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$250",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 5},

    {id: 6, img: img3, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe",
      price: "$350", doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 3}
  ]

  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h3>Our Offer</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum
              maxime neque!</p>
            <p>
              <a href="#" className="btn btn-primary custom-prev">Previous</a>
              <span className="mx-2">/</span>
              <a href="#" className="btn btn-primary custom-next">Next</a>
            </p>
          </div>
          <div className="col-lg-9">


            <div className="nonloop-block-13 owl-carousel">

              {
                dataSection1.map(item => <Card key={item.id} data={item} />)
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurOffer;