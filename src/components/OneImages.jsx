
import React from "react";

const productData = [
  {
    img: "https://images-static.nykaa.com/uploads/8ed84e71-2cf5-4ff7-a4ef-3f65214e32b5.jpg?tr=cm-pad_resize,w-200",
    title: "MARS Lip Crayon",
  },
  {
    img: "https://images-static.nykaa.com/uploads/e45c3a0c-036c-4eba-bd58-27614e0e95c8.jpg?tr=cm-pad_resize,w-200",
    title: "Lipsticks",
  },
  {
    img: "https://images-static.nykaa.com/uploads/056ed109-4216-4326-a5a0-7033bfc19793.jpg?tr=cm-pad_resize,w-200",
    title: "Liquid Lipstick",
  },
  {
    img: "https://images-static.nykaa.com/uploads/8c9da63e-4d2b-4e0d-8e3d-5324f0e0a8d8.jpg?tr=cm-pad_resize,w-200",
    title: "Lakme Lip Liner",
  },
  {
    img: "https://images-static.nykaa.com/uploads/056ed109-4216-4326-a5a0-7033bfc19793.jpg?tr=cm-pad_resize,w-200",
    title: "Liquid Lipstick",
  }
];

const MyProducts = () => {
  return (
    <div className="mt-5 container">
      <div className="row">
        <div className="col-12">
          <img
            className="img-fluid w-100"
            src="https://images-static.nykaa.com/uploads/c1d27d5e-dc85-44db-bc37-71ef018ca406.jpg?tr=cm-pad_resize,w-1200"
            alt="Main banner"
          />
        </div>

        <div className="col-12 mt-4">
          <div className="row g-4">
            {productData.map((product, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <img className="img-fluid mb-2" src={product.img} alt={product.title} />
                <a href="#" className="d-block text-dark nav-link">{product.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
