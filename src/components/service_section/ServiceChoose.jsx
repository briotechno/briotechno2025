import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
import ChooseImg from "../../assets/images/Choose.png";
import DynamicButton from "../header/DynamicButton";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const styles = {
    content: {
        width: "100%",
        maxwidth: "1440px",
        minHeight: { xs: "600px", sm: "300px" },
        justifyContent: "center",
        alignItems: "center",
    },
    section: {
        width: "100%",
        maxWidth: "1440px",
        color: "#fff",
        maxwidth: "1440px",
        padding: { xs: "10px", lg: "50px" },
        minHeight: { xs: "600px", sm: "200px" },
    },
    textContainer: {
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // textAlign: "left",
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
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        paddingBottom: "10px",
        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
        color: "#8A96A6",
        fontWeight: 600,
        lineHeight: "24px",
    },
};

const ServiceChoose = () => {

    return (
        <Box sx={styles.section} >
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h1" sx={styles.title}>
                        Process
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="body1" sx={styles.subTextTwo}>
                        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ServiceChoose;