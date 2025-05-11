import React from "react";

const FocusOnSection = () => {
  const focusItems = [
    {
      img: "https://images-static.nykaa.com/creatives/82584461-8313-443f-a534-1bc791680688/default.jpeg?tr=cm-pad_resize,w-600",
      title: "Flat 10% Off",
      subtitle: "On Entire Range",
    },
    {
      img: "https://images-static.nykaa.com/creatives/aebbe88c-e00d-4b35-9ab0-dd0075dd1f63/default.jpg?tr=cm-pad_resize,w-600",
      title: "Upto 30% Off",
      subtitle: "Glass Skin Glow",
    },
    {
      img: "https://images-static.nykaa.com/creatives/c44bbf76-cafa-4800-82ed-abc1c762dbea/default.jpg?tr=cm-pad_resize,w-600",
      title: "Gifts On Orders",
      subtitle: "Mini on $100",
    },
  ];

  return (
    <div className="container-fluid mt-5 making">
      <h4 className="ms-4 pt-4 fs-3">Focus On:</h4>
      <p className="ms-4">Today's standout brands</p>
      <hr />
      <div className="row justify-content-around">
        {focusItems.map((item, index) => (
          <div
            className="card mind border-0 mt-3 mb-4"
            style={{ width: "400px" }}
            key={index}
          >
            <div className="card-body p-0">
              <img
                src={item.img}
                alt={`Card ${index + 1}`}
                className="w-100 shadow rounded-3"
              />
              <h3 className="also">{item.title}</h3>
              <h5 className="also2">{item.subtitle}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusOnSection;
