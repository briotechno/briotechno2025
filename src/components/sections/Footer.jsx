import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import "@fontsource/quicksand";

const styles = {
    footer: {
        width: "100%",
        backgroundColor: "#000000",
        padding: "50px 0",
        minHeight: "400px",
    },
    heading: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "22px",
        letterSpacing: "2%",
        color: "white",
        marginBottom: "20px",
        textAlign: "left",
    },
    text: {
        fontFamily: "Quicksand, sans-serif",
        color: "#8A96A6",
        lineHeight: "22px",
        fontSize: "16px",
        marginBottom: "18px",
        cursor: "pointer",
        transition: "color 0.3s ease",
        textAlign: "left",
        whiteSpace: "nowrap",
    },
    textHover: {
        color: "#2F80ED",
    },
};

const footerData = [
    {
        title: "Company",
        links: ["About Us", "Team", "Career"],
    },
    {
        title: "Services",
        links: [
            "Branding",
            "Web Development", // Ensure this stays in one line
            "Digital Marketing", // Ensure this stays in one line
            "Mobile App",
            "SEO",
            "User Testing",
        ],
    },
    {
        title: "Resources",
        links: ["Blog", "Case Study", "Testimonials"],
    },
    {
        title: "Follow Us",
        links: ["Instagram", "Figma"],
    },
];

const Footer = () => {
    return (
        <Box sx={styles.footer}>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 4, sm: 8, md: 16, lg: 32 }}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    {footerData.map((section, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{ flexGrow: 1 }}>
                            <Typography sx={styles.heading}>{section.title}</Typography>
                            {section.links.map((link, i) => (
                                <Typography
                                    key={i}
                                    sx={{
                                        ...styles.text,
                                        "&:hover": styles.textHover,
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
