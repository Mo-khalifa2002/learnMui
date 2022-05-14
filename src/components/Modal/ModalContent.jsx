import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./modal.css";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import DownloadIcon from "@mui/icons-material/Download";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#d6e3ed",
  border: "4px solid #3b499b",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

export default function ModalContent({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="grid11" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="sharee"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            🎇 share the content 🎆
          </Typography>
          <div className="iconss">
            <WhatsAppIcon
              sx={{
                fontSize: "4rem",
                borderRadius: "50%",
                color: "#027500",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            <FacebookIcon
              sx={{
                fontSize: "4rem",
                borderRadius: "50%",
                color: "#1501b1",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            <InstagramIcon
              sx={{
                fontSize: "4rem",
                borderRadius: "50%",
                color: "#0a02a8",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            <TelegramIcon
              sx={{
                fontSize: "4rem",
                borderRadius: "50%",
                color: "#5b6a5a",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            <DownloadIcon
              sx={{
                fontSize: "4rem",
                borderRadius: "50%",
                color: "#693808",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
