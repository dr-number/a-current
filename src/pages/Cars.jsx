import React from 'react';
import BlockFirst from "../components/block-first/BlockFirst";
import SectionCards from "../components/cars-section-cards/SectionCards";
import SectionSteps from "../components/cars-steps/SectionSteps";
import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";


const Cars = () => {


  const dataSection1 = [
    {img: img1, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$150",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 1},

    {img: img2, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$250",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 2},

    {img: img3, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe",
      price: "$350", doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 3},

    {img: img1, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$150",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 4},

    {img: img2, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe", price: "$250",
      doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 5},

    {img: img3, alt: "Image", hrefMore: "#", title: "Range Rover S64 Coupe",
      price: "$350", doors: 4, seats: 5, Transmission: "Automatic", MiniumAge: "18 years", raiting: 3}
  ]

  const dataBlock2 = {
    title: 'How it works',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!`,
    steps: [
      {number: "01", caption: "Time & Place"},
      {number: "02", caption: "Car"},
      {number: "03", caption: "Details"},
      {number: "04", caption: "Checkout"},
      {number: "05", caption: "Done"}
    ]
  }

  return (
    <>
      <BlockFirst title={<h2 className="text-white">Our services</h2>} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>
      <SectionCards arrayData={dataSection1}/>
      <SectionSteps data={dataBlock2} />
    </>
  );
};

export default Cars;