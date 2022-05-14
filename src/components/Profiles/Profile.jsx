import React from "react";
import Topbar from "../Topbar/Topbar";
import "./ProfileCss.css";
import Grid from "@mui/material/Grid";
import Right from "../Rightbar/Right";
import Feed from "../Feed/Feed";
import Next from "./Next";
import PhotoSection from "./PhotoSection";
import { Container } from "@mui/material";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <Grid item md={12}>
        <PhotoSection />
      </Grid>

      <div
        className="cont"
        style={{
          padding: "0 4rem",
        }}
      >
        <Grid container spacing={5}>
          <Grid item md={6} sm={12}>
            <Feed />
          </Grid>
          <Grid item md={6} sm={12}>
            <Next />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
