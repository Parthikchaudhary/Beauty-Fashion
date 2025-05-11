
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductsData = [
    {
      url: "https://images-static.nykaa.com/uploads/24bb63b7-561b-4909-8f97-ec3786e44d13.png?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Davidoff Cool Water Eau de Toilette for Men",
      size: "3 Sizes",
      price: "₹ 1,999",
      originalPrice: "₹ 7,850",
      discount: "15% OFF"
    },
    {
      url: "https://images-static.nykaa.com/uploads/59490e00-9a33-4b2f-840c-68961bbaeb4d.jpg?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Perfume De Marly Delina Eau de Parfum",
      size: "3 Sizes",
      price: "₹ 6,999",
      originalPrice: "₹ 10,850",
      discount: "15% OFF"
    },
    {
      url: "https://images-static.nykaa.com/uploads/52127a05-57a3-4953-b9c1-a25b8095f36c.png?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Perfume De Marly Delina Eau de Parfum",
      size: "3 Sizes",
      price: "₹ 6,999",
      originalPrice: "₹ 10,850",
      discount: "15% OFF"
    },
    {
      url: "https://images-static.nykaa.com/uploads/b577b559-6596-4384-96fd-de3745eedb27.jpg?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Perfume De Marly Delina Eau de Parfum",
      size: "3 Sizes",
      price: "₹ 6,999",
      originalPrice: "₹ 10,850",
      discount: "15% OFF"
    },
    {
      url: "https://images-static.nykaa.com/uploads/6aebce97-6637-4f6f-9a3c-b9512530ea57.jpg?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Perfume De Marly Delina Eau de Parfum",
      size: "3 Sizes",
      price: "₹ 6,999",
      originalPrice: "₹ 10,850",
      discount: "15% OFF"
    },
    {
      url: "https://images-static.nykaa.com/uploads/f57dcf0b-4111-448d-b72d-049e305409f8.jpg?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Perfume De Marly Delina Eau de Parfum",
      size: "3 Sizes",
      price: "₹ 6,999",
      originalPrice: "₹ 10,850",
      discount: "15% OFF"
    },
    {
      url: "https://images-static.nykaa.com/uploads/6aebce97-6637-4f6f-9a3c-b9512530ea57.jpg?tr=cm-pad_resize,w-300",
      rating: "4.5★/5 (610)",
      title: "Perfume De Marly Delina Eau de Parfum",
      size: "3 Sizes",
      price: "₹ 6,999",
      originalPrice: "₹ 10,850",
      discount: "15% OFF"
    }
  ];
  
  const FragranceCard = () => {
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
          <style>
            {`
              .hover-shadow:hover {
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
                transition: box-shadow 0.3s ease-in-out;
              }
            `}
          </style>
    
          <div className="container mt-5">
            <h1 className="mb-4 text-center">The Fragrance 'IT' List</h1>
            <Slider {...settings}>
              {ProductsData.map((item, index) => (
                <div key={index} className="p-2">
                  <div className="card h-100 border-0 shadow-sm hover-shadow position-relative">
                    <img
                      src={item.url}
                      className="card-img-top border border-secondary"
                      alt={item.title || "Fragrance Image"}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <span
                      className="badge bg-success position-absolute"
                      style={{ top: "10px", left: "10px" }}
                    >
                      {item.rating}
                    </span>
                    <div className="card-body">
                      <h5 className="card-title text-truncate" title={item.title}>
                        {item.title}
                      </h5>
                      <p className="card-text">{item.size}</p>
                      <p className="card-text mb-1">
                        <span className="text-muted text-decoration-line-through me-2">
                          {item.originalPrice}
                        </span>
                        <span className="fw-bold">{item.price}</span>
                      </p>
                      <p className="text-success fw-semibold">{item.discount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      );
    }
    
    export default FragranceCard;