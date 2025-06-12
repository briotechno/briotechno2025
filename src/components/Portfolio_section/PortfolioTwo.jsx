import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DynamicButton from "../header/DynamicButton";
import { Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6 } from "../header/Images";
import { useNavigate } from "react-router-dom";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const styles = {
  content: {
    width: "100%",
    minHeight: { xs: "600px", sm: "300px" },
  },
  section: {
    width: "100%",
    maxWidth: "1440px",
    color: "#fff",
    padding: { xs: "10px", lg: "50px" },
    minHeight: { xs: "250px", sm: "200px" },
  },

  textContainer: {
    width: "100%",
    padding: "15px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    color: "#D7E4F5",
    fontWeight: 600,
    lineHeight: "25px",
    fontSize: { xs: "18px", sm: "22px", md: "22px", lg: "40px" },
    marginBottom: "20px",
  },
  subTextTwo: {
    fontWeight: 500,
    textAlign: "center",
    padding: "0 8px",
    color: "#D7E4F599",
    fontFamily: "Poppins, sans-serif",
    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
  },
  imageGrid: {
    width: "100%",
    maxWidth: "1220px",
    margin: "0 auto",
    padding: {
      lg: "0 35px",
      md: "0 25px",
      xs: "0 15px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBox: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

};

const images = [
  { src: Portfolio1, alt: "portfolio-1", role: "Designer" },
  { src: Portfolio2, alt: "portfolio-2", role: "Developer" },
  { src: Portfolio3, alt: "portfolio-3", role: "Manager" },
  { src: Portfolio4, alt: "portfolio-4", role: "Marketer" },
  { src: Portfolio5, alt: "portfolio-5", role: "Consultant" },
  { src: Portfolio6, alt: "portfolio-6", role: "Analyst" },
];

const PortfolioTwo = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.section}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} order={{ xs: 1, md: 2 }}>
          <Box sx={styles.textContainer}>
            <Typography variant="h1" sx={styles.title}>
              Mobile & Web Applications
            </Typography>
            <Typography variant="body1" sx={styles.subTextTwo}>
              We help create solutions that optimize processes, improve accessibility to data, and increase successful outcomes by providing the necessary
              insights and tools to change physician and patient behavior.
            </Typography>
          </Box>
          <Grid container sx={styles.imageGrid}>
            {images.map(({ src, alt, role }, idx) => (
              <Grid item xs={12} sm={12} md={12} key={idx} sx={styles.imageBox}>
                <img
                  src={src}
                  alt={alt}
                  style={styles.img}
                  onClick={() => navigate(`/Portfolio/${role.toLowerCase().replace(/\s+/g, "-")}`)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "35px 0 0 0", mt: 2 }}>
        <DynamicButton filled={true} onClick={() => navigate("PortfolioDetailpage")}>
          Load more
        </DynamicButton>
      </Box>
    </Box>
  );
};

export default PortfolioTwo;