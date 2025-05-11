import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./JqueryScrollingCards.css";

const ProData2 = [
  {
    url: "https://images-static.nykaa.com/uploads/d8ac0ab3-a73f-41c4-97e4-1f86a5e2fd48.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/32759901-5b71-4bd0-a6ce-59891dfebda6.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/51b9ab39-a2e1-4b4e-8b3c-514cd55e828b.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/89fc5757-9d12-485f-a482-95fa71368182.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/8a8764e2-5223-4e61-bbee-2969778cc3cf.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/c87d5628-695b-489d-8f8b-45371bd7d185.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/0a601375-26bd-4870-a57c-f1a3779b79f7.jpg?tr=cm-pad_resize,w-300",
    title: "Upto 30% Off",
  },
];

const JqueryScrollingCards = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const $track = $(scrollRef.current);

    function autoScroll() {
      const scrollSpeed = 1;
      const interval = setInterval(() => {
        if ($track.scrollLeft() >= $track[0].scrollWidth / 2) {
          $track.scrollLeft(0);
        } else {
          $track.scrollLeft($track.scrollLeft() + scrollSpeed);
        }
      }, 20);

      return () => clearInterval(interval);
    }

    const stop = autoScroll();
    return stop;
  }, []);
  const cards = [...ProData2, ...ProData2];
  return (
    <div className="container-fluid bg-light py-4">
      <div
        className="d-flex overflow-auto"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {cards.map((item, index) => (
          <div className="card mx-2" key={index} style={{ minWidth: "280px" }}>
            <img
              src={item.url}
              className="card-img-top img-fluid"
              alt="promo"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h6 className="card-title mb-0">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JqueryScrollingCards;
