import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

function MultipleRows() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  };

  const images = [
    "https://images-static.nykaa.com/uploads/9ea3b865-0e5e-46cb-95dc-742a3b94e0c8.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/e1943d9b-3e45-40f3-a7a5-6fb10ae32834.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/6cfe2def-d9e6-4319-bcbd-ea4668a45234.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/689ba30f-d692-4c13-be4d-405bd3dfc95a.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/b9f741bf-72ed-44b8-9d18-560aec143d45.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/155d5eea-d846-411b-980b-296592347f55.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/8e483858-98f5-4f44-b14b-559495876168.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/e5d07feb-dd1c-4bfc-8b7a-2f1e8bbb9f48.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/b9f741bf-72ed-44b8-9d18-560aec143d45.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/155d5eea-d846-411b-980b-296592347f55.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/8e483858-98f5-4f44-b14b-559495876168.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/e5d07feb-dd1c-4bfc-8b7a-2f1e8bbb9f48.jpg?tr=cm-pad_resize,w-300",
  ];

  return (
    <div className="container p-3 mt-5 pb-5">
        <div>
            <img className="img-fluid" src="https://images-static.nykaa.com/uploads/1e4f2bc2-b2f4-44a5-9ad9-6dbafae04578.jpg?tr=cm-pad_resize,w-1200" alt="" />
        </div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <img
              src={src}
              alt={`Nykaa product ${index}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleRows;
