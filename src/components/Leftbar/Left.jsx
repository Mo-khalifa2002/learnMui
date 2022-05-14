import React from "react";
import "./LeftCss.css";
import gift from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import img9 from "../../assets/9.jpeg";
import img91 from "../../assets/9 (1).jpeg";
import img8 from "../../assets/8.jpeg";
import img81 from "../../assets/8 (1).jpeg";
import img7 from "../../assets/7.jpeg";

const Left = () => {
  return (
    <div>
      <div
        sx={{
          position: "fixed",
          right: "0",
          top: "0",
          bottom: "0",
        }}
        className="rightSide"
      >
        <div className="topSide">
          <Avatar src={gift} alt="gift" className="giftt" />
          <p className="pola">
            <b>Pola Foster</b> and <b>other friends</b> have a{" "}
            <span>birthday today</span>
          </p>
        </div>
        <img src={ad} alt="ad" className="coldImg" />
        <h2 className="onlineFriends">Online Friends</h2>
        <div className="list">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Badge color="secondary" variant="dot">
                    <Avatar src={img9} alt="gift" className="giftt" />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Safak Kocaoglu" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Badge color="secondary" variant="dot">
                    <Avatar src={img91} alt="gift" className="giftt" />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Alexa Durden" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Badge color="secondary" variant="dot">
                    <Avatar src={img8} alt="gift" className="giftt" />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Ceta Alex" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Badge color="secondary" variant="dot">
                    <Avatar src={img81} alt="gift" className="giftt" />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Dora Hawks" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Badge color="secondary" variant="dot">
                    <Avatar src={img7} alt="gift" className="giftt" />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Omar" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Left;
