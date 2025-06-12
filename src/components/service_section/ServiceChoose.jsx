import React from "react";
import { Box, Typography, Grid } from "@mui/material";
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
        color: "#fff",
        padding: { xs: "20px", sm: "30px", md: "50px" },
    },
    title: {
        padding: "0 20px",
        fontFamily: "Quicksand, sans-serif",
        color: "#fff",
        fontWeight: 700,
        fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "40px" },
    },
    subTextTwo: {
        padding: "0 20px",
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        fontSize: { xs: "14px", sm: "16px", md: "18px" },
        color: "#8A96A6",
        fontWeight: 600,
        lineHeight: "28px",
    },
};


const ServiceChoose = () => {

    return (
        <Box sx={styles.section}>
            <Grid container spacing={4} alignItems="flex-start">
                <Grid item xs={12} md={12}>
                    <Typography sx={styles.title}>Process</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography sx={styles.subTextTwo}>
                        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    );
};

export default ServiceChoose;