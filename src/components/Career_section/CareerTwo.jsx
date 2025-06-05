import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DynamicButton from "../header/DynamicButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "@fontsource/quicksand";
import "../../styles/fonts.css";

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
        fontSize: { xs: "30px", sm: "32px", md: "42px", lg: "52px" },
        marginBottom: "20px",
    },
    subTextTwo: {
        maxWidth: "650px",
        fontWeight: 500,
        textAlign: "center",
        color: "#D7E4F599",
        fontFamily: "Poppins, sans-serif",
        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
    },
};

const CareerTwo = () => {

    return (
        <Box sx={styles.section}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12} order={{ xs: 1, md: 2 }}>
                    <Box
                        sx={styles.textContainer}
                    >
                        <Typography variant="h1" sx={styles.title}>
                            Make an impact at front
                        </Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            Ready to take role where you can make a lasting impact on your team,
                            We'd love to have more talented people on board
                        </Typography>
                        <Box sx={{ paddingX: { lg: "45px", sm: "0" }, mt: 2 }}>
                            <DynamicButton filled={true}>See all open postions
                                {<ArrowDropDownIcon />}
                            </DynamicButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CareerTwo;