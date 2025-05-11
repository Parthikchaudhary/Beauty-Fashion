import { useLocation, useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  console.log("Product ID from URL:", id);
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p className="text-center mt-5">Product not found.</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row g-4 pt-2">
        {/* Left Side: Image */}
        <div className="col-md-6 pt-5">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid w-100 rounded shadow"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side: Product Info */}
        <div className="col-md-6 mt-5 gap-4">
          <p className="text-uppercase text-danger fw-semibold mb-1 pt-3">BESTSELLER</p>
          <p className="text-success small mb-2">EXPRESS SHIPPING</p>
          <h4 className="fw-bold mb-1">The Bear House</h4>
          <h5 className="mb-3">{product.name}</h5>

          <div className="mb-2">
            ⭐ 3.5 <span className="text-muted">Based on 42 ratings</span>
          </div>

          <h4 className="text-danger mb-0">₹{product.price} <small className="text-success">45% Off</small></h4>
          <p className="text-muted">MRP <s>₹{(product.price * 1.8).toFixed(0)}</s></p>
          <p className="text-muted small">Inclusive of all taxes</p>

          <div className="mt-4">
            <h6>Select Size <span className="ms-2 text-primary" style={{ cursor: "pointer" }}>Size Guide</span></h6>
            <div className="d-flex gap-2 mt-2">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <button key={size} className="btn btn-outline-dark btn-sm">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-outline-secondary">Add to Wishlist</button>
            <button className="btn btn-danger">Add to Bag</button>
          </div>

          <div className="mt-5">
            <h6>Select Delivery Location</h6>
            <p className="text-muted small">Enter the pincode of your area to check product availability and delivery options</p>
            <div className="input-group" style={{ maxWidth: "300px" }}>
              <input type="text" className="form-control" placeholder="122001" />
              <button className="btn btn-outline-dark">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
