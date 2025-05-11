import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  const settings = {
    arrows: true, 
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
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  
  
  };

  const imageUrls = [
    "https://images-static.nykaa.com/uploads/c8c5fe7d-0ec0-4d14-915a-a6d17f49a37f.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/db115535-c908-46c9-b50a-3205353086bb.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/e4be9683-266c-4768-a146-ee9c739e2231.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/499e522d-b09d-4930-a338-4170e6c5847f.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/709d3a25-b97b-4ab8-8141-037939e7c97b.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/e4be9683-266c-4768-a146-ee9c739e2231.jpg?tr=cm-pad_resize,w-600",
  ];

  return (
    <div className="container mt-5">
      <div>
        <img className="img-fluid" src="https://images-static.nykaa.com/uploads/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg?tr=cm-pad_resize,w-1200" alt="" />
      </div>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="p-2 text-center">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="img-fluid w-100 rounded shadow-sm mb-2"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
