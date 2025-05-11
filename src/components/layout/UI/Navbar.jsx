import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

const products = [
  "Lipstick",
  "Foundation",
  "Eyeliner",
  "Shampoo",
  "Conditioner",
  "Serum",
  "Sunscreen",
  "Blush",
  "Face Wash",
  "Moisturizer",
];

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      const results = products.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filtered.length > 0) {
      alert(`You selected: ${filtered[0]}`);
      setQuery("");
      setFiltered([]);
    }
  };

  const handleSelectItem = (item) => {
    alert(`You selected: ${item}`);
    setQuery("");
    setFiltered([]);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
        <div className="container position-relative">
          <a className="navbar-brand text-danger" href="/">
          <img className="img-fluid" src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/logo/stores/1/fashion-web-logo.svg" alt="" /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink className="nav-link abcd ms-3 hover-" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link abcd" to="/product">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fragrance">Fragrance</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/beauty">Beauty Advice</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/luxe">Luxe</NavLink>
              </li>
            </ul>

            {/* Search & Cart Form */}
            <form className="d-flex align-items-center position-relative" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleSearch}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>

              {/*  Cart Icon */}
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#cartOffcanvas"
                aria-controls="cartOffcanvas"
              >
                <FaCartPlus className="fs-1 ms-3" />
              </button>

              {/*  Search Suggestions */}
              {filtered.length > 0 && (
                <ul className="list-group position-absolute top-100 start-0 w-100 mt-1 z-3">
                  {filtered.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSelectItem(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </div>
      </nav>

      {/* Cart Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="cartOffcanvasLabel">Shopping Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Your cart is currently empty.</p>
        </div>
      </div>
    </>
  );
};
