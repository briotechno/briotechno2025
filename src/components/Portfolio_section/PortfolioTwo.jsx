import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Portfolio1, Portfolio2, Portfolio4, Portfolio5, Portfolio6, Portfolio7, Portfolio8, Portfolio9, Portfolio10 } from "../header/Images";
import InsertLinkIcon from '@mui/icons-material/InsertLink';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: Portfolio1, alt: "portfolio-1", role: "Vuetra", link: "https://vuetra.com/" },
  { src: Portfolio2, alt: "portfolio-2", role: "Gharpedia", link: "https://gharpedia.com/" },
  { src: Portfolio4, alt: "portfolio-4", role: "Ghargharbazaar", link: "https://ghargharbazaar.com/" },
  { src: Portfolio5, alt: "portfolio-5", role: "Salesroom", link: "https://salesroom.vercel.app/" },
  { src: Portfolio6, alt: "portfolio-6", role: "Deckmount", link: "https://www.deckmount.in/" },
  { src: Portfolio7, alt: "portfolio-7", role: "Axzoraevents", link: "https://axzoraevents.com/" },
  { src: Portfolio8, alt: "portfolio-8", role: "Creekdemo", link: "http://creekdemo.s3-website.ap-south-1.amazonaws.com/" },
  { src: Portfolio9, alt: "portfolio-9", role: "Wariior", link: "https://wariior-town.vercel.app/" },
  { src: Portfolio10, alt: "portfolio-10", role: "Potato-studio", link: "https://potato-studio.vercel.app/" },
];
const styles = {
  container: {
    width: "100%",
    maxWidth: "1440px",
    minHeight: { xs: "600px", sm: "300px" },
    color: "#fff",
    py: 4,
  },
  header: {
    textAlign: "center",
    mb: 4,
  },
  title: {
    fontFamily: "Quicksand, sans-serif",
    color: "#D7E4F5",
    fontWeight: 600,
    fontSize: "40px",
    mb: 2,
  },
  subtitle: {
    fontWeight: 500,
    color: "#D7E4F5",
    fontFamily: "Quicksand, sans-serif",
    fontSize: "20px"
  },
  imageGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: { xs: "0 15px", lg: "0 1px" },
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover .overlay": {
      opacity: 1,
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bgcolor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
    color: "#fff",
    textAlign: "center",
    px: 2,
  },
  button: {
    color: "#fff",
    borderColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  }

};

const PortfolioTwo = () => {

  return (
    <Box sx={styles.container}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Box sx={styles.header}>
            <Typography variant="h1" sx={styles.title}>
              Mobile & Web Applications
            </Typography>
            <Typography variant="body1" sx={styles.subtitle}>
              We design and develop fast, scalable, and user-friendly web and mobile applications tailored to your business goals.
            </Typography>
          </Box>
          <Grid2 container spacing={2} justifyContent="center">
            {images.map(({ src, alt, role, link }, idx) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={idx}>
                <Box sx={styles.imageGrid}>
                  <Box component="img" src={src} alt={alt} sx={styles.img} />
                  <Box className="overlay" sx={styles.overlay}>
                    <Typography sx={{
                      fontSize: { xs: "28px", md: "56px" }
                    }}>{role} </Typography>
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <Button variant="outlined" sx={styles.button}>
                        View More
                        <InsertLinkIcon sx={{ ml: 1 }} />
                      </Button>
                    </a>
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PortfolioTwo;
