import React, { useState, useEffect, useRef, useCallback } from "react";
import { AppBar, Toolbar, Box, IconButton, Drawer, useMediaQuery, Button, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { companyLogo } from "../header/Images";
import DynamicButton from "./DynamicButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const navigate = useNavigate();
  const location = useLocation();

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
        { label: "Internship", path: "/Internship" },
      ],
    },
    { label: "Services", path: "/Service" },
    { label: "Portfolio", path: "/Portfolio" },
  ];

  const isActive = (path) => location.pathname === path;

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
          <Box
            component="img"
            src={companyLogo}
            alt="Logo"
            sx={{ height: 40, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />

          {isMediumScreen ? (
            <Box sx={styles.navItems}>
              <Box>
                <Button
                  onClick={handleMenuOpen}
                  endIcon={<ArrowDropDownIcon />}
                  aria-controls={anchorEl ? "company-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={Boolean(anchorEl)}
                  sx={{ ...styles.navText, display: "flex", alignItems: "center" }}
                >
                  Company
                </Button>
                <Menu
                  id="company-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    sx: {
                      padding: 0,
                      width: "152px",
                      Height: "132px",
                      backgroundColor: "#000000",
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
                        fontFamily: "'Fira Sans', sans-serif",
                        "&:hover": { backgroundColor: "#101318" },
                      }}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {navItems.slice(1).map(({ label, path }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  style={{
                    ...styles.navText,
                    fontWeight: isActive(path) ? "bold" : 400,
                    color: isActive(path) ? "#2F80ED" : "#FFFFFF",
                  }}
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
              <IconButton onClick={() => setDrawerOpen(true)} sx={{
                color: "#fff",
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}>
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#000",
                    width: isSmallScreen ? "50%" : "100%",
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, p: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={companyLogo}
                      alt="Logo"
                      sx={{ height: 40, cursor: "pointer" }}
                      onClick={() => {
                        navigate("/");
                        setDrawerOpen(false);
                      }}
                    />
                    <IconButton sx={{ color: "#fff" }} onClick={() => setDrawerOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {navItems.map((item, i) => (
                    <Box key={i}>
                      {item.submenu ? (
                        <>
                          <Box
                            onClick={() =>
                              setOpenSubMenu(openSubMenu === item.label ? null : item.label)
                            }
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              cursor: "pointer",
                              mt: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: "18px",
                                padding: "5px 0 0 0",
                                "&:hover": {
                                  color: "#2F80ED",
                                },
                              }}
                            >
                              {item.label}
                            </Typography>
                            <ArrowDropDownIcon
                              sx={{
                                color: "#fff",
                                transform:
                                  openSubMenu === item.label ? "rotate(180deg)" : "rotate(0)",
                                transition: "transform 0.3s ease",
                              }}
                            />
                          </Box>

                          {openSubMenu === item.label &&
                            item.submenu.map((sub, j) => (
                              <NavLink
                                key={j}
                                to={sub.path}
                                style={{
                                  color: "#D7E4F5",
                                  textDecoration: "none",
                                  display: "block",
                                  marginLeft: 24,
                                  padding: "4px 0",
                                  fontSize: "16px",
                                }}
                                onClick={() => {
                                  setDrawerOpen(false);
                                  setOpenSubMenu(null);
                                }}
                              >
                                {sub.label}
                              </NavLink>
                            ))}
                        </>
                      ) : (
                        <NavLink
                          to={item.path}
                          style={{
                            color: isActive(item.path) ? "#2F80ED" : "#D7E4F5",
                            textDecoration: "none",
                            display: "block",
                            marginTop: 12,
                            fontWeight: "bold",
                          }}
                          onClick={() => setDrawerOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </Box>
                  ))}

                  <DynamicButton
                    filled={false}
                    onClick={() => {
                      navigate("/Contact");
                      setDrawerOpen(false);
                    }}
                  >
                    Contact
                  </DynamicButton>
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
    justifyContent: "space-between",
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
};

export default Navbar;
