import placeholder from "../../../../Images/blank.jpg";

export const YourMostPlayed = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="text-decoration-none ms-4 my-5 d-flex align-items-center text-color d-none d-sm-inline">
          Your most played songs
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="image-container">
            <img src={placeholder} alt="Your Image1" width="180" height="180" />
            <div className="text-overlay">
              <h4 className="text-color">Song name</h4>
              <p className="text-color">Song creator</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="image-container">
            <img src={placeholder} alt="Your Image1" width="180" height="180" />
            <div className="text-overlay">
              <h4 className="text-color">Song name</h4>
              <p className="text-color">Song creator</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="image-container">
            <img src={placeholder} alt="Your Image1" width="180" height="180" />
            <div className="text-overlay">
              <h4 className="text-color">Song name</h4>
              <p className="text-color">Song creator</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="image-container">
            <img src={placeholder} alt="Your Image1" width="180" height="180" />
            <div className="text-overlay">
              <h4 className="text-color">Song name</h4>
              <p className="text-color">Song creator</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="image-container">
            <img src={placeholder} alt="Your Image1" width="180" height="180" />
            <div className="text-overlay">
              <h4 className="text-color">Song name</h4>
              <p className="text-color">Song creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
