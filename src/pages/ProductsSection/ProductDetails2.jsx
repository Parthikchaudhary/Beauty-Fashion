import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import JqueryScrollingCrads from "./JqueryScrollingCards";

const ProData = [
  {
    url: "https://images-static.nykaa.com/creatives/88945536-cb7f-4117-8ea9-386de7a052f9/default.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
    desc: "On Bestsellers!"
  },
  {
    url: "https://images-static.nykaa.com/creatives/0bd271a5-c364-423e-a093-6be6ac33a557/default.jpg?tr=cm-pad_resize,w-300",
    title: "Up To 25% Off",
    desc: "On Entire Brand!"
  },
  {
    url: "https://images-static.nykaa.com/creatives/f4435a28-17c2-4ed8-ae0d-2f7b2ac617d7/default.jpg?tr=cm-pad_resize,w-300",
    title: "Mini on ₹2800",
    desc: "On ₹2800+"
  },
  {
    url: "https://images-static.nykaa.com/creatives/f8bf4c77-86dc-455c-91f0-8794780ba7d0/default.png?tr=cm-pad_resize,w-300",
    title: "Flat 20% Off",
    desc: "On ₹999+"
  },
  {
    url: "https://images-static.nykaa.com/creatives/9dd620ab-c4ff-43ba-b2ed-8274a228a9db/default.jpg?tr=cm-pad_resize,w-300",
    title: "Flat 20% Off",
    desc: "On ₹999+"
  },
  {
    url: "https://images-static.nykaa.com/creatives/2b6cce27-71bd-4779-ae72-9c07c4d1385b/default.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
    desc: "On Bestsellers!"
  }
];

function ProductDetails2() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className="container mt-5">
      <div className="w-100 col-md-12 rounded">
        <img className="img-fluid" src="https://images-static.nykaa.com/uploads/ebe7fe7b-c176-4da0-826d-7ce781f2d694.jpg?tr=cm-pad_resize,w-1200" alt="" />
      </div>
      <Slider {...settings}>
        {ProData.map((item, index) => (
          <div key={index} className="p-2">
            <div className="card h-100 text-center">
              <img src={item.url} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="container-fluid mt-5">
      <div className="w-100 col-md-12 shadow-sm rounded">
      <img className="img-fluid w-100 rounded" src="https://images-static.nykaa.com/uploads/61de9bb2-9072-42ae-89f5-190a50628304.jpg?tr=cm-pad_resize,w-1200" alt="" />
      </div>
    </div>
    <div>
      <JqueryScrollingCrads />
    </div>
    </>
  );
}

export default ProductDetails2;
