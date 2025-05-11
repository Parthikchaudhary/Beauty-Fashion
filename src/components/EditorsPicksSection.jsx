import React from "react";

const EditorsPicksSection = () => {
  const editorPicks = [
    "https://images-static.nykaa.com/uploads/bb83736e-0a68-4e91-9fba-37954c9a1393.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/c6314e56-1bde-40b5-8d3b-cf57c92ba228.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/b4b567c2-2983-4ed7-8eb9-035df6daa306.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/87095d48-bfe6-439b-96f9-c8e8f76da7a3.jpg?tr=cm-pad_resize,w-300",
    "https://images-static.nykaa.com/uploads/29f92ecd-2e0a-43c8-9059-498b5d856f94.jpg?tr=cm-pad_resize,w-300",
  ];

  return (
    <div className="container-fluid text-center mt-5">
      <h1 className="p-4">EDITOR'S PICKS</h1>
      <div className="row justify-content-center">
        {editorPicks.map((img, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-3" key={index}>
            <img src={img} alt={`Pick ${index + 1}`} className="w-100 rounded-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicksSection;
