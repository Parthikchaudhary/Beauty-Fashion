import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageData = [
  "https://images-static.nykaa.com/uploads/fd7fb93d-6a48-4805-9d1c-4571dbaeba91.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/uploads/c20072c5-66e4-4e78-88d5-6f2593147434.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/uploads/abfba043-f551-41ca-a7c2-b04b0b91d33e.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/uploads/56fbae26-86ba-404a-b0b0-b3b091c72bf3.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/uploads/ba05869b-1bc2-4077-8023-2effc9cf62ee.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/uploads/f6e88a03-82e0-4a31-ae18-d0fc2f44d6a5.jpg?tr=cm-pad_resize,w-200"
];

const imageDatas = {
  mainBanner: "https://images-static.nykaa.com/uploads/24075481-68dc-4e6a-8c5b-696b8cc76b87.jpg?tr=cm-pad_resize,w-1200",
  features: [
    "https://images-static.nykaa.com/uploads/97f30d35-0fb5-4ff8-93b6-939ae4bb6d56.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/1a7fb56b-f979-4012-8f8c-e0606a881c25.jpg?tr=cm-pad_resize,w-600",
  ],
  fullWidth: "https://images-static.nykaa.com/uploads/61de9bb2-9072-42ae-89f5-190a50628304.jpg?tr=cm-pad_resize,w-1200",
};

const imageUrl = {
  mainTop: "https://images-static.nykaa.com/uploads/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg?tr=cm-pad_resize,w-1200",
  featuresImages: [
    "https://images-static.nykaa.com/uploads/f4583d63-9144-465f-99c3-a862a5ae5c00.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/c8ff9702-5cd7-4957-ae6e-fe75a9fb5970.jpg?tr=cm-pad_resize,w-600",
    "https://images-static.nykaa.com/uploads/aabc08e7-ae88-40bf-bb2e-d73ce9c3b154.jpg?tr=cm-pad_resize,w-600",
  ]
}

function FragranceDootom() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 6, 
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };

  return (
    <>
    <div className="slider-container container mt-5">
        <div>
            <h2 className="mb-4">Fragrance</h2>
            <p className="mb-4">Discover the essence of luxury with our exquisite fragrance collection.</p>
            <img className="img-fluid" src="https://images-static.nykaa.com/uploads/54c32622-257f-4c26-9acb-d38354408e7d.jpg?tr=cm-pad_resize,w-1200" alt="" />
        </div>
      <Slider {...settings}>
        {imageData.map((imgUrl, index) => (
          <div key={index} className="px-2">
            <img
              src={imgUrl}
              alt={`slide-${index}`}
              className="img-fluid"
              style={{ borderRadius: "8px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
<div className="container mt-5">
      <div className="row">
        <div className="col-12 pt-4">
          <img
            className="img-fluid rounded"
            src={imageDatas.mainBanner}
            alt="Main Banner"
          />
        </div>
      </div>

      {/* Feature Images */}
      <div className="row justify-content-center mt-4 g-3">
        {imageDatas.features.map((src, index) => (
          <div key={index} className="col-12 col-md-6">
            <img
              className="img-fluid rounded shadow-sm"
              src={src}
              alt={`Feature ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Full Width Image */}
      <div className="row pt-5">
        <div className="col-12">
          <img
            className="img-fluid rounded"
            src={imageDatas.fullWidth}
            alt="Full Width"
          />
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="col-12">
        <img 
        className="img-fluid"
        src={imageUrl.mainTop} 
        alt="Full Width" />
      </div>
      <div className="row justify-content-center ">
        {imageUrl.featuresImages.map((src, index) => (
          <div key={index} className="col-12 col-md-4">
            <img
              className="img-fluid rounded shadow-sm"
              src={src}
              alt={`Feature ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>

    </>
  );
}

export default FragranceDootom;;
