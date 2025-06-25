import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/quicksand";
import "../../styles/fonts.css";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const styles = {
    section: {
        width: "100%",
        maxWidth: "1440px",
        minHeight: "380px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px" },
    },
    title: {
        padding: "0px 10px",
        fontSize: "32px",
        fontWeight: 700,
        color: "#FFFFFF",
        fontFamily: "Quicksand, sans-serif",
    },
    subTextTwo: {
        padding: "0 10px",
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "16px",
        color: "#8A96A6",
        fontWeight: 600,
        lineHeight: "24px",
    },
};

const ServiceChoose = () => {

    return (
        <Box sx={styles.section}>
            <Grid2 container spacing={4} alignItems="flex-start">
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography sx={styles.title}>Process</Typography>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography sx={styles.subTextTwo}>
                        At Briotechno, we follow a clear and collaborative process to bring your ideas to life. It all starts with the discovery phase, where we understand your vision, goals, and audience to define a strategic roadmap. From there, our design team crafts intuitive and engaging UI/UX experiences tailored to your brand. Once the designs are approved, our developers bring them to life using the latest technologies to ensure performance, security, and scalability. Every project goes through rigorous testing and quality assurance to guarantee a flawless user experience. After thorough validation, we launch your product smoothly and ensure everything is running perfectly. Even after launch, we stay connected — offering ongoing support, maintenance, and optimization to help you grow and adapt as your needs evolve.
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default ServiceChoose;