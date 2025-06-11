import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Growth, Great, Executive, Collaboration, Culture } from "../header/Images"

gsap.registerPlugin(ScrollTrigger);

const CareerWork = () => {
    const boxData = [
        {
            img: Growth,
            title: "Rapid Growth",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            img: Collaboration,
            title: "Team Collaboration ",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            img: Culture,
            title: "Vibrant Culture",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            img: Executive,
            title: "Executive Mentors",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            img: Great,
            title: "Great Perks",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ];
    const styles = {
        section: {
            zIndex: 1,
            width: "100%",
            maxWidth: "1440px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 2, sm: 3 },
            py: "60px",
            margin: "0 auto",
        },

        textContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
        title: {
            fontFamily: "Poppins, sans-serif",
            color: "#D7E4F5",
            fontWeight: 600,
            lineHeight: "100%",
            fontSize: { xs: "30px", sm: "30px", md: "32px", lg: "36px" },
            marginBottom: "35px",
        },
        subTextTwo: {
            width: "650px",
            fontWeight: 500,
            textAlign: "center",
            color: "#D7E4F599",
            fontFamily: "Quicksand, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
        },
        heading: {
            fontFamily: "Quicksand, sans-serif",
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "25px", md: "30px", lg: "40px" },
            marginBottom: "20px",
        },

        gridContainer: {
            width: "100%",
            maxWidth: "1440px",
        },
        box: {
            width: "100%",
            borderRadius: "16px",
            padding: "15px 0",
            border: "1px solid transparent",
            transition: "transform 0.3s ease, border 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "flex-start",
            "&:hover": {
                border: "1px solid #2F80ED",
                transform: "scale(1.05)",
            },
        },

        image: {
            width: "48px",
            height: "48px",
        },
        boxHeading: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            padding: "15px 0",
            fontSize: "24px",
            color: "#D7E4F5",
        },
        boxSubheading: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            padding: "15px 0",
            fontSize: "16px",
            color: "#D7E4F599",
        },
    };

    return (
        <Box sx={styles.section}>
            <Box>

                <Grid item xs={12} md={12} order={{ xs: 1, md: 2 }}>
                    <Box
                        sx={styles.textContainer}
                    >
                        <Typography variant="h1" sx={styles.title}>
                            Why work with us
                        </Typography>
                    </Box>
                </Grid>
                <Grid container spacing={3} sx={styles.gridContainer} justifyContent="center">
                    {boxData.map((box, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            display="flex"
                            justifyContent="center"
                        >
                            <Box
                                sx={styles.box}
                                className="offer-box"
                            >
                                <img src={box.img} alt={box.title} style={styles.image} />
                                <Typography sx={styles.boxHeading}>{box.title}</Typography>
                                <Typography sx={styles.boxSubheading}>{box.desc}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default CareerWork;