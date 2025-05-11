import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function DataProducts() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6, // For large screens
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const items = [
    {
      title: "Indianwear",
      img: "https://images-static.nykaa.com/uploads/73de78c8-5c0d-434b-87a9-c9e662e67751.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Westernwear",
      img: "https://images-static.nykaa.com/uploads/c44a7315-b81b-47a1-8a23-47ee01eded98.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Men",
      img: "https://images-static.nykaa.com/uploads/60b2862f-b8ca-4c95-b96b-601df402c353.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Footwear",
      img: "https://images-static.nykaa.com/uploads/bc90b73e-6137-4581-af82-c62503f911c6.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Lingerie",
      img: "https://images-static.nykaa.com/uploads/54334a9e-2152-4eb7-869c-4adbb85ace15.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Jewellery",
      img: "https://images-static.nykaa.com/uploads/2062ae54-7335-4a21-b4dc-5c437564484d.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Bags",
      img: "https://images-static.nykaa.com/uploads/210949ac-efa6-48af-9a0c-9d3e51568bc0.jpg?tr=w-120,cm-pad_resize"
    },
    {
      title: "Kids",
      img: "https://images-static.nykaa.com/uploads/48822954-33d4-4246-9b7c-89c3600deb0b.jpg?tr=w-120,cm-pad_resize"
    },
    {
        title: "Home",
        img: "https://images-static.nykaa.com/uploads/622b7a55-204e-4d55-8a7c-52e1b2e660fa.jpg?tr=w-120,cm-pad_resize"
    },
    {
        title: "Active Sports",
        img: "https://images-static.nykaa.com/uploads/34c729d6-4aa5-426c-a519-a9be8bb1b04a.jpg?tr=w-120,cm-pad_resize"
      }
  ];

  return (
    <div className="container p-4 bg-gray-100">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-2 text-center">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-40 object-cover rounded-md mx-auto"
            />
            <h5 className="mt-2 text-sm font-semibold">{item.title}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DataProducts;
