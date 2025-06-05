import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/quicksand";

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
        padding: { xs: "10px" },
        minHeight: { xs: "600px", sm: "200px" },
    },
    textContainer: {
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // textAlign: "left",
        padding: "20px 10px",
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        color: "#D7E4F5",
        fontWeight: 700,
        fontSize: "24px",
        marginBottom: "10px",
    },
    subTextTwo: {
        width: "100%",
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        color: "#D7E4F599",
        fontWeight: 500,
    },
};

const CareerApplyRules = () => {

    return (
        <Box sx={styles.section}>
            <Grid
                container
                spacing={4}
            >
                <Grid item xs={12} md={12}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h1" sx={styles.title}>
                            About the Company
                        </Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            Cocoma Digital Private Limited is a YouTube specialist that helps media companies to promote their films, web
                            series, documentaries, digital products, etc. on YouTube. Our focus is on YouTube video production and
                            growth hacking to increase the visibility and engagement of our client’s channels.
                        </Typography>
                    </Box>
                </Grid>

                {/* About the Role Section */}
                <Grid item xs={12} md={12}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h1" sx={styles.title}>
                            About the Role
                        </Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            We are seeking a highly motivated and detail-oriented YouTube Executive to join our team. The successful
                            candidate will be responsible for managing our clients&#39; YouTube channels, developing and executing growth
                            strategies, and creating engaging content.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CareerApplyRules;