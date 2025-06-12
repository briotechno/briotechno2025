import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/quicksand";

const styles = {
    footer: {
        width: "100%",
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        minHeight: "431px",
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
        "&:hover": {
            color: "#2F80ED",
        },
    },
};

const footerData = [
    {
        title: "Company",
        links: [
            { label: "About Us", path: "/about" },
            { label: "Team", path: "/" },
            { label: "Careers", path: "/Career" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "Branding", path: "/service" },
            { label: "Web Development", path: "/service" },
            { label: "Digital Marketing", path: "/service" },
            { label: "Mobile App", path: "/service" },
            { label: "SEO", path: "/service" },
            { label: "User Testing", path: "/service" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", path: "/blog" },
            { label: "Case Study", path: "/case-study" },
            { label: "Testimonials", path: "/testimonials" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { label: "Instagram", path: "https://instagram.com" },
            { label: "Figma", path: "https://figma.com" },
        ],
    },
];

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        if (path.startsWith("http")) {
            window.open(path, "_blank");
        } else {
            navigate(path);
        }
    };

    return (
        <Box sx={styles.footer}>
            <Grid container spacing={{ xs: 4, sm: 8, md: 16, lg: 32 }}>
                {footerData.map((section, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Typography sx={styles.heading}>{section.title}</Typography>
                        {section.links.map((link, i) => (
                            <Typography
                                key={i}
                                sx={styles.text}
                                onClick={() => handleClick(link.path)}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Footer;
