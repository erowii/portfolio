import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { store } from "../Store";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Face6Icon from "@mui/icons-material/Face6";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Divider from '@mui/material/Divider';

const pages = ["Experience", "Skill", "H5Game", "DevTool"];
const title = "ROBERT";

export function Header() {
  const { t, i18n } = useTranslation();
  const [bodyValue, setBodyValue] = React.useState(pages[0]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (evt, value) => {
    store.body = value;
    setBodyValue(value);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Face6Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Divider />
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => handleCloseNavMenu(e, page)}
                >
                  <Typography textAlign="center" sx={{fontFamily: "monospace"}}>{t(page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Tabs
              value={bodyValue}
              onChange={handleCloseNavMenu}
              textColor="inherit"
              indicatorColor="inherit"
            >
              {pages.map((page) => (
                <Tab 
                  sx={{
                    fontSize: 18,
                    fontFamily: "monospace"
                  }} 
                  key={page} 
                  value={page} 
                  label={t(page)} />
              ))}
            </Tabs>
          </Box>
          {/* 照片 */}      
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/S__1597442.png" sx={{ width: 50, height: 50 }}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Nav() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState("H5Game");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    store.body = newValue;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="H5Game" label={t("H5Game")} />
        <Tab value="CCExtension" label={t("CocosCreatorExtension")} />
        <Tab value="WebTool" label={t("WebTool")} />
      </Tabs>
    </Box>
  );
}
