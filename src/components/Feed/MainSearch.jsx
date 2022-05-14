import React from "react";
import "./FeedCss.css";
import Container from "@mui/material/Container";
import Imgg from "../../assets/1.jpeg";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TagIcon from "@mui/icons-material/Tag";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ShareIcon from "@mui/icons-material/Share";
// import Modal from "../Modal/ModalContent";
import ModalContent from "../Modal/ModalContent";
// import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function MainSearch({ children }) {
  return (
    <div>
      <Container className="search" children={children}>
        <Container className="avatarAndInput">
          <Link to="profile">
            <Avatar className="avatar" alt="Remy Sharp" src={Imgg} />
          </Link>
          <input placeholder="What is in your mind" type="text"></input>
        </Container>
        <hr className="hrr" />
        <Grid className="allGrids" container spacing={2}>
          <Grid className="grid1" item md={2} sm={2}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PhotoLibraryIcon color="primary" />
                </ListItemIcon>
                <ListItemText className="listText" primary="Footage" />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid className="grid1" item md={2} sm={2}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon color="primary" />
                </ListItemIcon>
                <ListItemText className="listText" primary="Tag" />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid className="grid1" item md={2} sm={2}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon color="secondary" />
                </ListItemIcon>
                <ListItemText className="listText" primary="Location" />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid className="grid1" item md={2} sm={2}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEmotionsIcon color="error" />
                </ListItemIcon>
                <ListItemText className="listText" primary="Feelings" />
              </ListItemButton>
            </ListItem>
          </Grid>
          <ModalContent item md={4} sm={2}>
            <Button
              className="buttoonn"
              variant="contained"
              endIcon={<ShareIcon />}
            >
              Share
            </Button>
          </ModalContent>
        </Grid>
      </Container>
    </div>
  );
}

export default MainSearch;
