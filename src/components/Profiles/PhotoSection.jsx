import React from "react";
import "./ProfileCss.css";
import face from "../../assets/1.jpeg";
import land from "../../assets/3 (1).jpeg";

const PhotoSection = () => {
  return (
    <div>
      <div className="containerr">
        <img src={land} alt="face" className="land" />
        <div className="facee">
          <img src={face} alt="face" className="face" />
        </div>
        <div className="containerrText">
          <div className="namee">Micky</div>
          <div>Hello friends</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;
