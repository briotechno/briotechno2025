import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import DynamicButton from "./DynamicButton";

const styles = {
  appBar: {
    top: 0,
    left: 0,
    width: "100%",
    maxWidth:"1440px",
    background: "linear-gradient(to right, black 80%, #0F0F0FCC 100%)",
    backdropFilter: "blur(18px)",
    opacity: 0.9,
    boxShadow: "none",
    zIndex: 1100,
    px: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: {
    width: "100%",
    maxWidth: "1440px",
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    pr: 2,
  },
  tab: (isSelected: boolean) => ({  
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "2%",
    color: isSelected ? "#2F80ED" : "#FFFFFF",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#2F80ED",
    },
  }),
  button: {
    width: "114px",
    height: "38px",
    padding: "10px 24px",
    borderWidth: "1px",
    borderRadius: "1000px",
    borderColor: "#2F80ED",
    color: "#2F80ED",
    backgroundColor: "transparent",
    fontFamily: "Agrandir, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "100%",
    textTransform: "uppercase",
    ml: 2, 
    "&:hover": {
      backgroundColor: "rgba(47, 128, 237, 0.1)",
    },
  },
};

const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Company");

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={styles.navLinks}>
          {["Company", "Services", "Resources"].map((tab) => (
            <Typography
              key={tab}
              onClick={() => setSelectedTab(tab)}
              sx={styles.tab(selectedTab === tab)}
            >
              {tab}
            </Typography>
          ))}
        </Box>
        <DynamicButton filled={false}>Contact</DynamicButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
