import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const images1 = [
  "https://images-static.nykaa.com/uploads/8b77ea19-440e-489b-9320-20ac51ed5f10.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/bdd84345-46f7-4c75-9aa9-e2154d46658d.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/096f3a45-6561-4e7e-86a1-bef88ad0a962.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/7b19001b-4853-4f70-985a-65635b58865e.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/096f3a45-6561-4e7e-86a1-bef88ad0a962.jpg?tr=cm-pad_resize,w-1200",
];

const images2 = [
  {
    url: "https://images-static.nykaa.com/uploads/19017355-bbfd-4de1-8961-9751ac24b780.jpg?tr=cm-pad_resize,w-300",
    title: "Min 20% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/e8c16aaf-e23b-4c66-a90e-4976c601ecc6.jpeg?tr=cm-pad_resize,w-300",
    title: "Min 50% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/ee3023a5-5b21-4673-9bff-a1e928b3ba98.jpeg?tr=cm-pad_resize,w-300",
    title: "Min 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/6cd4afdf-4bd6-4148-94be-ddc14a00a905.jpeg?tr=cm-pad_resize,w-300",
    title: "Min 40% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/a2a43c13-3571-4b60-af2e-86812b88b2c6.jpg?tr=cm-pad_resize,w-300",
    title: "Min 50% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/82facefb-a72a-4acc-8faf-1175ed885dc7.jpg?tr=cm-pad_resize,w-300",
    title: "Min 30% Off",
  }
];

const images3 = [
    "https://images-static.nykaa.com/uploads/ef715c28-0655-48a1-b681-93ddac4adb71.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/4333dd27-7c67-42f2-91e3-01a1ba028045.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/1113bf7d-df27-4685-af0d-7a833c430139.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/82513286-5817-4b0d-b283-5e8209a35145.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/dfd95d18-23f1-43ca-9797-85d4dda4903e.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/754c88e0-f827-44f1-8421-debc8b00a358.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/40f57eb2-ac54-4033-9c0a-43cfa76a1c62.jpg?tr=cm-pad_resize,w-150",
    "https://images-static.nykaa.com/uploads/22145d3f-1cc4-42fe-8aed-9bc11da76ac3.jpg?tr=cm-pad_resize,w-150"
]

const images4 = [
    {
        url: "https://images-static.nykaa.com/uploads/9bbf1603-5861-450c-ba8b-d9376f862220.jpg?tr=cm-pad_resize,w-600",
        title: "Luxe Beauty",
        bio: "Discover the world of luxury beauty with our exclusive range of high-end products. Indulge in opulence and elevate your beauty routine.",
    },
    {
        url:"https://images-static.nykaa.com/uploads/5f607d5f-bac5-425e-bef8-2c0e50877206.jpg?tr=cm-pad_resize,w-600",
        title: "Luxury Fragrance",
        bio: "Immerse yourself in the enchanting world of luxury fragrances. Explore our curated collection of exquisite scents that captivate the senses.",
    },
    {
        url: "https://images-static.nykaa.com/uploads/1c50f05f-3ee6-474b-a361-3177de6978b0.jpg?tr=cm-pad_resize,w-600",
        title: "Luxury Skincare",
        bio: "Experience the epitome of skincare with our luxury range. Pamper your skin with premium products that nourish and rejuvenate.",
    },
    {
        url: "https://images-static.nykaa.com/uploads/70b2de33-5024-43c0-91ad-10ae6a60385c.jpg?tr=cm-pad_resize,w-600",
        title: "Luxury Makeup",
        bio: "Unleash your inner artist with our luxury makeup collection. Discover high-performance products that enhance your beauty and confidence.",
    }
]



export function Luxe() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: sliderRef1,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const thumbSliderSettings = {
    asNavFor: nav1,
    ref: sliderRef2,
    slidesToShow: 6,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 }
      }
    ]
  };
  

  return (
    <>
    <div className="container my-4">
      <h2 className="text-center mb-4">Luxe Slider</h2>
  
      
      <Slider {...mainSliderSettings}>
        {images1.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Slide ${idx}`} className="img-fluid w-100" />
          </div>
        ))}
      </Slider>
  

      <div className="mt-4">
        <Slider {...thumbSliderSettings}>
          {images2.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="card border-0">
                <img src={item.url} alt={item.title} className="img-fluid" />
                <div className="card-body p-1">
                  <p className="text-center small mb-0">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <div className="container-fluid text-center mt-5">
  <h1>BEAUTY IN FOCUS</h1>
  <div className="row justify-content-center">
    {images3.map((img, index) => (
      <div className="col-4 col-sm-3 col-md-2 col-lg-1 pt-3" key={index}>
        <img src={img} alt={`beauty-${index}`} className="img-fluid" />
      </div>
    ))}
  </div>
</div>

<div className="container text-center mt-5">
  <h1>BEAUTY IN FOCUS</h1>


  <div className="row justify-content-center mt-4">
    <div className="col-md-8">
      <img src={images4[0].url} alt={images4[0].title} className="img-fluid rounded-5 shadow-sm" />
      <h4 className="mt-4">{images4[0].title}</h4>
      <p>{images4[0].bio}</p>
    </div>
  </div>


  <div className="row justify-content-center mt-4">
    {[images4[1], images4[2]].map((img, index) => (
      <div className="col-md-6" key={index}>
        <img src={img.url} alt={img.title} className="img-fluid rounded-5 shadow-sm" />
        <h4 className="mt-4">{img.title}</h4>
        <p>{img.bio}</p>
      </div>
    ))}
  </div>

  
  <div className="row justify-content-center mt-4">
    <div className="col-md-8">
      <img src={images4[3].url} alt={images4[3].title} className="img-fluid rounded-5 shadow-sm" />
      <h4 className="mt-4">{images4[3].title}</h4>
      <p>{images4[3].bio}</p>
    </div>
  </div>
</div>


<div className="container text-center mt-5">
  <h1>BRAND OF THE DAY</h1>
  <div className="row justify-content-center mt-4">
    <div className="col-md-12 w-100">
      <img
        className="img-fluid rounded w-100"
        src="https://images-static.nykaa.com/uploads/978ea549-342d-405b-a609-230326edd4dc.jpg?tr=cm-pad_resize,w-1200"
        alt="Brand of the Day"
      />
      <p className="mt-3">THE COMPLETE REGENERATING RITUAL</p>
    </div>
  </div>
</div>

<div className="container-fluid text-center mt-5">
   <div className="col-md--12 w-100">
     <img src="" alt="" />
   </div>
</div>

    </>
  );
  
}
