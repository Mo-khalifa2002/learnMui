import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profiles/Profile";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register.jsx";
import { Paper } from "@mui/material";
import { useState } from "react";
// import { ThemeProvider } from "styled-components";
import Splash from "./components/Themes/Themes";
import Scroll from "./components/ScrollToTop/Scroll";
// import { createTheme, themeProvider } from "@mui/system";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <BrowserRouter>

        <Paper>
          <div className={darkMode ? "dark-mode" : "light-mode"}>
            <Scroll />
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route
                path="/"
                element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
                exact
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Paper>

    </BrowserRouter>
  );
}

export default App;
