import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy data array
const sliderItems = [
  {
    name: "Lipstick",
    image: "https://images-static.nykaa.com/uploads/97d65ae2-8f10-4576-a9ce-f40e987e9503.png?tr=cm-pad_resize,w-300"
  },
  {
    name: "Eyeliner",
    image: "https://images-static.nykaa.com/uploads/b06505c1-c7c4-4cd8-9589-da3fe2802757.jpg?tr=cm-pad_resize,w-300"
  },
  {
    name: "Foundation",
    image: "https://images-static.nykaa.com/uploads/fe008477-3511-48fe-9e2b-f1e3d603801a.png?tr=cm-pad_resize,w-300"
  },
  {
    name: "Blush",
    image: "https://images-static.nykaa.com/uploads/8cc47257-163a-4f0f-91e6-c072c7283acc.jpg?tr=cm-pad_resize,w-300"
  },
  {
    name: "Mascara",
    image: "https://images-static.nykaa.com/uploads/8cc47257-163a-4f0f-91e6-c072c7283acc.jpg?tr=cm-pad_resize,w-300"
  },
  {
    name: "Compact",
    image: "https://images-static.nykaa.com/uploads/4799f0b8-c569-4c82-bc93-a22567f5dca2.jpg?tr=cm-pad_resize,w-300"
  },
  {
    name: "Nail Paint",
    image: "https://images-static.nykaa.com/uploads/1f16ae04-6adf-41e5-8fda-fa35e9858a47.jpg?tr=cm-pad_resize,w-300"
  },
  {
    name: "Highlighter",
    image: "https://images-static.nykaa.com/uploads/fe008477-3511-48fe-9e2b-f1e3d603801a.png?tr=cm-pad_resize,w-300"
  }
];

function Responsive() {
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
    <div className="container py-5">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="px-2">
            <div className="card shadow-sm border-0 rounded">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
