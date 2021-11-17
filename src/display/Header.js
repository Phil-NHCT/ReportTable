import React from "react";
import "./Header.css";
import headerImage from "../images/whiteNHCT.png";

const Header = () => {
  return (
    <div className="row g-0 rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative header">
      <div className="col p-4 d-flex flex-column position-static">
        <h2>Vaccination Reporting</h2>
      </div>
      <div className="col-auto">
        <img src={headerImage} alt="NCHT Logo" />
      </div>
    </div>
  );
};

export default Header;
