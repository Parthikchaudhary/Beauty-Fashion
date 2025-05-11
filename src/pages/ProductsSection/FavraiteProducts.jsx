const DataImages = [
    {
      url: "https://images-static.nykaa.com/uploads/689ba30f-d692-4c13-be4d-405bd3dfc95a.jpg?tr=cm-pad_resize,w-300",
      url2: "https://images-static.nykaa.com/uploads/7d89b30f-d7e9-4ef6-9a34-7c988192d316.jpg?tr=cm-pad_resize,w-300",
      url3: "https://images-static.nykaa.com/uploads/d5e9bec9-2d22-4d06-bd49-d5b37df8f124.jpg?tr=cm-pad_resize,w-300",
      url4: "https://images-static.nykaa.com/uploads/e1943d9b-3e45-40f3-a7a5-6fb10ae32834.jpg?tr=cm-pad_resize,w-300",
      url5: "https://images-static.nykaa.com/uploads/a218d50d-e2e4-444c-97bb-190ee4f4bf0f.jpg?tr=cm-pad_resize,w-300",
      url6: "https://images-static.nykaa.com/uploads/8e483858-98f5-4f44-b14b-559495876168.jpg?tr=cm-pad_resize,w-300",
      url7: "https://images-static.nykaa.com/uploads/12f7f5f0-e88b-458e-9070-9afc02e48abb.jpg?tr=cm-pad_resize,w-300",
      url8: "https://images-static.nykaa.com/uploads/e5d07feb-dd1c-4bfc-8b7a-2f1e8bbb9f48.jpg?tr=cm-pad_resize,w-300",
      url9: "https://images-static.nykaa.com/uploads/6cfe2def-d9e6-4319-bcbd-ea4668a45234.jpg?tr=cm-pad_resize,w-300",
      url10: "https://images-static.nykaa.com/uploads/9ea3b865-0e5e-46cb-95dc-742a3b94e0c8.jpg?tr=cm-pad_resize,w-300",
    },
  ];
  
  const FavoriteProducts = () => {
    const imageUrls = Object.values(DataImages[0]);
  
    return (
        <div className="container mt-5">
        <div className="col-12 pt-5">
          <img
            className="img-fluid w-100"
            src="https://images-static.nykaa.com/uploads/7586b81b-3823-4f9c-bd66-544718b56951.jpg?tr=cm-pad_resize,w-1200"
            alt="Banner"
          />
          <div className="row justify-content-center mt-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                <img className="img-fluid rounded" src={url} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
  };
  


  export default FavoriteProducts;