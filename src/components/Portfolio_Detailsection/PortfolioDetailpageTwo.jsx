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
    content: {
        width: "100%",
        maxWidth: "1440px",
        minHeight: { xs: "600px", sm: "300px" },
        justifyContent: "center",
        alignItems: "center",
    },
    section: {
        width: "100%",
        maxWidth: "1440px",
        color: "#fff",
        padding: { xs: "10px", lg: "50px" },
        minHeight: { xs: "600px", sm: "200px" },
    },
    textContainer: {
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px 10px",
        marginLeft: { xs: "20px", md: "0px" },
        marginRight: { xs: "20px", md: "0px" }
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
        padding: "10px 0",
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
        color: "#8A96A6",
        fontWeight: 600,
        lineHeight: "24px",
    },
    imageGrid: {
        padding: {
            lg: "0 35px",
            md: "0 25px",
            xs: "0 15px",
        }
    },
    imageBox: {
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px",
        cursor: "pointer",
    },
    Portfoliocontainer: {
        padding: "15px 0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    Portfoliotext: {
        padding: {
            lg: "0 35px",
            md: "0 25px",
            xs: "0 15px",
        },
        maxWidth: {
            lg:"30%",
            md:"35%",
            sm:"40%"
        }
    },
};

const images = [
    { src: Portfolio1, alt: "portfolio-1" },
    { src: Portfolio2, alt: "portfolio-2" },
    { src: Portfolio3, alt: "portfolio-3" },
    { src: Portfolio4, alt: "portfolio-4" },
    { src: Portfolio5, alt: "portfolio-5" },
    { src: Portfolio6, alt: "portfolio-6" },
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
                        <Box>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white", marginX: 1 }}>
                                React Js
                            </DynamicButton>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white", marginX: 1 }}>
                                NodeJs
                            </DynamicButton>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white", marginX: 1 }}>
                                TaiwindCSS
                            </DynamicButton>
                            <DynamicButton filled={false} sx={{ borderColor: "white", color: "white", marginX: 1 }}>
                                MUI
                            </DynamicButton>
                        </Box>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            truHypothesys enables banks to assess risks in retail loan pools and helps NBFCs unlock funds by connecting with large investors through a streamlined platform.
                        </Typography>
                    </Box>

                    <img
                        src={Portfolio1}
                        alt="portfolio-1"
                        style={{ width: "100%" }}
                    />

                    <Box sx={styles.Portfoliocontainer}>
                        <Typography variant="body1" sx={styles.Portfoliotext}>
                            We collaborated with truHypothesys to design the SaaS Dashboard, a powerful tool that enhances financial decision-making by providing a clear and intuitive interface for assessing loan portfolios.
                        </Typography>
                        <Typography variant="body1" sx={styles.Portfoliotext}>
                            The dashboard allows users to efficiently analyze risks and manage investments, offering a streamlined experience for both banks and NBFCs. Our design focused on simplifying complex data, ensuring that key insights are easily accessible, empowering users to make informed decisions with confidence.
                        </Typography>
                    </Box>

                    <Grid container spacing={3} sx={styles.imageGrid}>
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
                </Grid>
            </Grid>
        </Box>
    );
};

export default PortfolioDetailpageTwo;
