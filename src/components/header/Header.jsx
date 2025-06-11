import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DynamicButton from "./DynamicButton";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  const lastScrollY = useRef(0);
  const isScrolledRef = useRef(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");

    const scrolled = currentScrollY > 0;
    if (scrolled !== isScrolledRef.current) {
      setIsScrolled(scrolled);
      isScrolledRef.current = scrolled;
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navItems = [
    {
      label: "Company",
      submenu: [
        { label: "About Us", path: "/About" },
        { label: "Career", path: "/Career" },
        { label: "Intership", path: "/Intership" },
      ],
    },
    { label: "Services", path: "/Service" },
    { label: "Portfolio", path: "/Portfolio" },
  ];

  return (
    <Box sx={styles.navContainer}>
      <AppBar
        sx={{
          ...styles.appBar,
          backgroundColor: isScrolled ? "#0F0F0F" : "transparent",
          transform:
            scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
          transition:
            "transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
        }}
      >
        <Toolbar sx={styles.toolbar}>
          {isMediumScreen ? (
            <Box sx={styles.navItems}>
              {/* Dropdown for Company */}
              <Box>
                <Button
                  onClick={handleMenuOpen}
                  sx={{ ...styles.navText, display: "flex", alignItems: "center", }}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Company
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    sx: {
                      width: "152px",
                      Height: "132px",
                      backgroundColor: "#000000",
                      padding: 0,
                    },
                  }}
                  PaperProps={{
                    sx: {
                      width: "152px",
                      Height: "132px",
                      padding: "8px 0",
                      // border: "1px solid #0000001A",
                      background: "#000000",
                      borderRadius: "8px",
                      gap: "4px",
                    },
                  }}
                >
                  {navItems[0].submenu.map(({ label, path }, i) => (
                    <MenuItem
                      key={i}
                      onClick={() => {
                        handleMenuClose();
                        navigate(path);
                      }}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        cursor: "pointer",
                        color: "#D7E4F5",
                        padding: "8px 16px",
                        lineHeight: "20px",
                        fontFamily: "'Fira Sans', sans-serif",
                        "&:hover": {
                          backgroundColor: "#101318",
                        },

                      }}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Other nav items */}
              {navItems.slice(1).map(({ label, path }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  style={({ isActive }) => ({
                    ...styles.navText,
                    fontWeight: isActive ? "bold" : 400,
                    color: isActive ? "#2F80ED" : "#FFFFFF",
                  })}
                >
                  {label}
                </NavLink>
              ))}

              <DynamicButton filled={false} onClick={() => navigate("/Contact")}>
                Contact
              </DynamicButton>
            </Box>
          ) : (
            <>
              <IconButton
                size="large"
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "#FFF" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                  backgroundColor: "#000000",
                  "& .MuiDrawer-paper": {
                    width: isSmallScreen ? "50%" : "100%",
                  },
                }}
              >
                <Box sx={styles.drawerContent}>
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={styles.closeIcon}
                  >
                    <CloseIcon />
                  </IconButton>

                  {/* Drawer nav items */}
                  {navItems.map((item, index) => {
                    if (item.submenu) {
                      return item.submenu.map((subItem, subIndex) => (
                        <NavLink
                          key={`${index}-${subIndex}`}
                          to={subItem.path}
                          style={({ isActive }) => ({
                            ...styles.navText,
                            fontWeight: isActive ? "bold" : 400,
                            color: isActive ? "#2F80ED" : "#FFFFFF",
                          })}
                          onClick={() => setDrawerOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                      ));
                    }
                    return (
                      <NavLink
                        key={index}
                        to={item.path}
                        style={({ isActive }) => ({
                          ...styles.navText,
                          fontWeight: isActive ? "bold" : 400,
                          color: isActive ? "#2F80ED" : "#FFFFFF",
                        })}
                        onClick={() => setDrawerOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    );
                  })}

                  <Button sx={styles.menuItem} onClick={() => {
                    navigate("/contact");
                    setDrawerOpen(false);
                  }}>
                    <DynamicButton filled={false}>Contact</DynamicButton>
                  </Button>

                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const styles = {
  appBar: {
    boxShadow: "none",
    padding: { xs: "10px 10px", sm: "10px 50px" },
    position: "fixed",
    margin: "0 auto",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  },
  toolbar: {
    gap: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
  },
  navItems: {
    gap: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontFamily: "'ZapfHumnst BT', sans-serif",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "2%",
    cursor: "pointer",
    color: "#FFFFFF",
    "&:hover": {
      color: "#2F80ED",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    padding: "20px",
  },
  closeIcon: {
    alignSelf: "flex-end",
    color: "#FFF",
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "15px 0",
    color: "#FFF",
    "&:hover": {
      color: "#2F80ED",
    },
  },
};

export default Navbar;
