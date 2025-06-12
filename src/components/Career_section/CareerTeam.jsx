import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CareerTeam = () => {

    const boxData = [
        {
            No: "01",
            title: "Application and recruiter screen",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            No: "02",
            title: "First round interview",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            No: "03",
            title: "Task or challenge",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            No: "04",
            title: "Final interview",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ];
    const styles = {
        section: {
            width: "100%",
            maxWidth: "1440px",
            p: { xs: "16px", sm: "24px", md: "32px" },
            pb: "100px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        },
        textContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "25px 0"
        },
        title: {
            fontFamily: "Poppins, sans-serif",
            color: "#D7E4F5",
            fontWeight: 600,
            lineHeight: "100%",
            fontSize: { xs: "30px", sm: "30px", md: "32px", lg: "36px" },
            marginBottom: "20px",
        },
        subTextTwo: {
            maxWidth: "650px",
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
            lineHeight: "56px",
            textAlign: "left",
            opacity: 0,
            alignSelf: "flex-start",
            paddingLeft: "5%",
        },
        gridContainer: {
            width: "100%",
            maxWidth: "1440px",
        },
        box: {
            m: 2,
            width: "100%",
            borderRadius: "16px",
            padding: "20px",
            backgroundColor: "#101318",
            border: "1px solid transparent",
            transition: "transform 0.3s ease, border 0.3s ease",
            "&:hover": {
                border: "1px solid #2F80ED",
                transform: "scale(1.05)",
            },
        },
        image: {
            width: "50px",
            height: "50px",
        },
        No: {
            // fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: "100%",
            color: "#2F80ED",
        },
        boxHeading: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#D7E4F5",
            margin: "12px 0",
        },

        boxSubheading: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#D7E4F599",
            lineHeight: "1.6",
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
                            How we hire our team
                        </Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            We like to keep things as simple as possible so we can get to what’s really important - finding out more about you
                        </Typography>
                    </Box>
                </Grid>
                <Grid container sx={styles.gridContainer} justifyContent="center">
                    {boxData.map((box, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={3}
                            lg={3}
                            display="flex"
                            justifyContent="center"
                        >
                            <Box
                                sx={styles.box}
                                className="offer-box"
                            >
                                <Typography sx={styles.No}>{box.No}</Typography>
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

export default CareerTeam;