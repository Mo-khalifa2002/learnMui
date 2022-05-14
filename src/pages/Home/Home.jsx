import React from "react";
import Right from "../../components/Rightbar/Right";
import Left from "../../components/Leftbar/Left";
import Feed from "../../components/Feed/Feed";
import Topbar from "../../components/Topbar/Topbar";
import "./HomeCss.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Grid container spacing={3} sx={{ marginTop: "2.5rem" }}>
        <Grid item md={3}>
          <Right />
        </Grid>
        <Grid item md={6} sm={12}>
          <Feed />
        </Grid>
        <Grid item md={3} sm={12}>
          <Left />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
