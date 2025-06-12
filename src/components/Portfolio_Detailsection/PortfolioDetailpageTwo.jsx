import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
import DynamicButton from "../header/DynamicButton";
import {
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
    Portfolio7,
} from "../../components/header/Images";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const styles = {

    section: {
        width: "100%",
        color: "#fff",
        padding: 0,
        margin: 0,
        minHeight: { xs: "600px", sm: "300px" },
    },
    textContainer: {
        width: "100%",
        height: "350px",
        maxWidth: "604px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: { xs: "0 10px", md: "0 30px" },
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        color: "#fff",
        fontWeight: 700,
        fontSize: { xs: "30px", sm: "25px", md: "30px", lg: "40px" },
        marginBottom: "20px",
    },
    subTextTwo: {
        width: "100%",
        maxWidth: { xs: "300px", sm: "500px", lg: "604px" },
        color: "#8A96A6",
        lineHeight: "26px",
        fontSize: { xs: "14px", sm: "16px", md: "18px" },
        fontWeight: 400,
        textAlign: "justify",
    },
    image: {
        width: "100%",
        maxWidth: "1220px",
        margin: "0 auto",
        padding: "15px 0"
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
        gap: 3,
    },
    imageBox: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
    { src: Portfolio1, alt: "portfolio-1" },
    { src: Portfolio2, alt: "portfolio-2" },
    { src: Portfolio3, alt: "portfolio-3" },
    { src: Portfolio4, alt: "portfolio-4" },
    { src: Portfolio5, alt: "portfolio-5" },
    { src: Portfolio6, alt: "portfolio-6" },
];
const imagesTwo = [
    { src: Portfolio7, alt: "portfolio-7" },
];
const PortfolioDetailpageTwo = () => {

    return (
        <Box sx={styles.section}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12} order={{ xs: 1, md: 2 }}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h1" sx={styles.title}>
                            Project Name
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white" }}>
                                React Js
                            </DynamicButton>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white" }}>
                                NodeJs
                            </DynamicButton>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white" }}>
                                TailwindCSS
                            </DynamicButton>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white" }}>
                                MUI
                            </DynamicButton>
                        </Box>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            truHypothesys enables banks to assess risks in retail loan pools and helps NBFCs unlock funds by connecting with large investors through a streamlined platform.
                        </Typography>


                    </Box>

                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <img
                            src={Portfolio1}
                            alt="portfolio-1"
                            style={{
                                width: "100%",
                                maxWidth: "1440px",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#000",
                            px: 2,
                        }}
                    >
                        <Box
                            sx={{
                                fontFamily: "Quicksand, sans-serif",
                                width: "100%",
                                maxWidth: "380px",
                                maxHeight: "714px",
                                padding: "50px 0",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "left",
                                color: "#ffffff",
                                lineHeight: "28px",
                            }}
                        >
                            <Typography variant="body1" sx={{ mb: 3, maxWidth: "280px", fontSize: "16px", fontWeight: 500 }}>
                                We collaborated with truHypothesys to design the SaaS Dashboard, a powerful tool that enhances financial decision-making by providing a clear and intuitive interface for assessing loan portfolios.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, maxWidth: "280px", fontSize: "16px", fontWeight: 500 }}>
                                The dashboard allows users to efficiently analyze risks and manage investments, offering a streamlined experience for both banks and NBFCs. Our design focused on simplifying complex data, ensuring that key insights are easily accessible, empowering users to make informed decisions with confidence.
                            </Typography>
                        </Box>
                    </Box>

                    <Grid container sx={styles.imageGrid}>
                        {images.map(({ src, alt }, idx) => (
                            <Grid item xs={12} sm={12} md={12} key={idx} sx={styles.imageBox}>
                                <img
                                    src={src}
                                    alt={alt}
                                    style={styles.img}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container sx={styles.image}>
                        {imagesTwo.map(({ src, alt }, idx) => (
                            <Grid item xs={12} sm={12} md={12} key={idx}>
                                <img
                                    src={src}
                                    alt={alt}
                                    style={styles.img}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default PortfolioDetailpageTwo;
