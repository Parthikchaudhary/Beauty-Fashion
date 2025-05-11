import React from "react";

const EucerinCarousel = () => {
  const slides = [
    {
      src: "https://images-static.nykaa.com/uploads/1cad386d-564c-4381-bb97-d492ba58fd27.jpg?tr=cm-pad_resize,w-1200",
      alt: "Slide 1",
    },
    {
      src: "https://images-static.nykaa.com/uploads/036434a0-40e5-41d0-bb8c-8006da1bb721.jpg?tr=cm-pad_resize,w-1200",
      alt: "Slide 2",
    },
    {
      src: "https://images-static.nykaa.com/uploads/94498641-a25c-4aa6-8558-7d508a255380.jpg?tr=cm-pad_resize,w-1200",
      alt: "Slide 3",
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center p-3">Eucerin ({slides.length})</h3>

      <div id="eucerinCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#eucerinCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#eucerinCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default EucerinCarousel;
