import React from "react";
import './ProfileCss.css'
import friend1 from "../../assets/2 (1).jpeg";
import friend2 from "../../assets/6 (1).jpeg";
import friend3 from "../../assets/3 (1).jpeg";

const Next = () => {
  return (
    <div className="rightbarr">
      <div className="userInfo">
        <h2>user information</h2>
        <p className="city">city: new york</p>
        <p className="city">from: madrid</p>
        <p className="city">relationship: single</p>
      </div>

      <div className="userFriends">
        <div className="friendInfo">
          <div className="friendIgm">
            <img src={friend1} alt="" />
          </div>
          <p className="friendName">john carter</p>
        </div>
        <div className="friendInfo">
          <div className="friendIgm">
            <img src={friend2} alt="" />
          </div>
          <p className="friendName">pole</p>
        </div>
        <div className="friendInfo">
          <div className="friendIgm">
            <img src={friend2} alt="" />
          </div>
          <p className="friendName">pole</p>
        </div>
        <div className="friendInfo">
          <div className="friendIgm">
            <img src={friend3} alt="" />
          </div>
          <p className="friendName">sara</p>
        </div>
      </div>
    </div>
  );
};

export default Next;
