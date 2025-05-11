import React from "react";

const CliniqueCarousel = () => {
  const images = [
    {
      src: "https://images-static.nykaa.com/uploads/9818a60d-49dd-4804-b186-216f1cbd5bf2.jpg?tr=cm-pad_resize,w-1200",
      alt: "Clinique 1",
    },
    {
      src: "https://images-static.nykaa.com/uploads/c57c4230-757b-438b-8d3d-eb0b50a63749.jpg?tr=cm-pad_resize,w-1200",
      alt: "Clinique 2",
    },
    {
      src: "https://images-static.nykaa.com/uploads/d57e5609-e4dc-491c-aa15-21b9f47eb5d6.jpg?tr=cm-pad_resize,w-1200",
      alt: "Clinique 3",
    },
  ];

  return (
    <div className="container mt-5">
      <h4 className="text-center p-3 pt-5">Buy Clinique Products Online ({images.length})</h4>
      <div className="col-md-10 w-100">
  <img
    src="https://images-static.nykaa.com/uploads/c34b8e3f-f376-4e47-8cdc-fef61bc43f8b.jpg?tr=cm-pad_resize,w-1200"
    alt="Nykaa"
    className="img-fluid"
  />
</div>

      <div id="cliniqueCarousel" className="carousel slide border shadow" data-bs-ride="carousel">
        <h1 className="text-center p-3">CLINIQUE</h1>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#cliniqueCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image.src} className="d-block w-100" alt={image.alt} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cliniqueCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cliniqueCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CliniqueCarousel;
