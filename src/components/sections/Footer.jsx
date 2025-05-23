import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import "@fontsource/quicksand";
import { Padding } from "@mui/icons-material";

const styles = {
    footer: {
        width: "100%",
        maxWidth: "1440px", // ✅ fixed
        minHeight: { xs: "600px", sm: "300px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3, 
        py: 2, 
        mx: "auto",
    },
    section: {
        color: "#fff",
        minHeight: { xs: "600px", sm: "200px" },
        width: "100%",
        maxWidth: "1640px",
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
            <Grid
                container
                spacing={{ xs: 4, sm: 8, md: 16, lg: 32 }}
                sx={styles.section}
            >
                {footerData.map((section, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
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
        </Box>
    );
};

export default Footer;
