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
        Margin:"15px 0",
    },
    title: {
        padding: "0px 10px",
        fontFamily: "Quicksand, sans-serif",
        color: "#fff",
        fontWeight: 700,
        fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "40px" },
    },
    subTextTwo: {
        padding: "20px 10px",
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        fontSize: { xs: "14px", sm: "16px", md: "18px" },
        color: "#8A96A6",
        fontWeight: 600,
        lineHeight: "28px",
    },
};

const AboutChoose = () => {

    return (
        <Box sx={styles.section}>
            <Grid container alignItems="flex-start">
                <Grid item xs={12} md={12}>
                    <Typography sx={styles.title}>Company</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography sx={styles.subTextTwo}>
                        Briotechno is a digital solutions company founded in 2017 and based in Mehsana, Gujarat. We specialize in custom web and mobile application development, delivering scalable and high-performing products tailored to each client's goals. With a global team of experienced developers, we've successfully completed over 80 projects across various industries. Our expertise spans UI/UX design, software development, eCommerce, CMS, and more, using modern technologies like React Native, PHP, and Flutter. We are committed to transparency, innovation, and building meaningful digital experiences. Every project is approached with precision and care, as if it were a mission-critical launch. At Briotechno, we value long-term relationships and aim to be a trusted technology partner. We serve startups, enterprises, and everything in between, helping them turn bold ideas into reality. Our focus on quality, collaboration, and client success is what sets us apart in the digital space.
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    );
};

export default AboutChoose;