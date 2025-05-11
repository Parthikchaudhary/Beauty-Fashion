import "../pages/BeautyProducts/Beauty.css";
import SidebarAccordionWithCheckboxes from "../pages/BeautyProducts/AllProducts";
import AllProductsCradPro from "../pages/BeautyProducts/AllProductsCardsPro";
import React from "react";
import Slider from "react-slick";

const thumbnails = [
  "https://images-static.nykaa.com/creatives/d4e2d7e1-ed62-4e61-b065-13884b46bc37/default.jpg",
  "https://images-static.nykaa.com/creatives/31e07b4d-ca2e-4e25-afd0-bca36b6e0465/default.jpg",
  "https://images-static.nykaa.com/creatives/50a9c1a8-efb7-4f02-98be-4ce179a6803c/default.png",
  "https://images-static.nykaa.com/creatives/22f277c3-548e-4401-93df-8713c1163835/default.jpg",
];

const slides = [
  "https://images-static.nykaa.com/uploads/a63e0047-acb2-458a-afa4-56042dcfe6cd.jpg",
  "https://images-static.nykaa.com/uploads/cdda10c4-6d30-48e4-84e7-761c0212aba7.jpg",
  "https://images-static.nykaa.com/uploads/f7540c8e-2e83-4bf9-bc93-b2eb7621040d.jpg",
  "https://images-static.nykaa.com/uploads/b7ea44a3-50d8-4b83-b82a-142af51f440a.jpg",
];

const categories = [
  "https://images-static.nykaa.com/uploads/4898043c-3848-4af2-a609-603a168462cc.png?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/515e4ca5-1c8d-4fab-964c-5f0a22d69052.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/dc1fe323-e66c-426b-9b74-b799cd6acb7b.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/dc1fe323-e66c-426b-9b74-b799cd6acb7b.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/5e1559d7-782a-4b9e-aba8-c185952b5e66.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/7750634f-b8a2-4410-8c35-2045d2b8f088.jpg?tr=cm-pad_resize,w-300",
];

export const Beauty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="bg-light rounded px-3 py-2">
        <ul className="m-0 d-flex justify-content-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <img
        src={thumbnails[i]}
        alt={`Thumb ${i + 1}`}
        className="rounded-circle border border-primary object-fit-cover too"
        style={{ width: "30px", height: "30px" }}
      />
    )
  };

  return (
    <>
      <h4 className="text-center mt-5 fw-semibold prodoucts-Scroll">
        Buy Lotus Herbals Products Online (241)
      </h4>

      <div className="container my-4 p-3 bg-white rounded shadow-sm prodoucts-Scroll2">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                className="img-fluid rounded-4 mx-auto d-block"
                src={slide}
                alt={`Banner ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container text-center my-5 bg-secondary p-5 shadow-sm rounded-4">
        <img
          className="img-fluid"
          src="https://www.nykaa.com/beauty-blog/assets/banner-logo.png?v=1.0.20"
          alt="Nykaa Beauty Blog"
        />
      </div>

      <div className="container mb-5">
        <h4 className="mb-4 fw-bold">Shop By Category</h4>
        <div className="row g-3">
          {categories.map((cat, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2">
              <img
                className="img-fluid rounded-3 shadow-sm too"
                src={cat}
                alt={`Category ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container my-4 pt-5">
        <h3 className="mt-5 text-center pb-5">Buy Men's Topwear Online</h3>
  <div className="row justify-content-center">
    {/* Left Sidebar */}
    <div className="col-md-3 mt-4">
      <div className="sticky-sidebar">
        <SidebarAccordionWithCheckboxes />
      </div>
    </div>

    {/* Right Product Cards */}
    <div className="col-md-9">
      <AllProductsCradPro />
    </div>
  </div>
</div>


    </>
  );
};

export default Beauty;
