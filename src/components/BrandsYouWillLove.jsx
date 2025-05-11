import React from "react";

const brandsData = [
  {
    img: "https://images-static.nykaa.com/creatives/803476f3-a14a-4ddf-a1cb-7660f9d2a72e/default.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 40% Off",
    subtitle: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/creatives/02f50bfa-eb02-49a1-8a99-b0459c76ba26/default.jpg?tr=cm-pad_resize,w-300",
    title: "Buy 1 get 5% off",
    subtitle: "Buy 2 get 10% off",
  },
  {
    img: "https://images-static.nykaa.com/creatives/c7289daa-513a-42fe-8ebf-4837f6bd8ee0/default.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
    subtitle: "On Bestsellers!",
  },
  {
    img: "https://images-static.nykaa.com/creatives/15db7507-8b63-4fce-9e80-8db44f36eb05/default.jpg?tr=cm-pad_resize,w-300",
    title: "On Bestsellers!",
    subtitle: "Teddy Soft Era",
  },
  {
    img: "https://images-static.nykaa.com/creatives/bec5cac2-22f7-40e1-8cfa-1aa0e6ac73fe/default.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 40% Off",
    subtitle: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/creatives/0c596beb-2774-483f-8a19-ff461cb1fff6/default.jpg?tr=cm-pad_resize,w-300",
    title: "Buy 1 get 5% off",
    subtitle: "Buy 2 get 10% off",
  },
  {
    img: "https://images-static.nykaa.com/creatives/a9ba3d0b-9710-4cc3-af41-addc7733df5a/default.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
    subtitle: "On Bestsellers!",
  },
  {
    img: "https://images-static.nykaa.com/creatives/56b25216-5aed-495d-a566-a2eb732dae52/default.jpg?tr=cm-pad_resize,w-300",
    title: "On Bestsellers!",
    subtitle: "Teddy Soft Era",
  },
];

const BrandsYouWillLove = () => {
  return (
    <div className="container-fluid mt-5">
      <h3 className="ms-4">Brands You Will Love</h3>
      <p className="ms-4">Your Makeup Faves</p>
      <div className="row justify-content-around m-2">
        {brandsData.map((brand, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mt-3" key={index}>
            <div className="card border-0" style={{ width: "100%", maxWidth: "320px" }}>
              <div className="card-body border rounded-3 p-0">
                <img src={brand.img} alt={brand.title} className="w-100 rounded-top mas" />
                <h5 className="ms-3 pt-2">{brand.title}</h5>
                <p className="ms-3 pt-2">{brand.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsYouWillLove;
