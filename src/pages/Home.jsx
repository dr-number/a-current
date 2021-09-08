import React from 'react';
import HomeBlockFirst from "../components/home-block-first/HomeBlockFirst";
import HomeOurOffer from "../components/home-block-first/HomeOurOffer";
import BlockFirst from "../components/block-first/BlockFirst";
import HomeServices from "../components/home-block-first/HomeServices";
import SectionSteps from "../components/cars-steps/SectionSteps";
import HomeCustomerTestimony from "../components/home-customer-testimony/HomeCustomerTestimony";

import person1 from "../images/person_1.jpg"
import person2 from "../images/person_2.jpg"
import person3 from "../images/person_3.jpg"

import post1 from "../images/post_1.jpg"
import post2 from "../images/img_2.jpg"
import post3 from "../images/img_3.jpg"

import HomeOurBlock from "../components/home-our-blog/HomeOurBlog";
import HomeOurBlog from "../components/home-our-blog/HomeOurBlog";

const Home = () => {

  const ourServices = [
    {id: "1", title: "Repair", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.", classIco: "flaticon-car-1"},
    {id: "2", title: "Car Accessories", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.", classIco: "flaticon-traffic"},
    {id: "3", title: "Own a Car", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.", classIco: "flaticon-valet"}
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

  const testimony = {
    title: "Customer Testimony",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum 
    voluptates sed!`,
    cards: [
      {
        id: 1, img: person1, alt: "image1", name: "Mike Fisher",
        title: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
        Ipsam, nam, voluptatum"`
      },
      {
        id: 2, img: person2, alt: "image2", name: "Jean Stanley",
        title: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
        Ipsam, nam, voluptatum"`
      },
      {
        id: 3, img: person3, alt: "image3", name: "Katie Rose",
        title: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
        Ipsam, nam, voluptatum"`
      }
    ]
  }

  const homeOurBlog = {
    title: "Our blog",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius
           earum voluptates sed!`,
    cards: [
      {
        id: 1, img: post1, alt: "post1", date: "July 17, 2019",
        authorId: 1, author: "Admin",
        title: "The best car rent in the entire planet",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias
            consectetur.`
      },
      {
        id: 2, img: post2, alt: "post1", date: "July 17, 2019",
        authorId: 1, author: "Admin",
        title: "The best car rent in the entire planet",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias
            consectetur.`
      },
      {
        id: 2, img: post3, alt: "post1", date: "July 17, 2019",
        authorId: 1, author: "Admin",
        title: "The best car rent in the entire planet",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias
            consectetur.`
      }

    ]
  }

  return (
    <>
      <HomeBlockFirst />
      <HomeOurOffer />
      <BlockFirst title={<h2 className="text-white">Our services</h2>}>
        <div className="row">
          { ourServices.map( item => <HomeServices key={item.id} data={item} /> ) }
        </div>
      </BlockFirst>

      <SectionSteps data={dataBlock2} />
      <HomeCustomerTestimony data={testimony} />

      <HomeOurBlog data={homeOurBlog} />
    </>
  );
}

export default Home;