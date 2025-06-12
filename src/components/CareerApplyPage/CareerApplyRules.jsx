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
        padding: { xs: "20px", sm: "40px" },
        minHeight: { xs: "600px", sm: "400px" },
        boxSizing: "border-box",
        margin: "0 auto",
    },
    textContainer: {
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    title: {
        fontFamily: "Poppins, sans-serif",
        color: "#D7E4F5",
        fontWeight: 700,
        fontSize: { xs: "20px", sm: "24px", md: "28px" },
    },
    listItem: {
        color: "#D7E4F599",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        fontWeight: 500,
    },
    subTextTwo: {
        width: "100%",
        textAlign: "justify",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        color: "#D7E4F599",
        fontWeight: 500,
    },
    notes: {
        color: "#D7E4F599",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "18px",
        fontWeight: 500,
    },
    footnotes: {
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

const requirements = [
    "Proven experience in managing YouTube channels and executing growth strategies",
    "Strong video editing and content creation skills",
    "Excellent communication, organizational, and project management skills",
    "Deep understanding of YouTube algorithms and best practices for content creation and optimization",
    "Ability to work independently and as part of a team",
];

const CareerApplyRules = () => {
    return (
        <Box sx={styles.section}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h2" sx={styles.title}>About the Company</Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            Cocoma Digital Private Limited is a YouTube specialist that helps media companies promote their films, web
                            series, documentaries, digital products, etc., on YouTube. Our focus is on YouTube video production and
                            growth hacking to increase the visibility and engagement of our client’s channels.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h2" sx={styles.title}>About the Role</Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            We are seeking a highly motivated and detail-oriented YouTube Executive to join our team. The successful
                            candidate will be responsible for managing our clients' YouTube channels, developing and executing growth
                            strategies, and creating engaging content.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={styles.textContainer}>
                        <Typography sx={styles.title}>Responsibilities</Typography>
                        <ul>
                            {responsibilities.map((item, index) => (
                                <li key={index}>
                                    <Typography component="span" sx={styles.listItem}>
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={styles.textContainer}>
                        <Typography sx={styles.title}>Requirements</Typography>
                        <ul>
                            {requirements.map((item, index) => (
                                <li key={index}>
                                    <Typography component="span" sx={styles.listItem}>
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={styles.textContainer}>
                        <Typography sx={styles.notes} paragraph>
                            If you are passionate about YouTube and have a proven track record of success, we would love to hear from
                            you. Please apply with your resume and a cover letter highlighting your experience and qualifications at{" "}
                            <a href="mailto:hr@EXAMPLE.com" style={{ color: "#D7E4F5", textDecoration: "underline" }}>
                                hr@EXAMPLE.com
                            </a>.
                        </Typography>
                        <Typography sx={styles.footnotes}>
                            We are an equal opportunity employer and welcome all qualified candidates to apply.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CareerApplyRules;
