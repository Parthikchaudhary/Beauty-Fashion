import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import FragranceCard from "../pages/ProductsSection/FragranceCard";
import FavoriteProducts from "../pages/ProductsSection/FavraiteProducts";
import FragranceBottom from "../pages/ProductsSection/FragranceBottom";
const imageData = [
  { id: 1, url: "https://images-static.nykaa.com/uploads/bf01af92-bba0-4470-b3ff-ac16702ca310.jpg?tr=cm-pad_resize,w-1200" },
  { id: 2, url: "https://images-static.nykaa.com/uploads/ad89ac73-366a-422c-8a55-5270202a73e8.jpg?tr=cm-pad_resize,w-1200" },
  { id: 3, url: "https://images-static.nykaa.com/uploads/2ef2875a-f6b9-442f-8b2a-4dc5ad276d1a.jpg?tr=cm-pad_resize,w-1200" },
  { id: 4, url: "https://images-static.nykaa.com/uploads/c6679307-a90c-443c-b8e5-c05b4473ce81.jpg?tr=cm-pad_resize,w-1200" },
  { id: 5, url: "https://images-static.nykaa.com/uploads/6c4487b7-11f7-4728-b392-43426cfadc2f.jpg?tr=cm-pad_resize,w-1200" },
];

const imageData2 = [
  { id: 1, 
    tittle : "Essence of a Queen", 
    p: "Essence of a Queen", 
    url: "https://images-static.nykaa.com/uploads/a6fdce19-5f67-423e-a86f-4999c527653c.jpg?tr=cm-pad_resize,w-450" },
  { id: 2, 
    tittle : "Essence of a King", 
    p: "Essence of a King", 
    url: "https://images-static.nykaa.com/uploads/87a73aba-5b0d-4812-9455-91b2d26c5635.png?tr=cm-pad_resize,w-450" },
  { id: 3, 
    tittle : "Essence of a Prince", 
    p: "Essence of a Prince", 
    url: "https://images-static.nykaa.com/uploads/c1be8992-5739-41b0-8689-247113b4f8aa.jpg?tr=cm-pad_resize,w-450" },
  { id: 4, 
    tittle : "Essence of a Princess", 
    p: "Essence of a Princess", 
    url: "https://images-static.nykaa.com/uploads/ce5ec2b8-2f59-4d60-927b-f6303e17e75d.jpg?tr=cm-pad_resize,w-450" },
]

export const Fragrance = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12 w-full mb-5 pt-5">
            <img className="img-fluid" src="https://images-static.nykaa.com/uploads/3626d22f-5dc2-43ad-b3f4-fc0edaf77c63.jpg?tr=cm-pad_resize,w-1200" alt="" />
        </div>
        <div className="col-md-12 w-full">
          <Slider {...settings}>
            {imageData.map((image) => (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt={`Slide ${image.id}`}
                  className="img-fluid rounded w-100"
                  style={{ objectFit: "cover", maxHeight: "600px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
     <div className="row justify-content-center mt-5">
      <h1 className="pt-3">
      The Fragrance Finder
      </h1>
      <p>Take Our 3-Step Quiz Now</p>
     <div className="col-md-12 w-full mt-5">
      <img className="img-fluid runded" src="https://images-static.nykaa.com/uploads/1d45fcca-40e1-4689-8a6e-459e0b9765f4.gif" alt="" />
      </div>
     </div>
    </div>
    <div className="container mt-5">
  <h1 className="mb-3 text-center">The Fragrance 'IT' List</h1>
  <div className="row justify-content-center">
    {imageData2.map((image) => (
      <div key={image.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card h-100">
          <img
            src={image.url}
            className="card-img-top"
            alt={image.tittle}
            style={{ objectFit: "cover", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-truncate">{image.title}</h5>
            <p className="card-text">{image.p}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<div>
  <FragranceCard />
</div>
<div>
  <FavoriteProducts />
</div>
<div>
  <FragranceBottom />
</div>

    </>
  );
};
