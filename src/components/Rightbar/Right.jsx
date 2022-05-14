import * as React from "react";
import "./RightCss.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import GroupsIcon from "@mui/icons-material/Groups";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { Avatar } from "@mui/material";
import Img2 from "../../assets/2.jpeg";
import Img3 from "../../assets/3.jpeg";
import Img4 from "../../assets/4.jpeg";
import Img5 from "../../assets/5.jpeg";
import Img6 from "../../assets/6.jpeg";
import Img7 from "../../assets/7.jpeg";
import Img8 from "../../assets/8.jpeg";
import Img9 from "../../assets/9.jpeg";
import { Link } from "react-router-dom";

export default function Right() {
  return (
    <Box
    md={12}
      sx={{
        // width: "100%",
        // maxWidth: 360,
        bgcolor: "background.paper",
        position: "fixed",
        left: "0",
        top: "0",
        bottom: "0",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className="boxxx"
    >
      <nav aria-label="main mailbox folders">
        <List sx={{paddingRight: '4rem'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RssFeedIcon sx={{ color: "#ff4545" }} />
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MarkUnreadChatAltIcon />
              </ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VideoSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QuestionMarkIcon />
              </ListItemIcon>
              <ListItemText primary="Questions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GolfCourseIcon />
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Link to="login">
        <button class="btn btn-border-pop">Log in</button>
      </Link>
      <Divider />
      <h2 className="friends">Friends</h2>
      <List sx={{ backgroundColor: "#f4f8fc" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Mo-khalifa" src={Img2} />
            </ListItemIcon>
            <ListItemText primary="Mo-khalifa" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Mo-khalifa" src={Img7} />
            </ListItemIcon>
            <ListItemText primary="Omar" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Nadia" src={Img3} />
            </ListItemIcon>
            <ListItemText primary="Nadia" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Mo-khalifa" src={Img4} />
            </ListItemIcon>
            <ListItemText primary="Micky" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Mo-khalifa" src={Img5} />
            </ListItemIcon>
            <ListItemText primary="Poly" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Mo-khalifa" src={Img6} />
            </ListItemIcon>
            <ListItemText primary="Micke" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
