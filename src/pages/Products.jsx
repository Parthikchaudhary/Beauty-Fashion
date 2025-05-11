import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import ProductSlider from "../pages/ProductsSection/ProductSclider";
import ProductDetails2 from "../pages/ProductsSection/ProductDetails2";
import { useNavigate } from "react-router-dom";
const productImages = [
  "https://images-static.nykaa.com/uploads/a572bd2a-034a-4584-adb1-8fbf57ebccc3.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/4c7930dc-7d50-4590-b668-caf28f485080.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/4260dd48-bacd-4db7-a163-047deb343920.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/f3d17000-c509-4a63-bb90-4fd5d4cefe73.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/2a263389-9c9e-4869-9331-d6b04dcff4fd.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/39eaf029-2a6d-49d8-8392-8515bd0e0dec.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/d0f89374-7e20-4a47-931b-63275e88493f.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/e0784d3d-5ac8-4021-a964-0bd411a80592.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/bf18f15f-24c5-4b31-813f-801b1ec7106d.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/80a56c73-3e07-4a0b-937c-032911e9eed1.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/523cbb4e-b556-43c0-aeac-e0489da63037.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/c20cb5ac-b879-4972-99c2-3a1cf01297a6.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/0bebfa56-cb6b-47ed-a6f9-a0554126690e.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/93fa3b9f-d8c7-414d-98d9-d279e8ee17c4.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/660fb645-9e6a-4076-ade5-3885128d6a9d.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/uploads/ddbc120d-e8e5-4c82-b428-0e28b328a056.jpg?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/creatives/b1d9e00b-b244-43e4-b2f8-b27f1dea3089/default.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/creatives/69720ba1-ba8c-47bb-b5b5-d2c006a0adb3/default.jpg?tr=cm-pad_resize,w-200",
  "https://images-static.nykaa.com/creatives/1f725378-9e4f-4138-8b28-3ebdcb5b6448/default.png?tr=cm-pad_resize,w-300",
  "https://images-static.nykaa.com/creatives/ac4d8838-3a33-49b7-a285-7ed496f54689/default.jpg?tr=cm-pad_resize,w-300"
];
const productData = [
  { name: "Velvet Matte Lipstick" },
  { name: "Hydrating Face Serum" },
  { name: "Glow Boost Moisturizer" },
  { name: "HD Foundation Cream" },
  { name: "Waterproof Kajal Pencil" },
  { name: "Lash Volume Mascara" },
  { name: "Sheer Blush Powder" },
  { name: "Nude Eyeshadow Palette" },
  { name: "Nail Lacquer Set" },
  { name: "Rose Mist Toner" },
  { name: "Compact Face Powder" },
  { name: "Lip Balm Duo Pack" },
  { name: "Makeup Brush Kit" },
  { name: "Charcoal Face Wash" },
  { name: "Skin Brightening Cream" },
  { name: "Liquid Eyeliner Pen" },
  { name: "Lip Liner Pencil Set" },
  { name: "Keratin Shampoo" },
  { name: "Deep Conditioner" },
  { name: "Fragrance Body Spray" }
];
const ProductPro = [
  "https://images-static.nykaa.com/uploads/dc306ff7-4d9f-4e07-9164-f202dacec0db.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/996a4471-7903-4473-b76a-9a1deab8e258.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/140770eb-d385-44ca-b1ee-aa9ea1f1a68b.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/263f4426-1a7e-44e2-a352-b45652f15ed0.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/fc5ff3a6-407e-4e0f-ac22-2f7dc1091986.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/75dbf977-c800-4f49-a6ca-a026811d6d7e.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/fcb74f98-b490-4b46-8fe2-d234481703d9.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/0bf2e055-7da8-4b3e-bb13-fd09c533700b.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/f74f33ad-bd90-41cb-8a92-fa0ec2a8bbd6.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/d43cbbab-0984-44c5-a627-7d287b81dfce.png?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/d124bc91-fa44-446e-9873-c0e1f0227fe1.jpg?tr=cm-pad_resize,w-150",
  "https://images-static.nykaa.com/uploads/c031cf2c-c0e5-4262-89b1-445822e7857b.jpg?tr=cm-pad_resize,w-150"
]

const allProducts = productData.map((item, index) => ({
  id: index + 1,
  name: item.name,
  price: Math.floor(Math.random() * 1000 + 199), 
  image: productImages[index],
  rating: (Math.random() * 2 + 3).toFixed(1), 
  downPayment: Math.floor(Math.random() * 500 + 99), 
}));

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

// Cost Products
  const filteredProducts = allProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "lowToHigh") return a.price - b.price;
      if (sortOption === "highToLow") return b.price - a.price;
      return 0;
    });

    
const navigate = useNavigate();

const handleAddToCart = (product) => {
  navigate(`/product/${product.id}`, { state: { product } });
};

  return (
    <>
<div className="container py-5 mt-5">
  <h2 className="text-center mb-4">Showing 20 of 20 results for cart</h2>
  <div className="row mb-4 justify-content-center">
    <div className="col-md-6 col-12 mb-3 mb-md-0">
      <input
        type="text"
        className="form-control shadow-sm"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="col-md-2 col-12">
      <select
        className="form-select shadow-sm"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  </div>

<div className="row g-4">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <div
        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
        key={product.id}
      >
        <div className="card shadow-sm border-0 w-100 h-100 hover-shadow">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>

            {/* Rating */}
            <p className="mb-1 text-warning">
              ⭐ {product.rating ? product.rating : "4.2"} / 5
            </p>

            {/* Price */}
            <p className="card-text fw-bold">₹{product.price}</p>

            {/* Down Payment */}
            <p className="text-muted mb-2">
              Starting from ₹{product.downPayment || 199} /mo
            </p>

            {/* Add to Cart Button */}
            <button
              className="btn btn-danger mt-auto"
              onClick={() => handleAddToCart(product)}
            >
              <FaCartPlus className="me-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center text-muted">No products found.</div>
  )}
</div>
</div>
    <div className="extra-section mt-5">
  <div className="container">
    <img
      className="img-fluid w-100 mb-4"
      src="https://images-static.nykaa.com/uploads/c802253f-4056-42bb-aa92-387bde3b454f.jpg?tr=cm-pad_resize,w-1200"
      alt="Banner"
    />

    <div
      className="d-flex overflow-auto gap-2 py-2 "
      style={{ whiteSpace: "nowrap" }}
    >
      {ProductPro.map((img, index) => (
        <div key={index} style={{ minWidth: "120px" }}>
          <img
            src={img}
            className="img-fluid runded"
            alt={`Product ${index + 1}`}
            style={{ height: "100px", objectFit: "cover", width: "100%" }}
          />
        </div>
      ))}
    </div>
  </div>
</div>

<div className="container mt-5">
    <h1>Shop By Concern</h1>
    <p>Skinformation For Best Results</p>
    <ProductSlider />
</div>

<div>
  <ProductDetails2 />
</div>


     </>
  );
};



