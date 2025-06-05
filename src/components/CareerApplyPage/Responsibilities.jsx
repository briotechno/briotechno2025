import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/quicksand";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const styles = {
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
        padding: "20px 10px",
    },
    title: {
        fontFamily: "Poppins, sans-serif",
        color: "#D7E4F5",
        fontWeight: 700,
        fontSize: "24px",
        marginBottom: "20px",
    },

    list: {
        paddingLeft: "20px",
        color: "#D7E4F599",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        fontWeight: 500,
    },
    notes: {
        color: "#D7E4F599",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        fontWeight: 500,
    },
    footnotes: {
        padding: "25px 0",
        color: "#D7E4F599",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        fontWeight: 500,
    },
};

const responsibilities = [
    "Manage and grow client YouTube channels",
    "Develop and execute growth strategies to increase visibility and engagement",
    "Create and edit high-quality video content for YouTube",
    "Collaborate with internal teams to ensure the delivery of high-quality work on time",
    "Analyze and report on channel performance and provide recommendations for improvement"
];

const Requirements = [
    "Proven experience in managing YouTube channels and executing growth strategies",
    "Strong video editing and content creation skills",
    "Excellent communication, organizational, and project management skills",
    "Deep understanding of YouTube algorithms and best practices for content creation and optimization",
    "Ability to work independently and as part of a team"
];

const Responsibilities = () => {
    return (
        <Box sx={styles.section}>
            <Grid container spacing={4}>

                {/* Responsibilities with map */}
                <Grid item xs={12} md={12}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h1" sx={styles.title}>
                            Responsibilities
                        </Typography>
                        <ul style={styles.list}>
                            {responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <Typography variant="h1" sx={styles.title}>
                            Responsibilities
                        </Typography>
                        <ul style={styles.list}>
                            {Requirements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Box>
                    <Typography sx={styles.notes}>
                        If you are passionate about YouTube and have a proven track record of success, we would love to hear from
                        you. Please apply with your resume and a cover letter that highlights your experience and qualifications for
                        this role to hr@EXAMPLE.com
                    </Typography>
                    <Typography sx={styles.footnotes}>
                        We are an equal opportunity employer and welcome all qualified candidates to apply.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Responsibilities;
