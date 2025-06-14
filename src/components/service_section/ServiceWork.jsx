import React, { useRef, useEffect } from "react";
import { Box, Button, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from '@mui/material/Grid';
import "@fontsource/quicksand";
import { frame } from "../header/Images"
import ReadMore from "../../assets/images/ReadMore.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "Creative landing page", image: frame, },
    { id: 2, title: "Creative landing page", image: frame, },
    { id: 3, title: "Creative landing page", image: frame, },
];

const styles = {
    section: {
        width: "100%",
        maxWidth: "1440px",
        minHeight: "466px",
        color: "#fff",
        padding: { xs: "10px", lg: "50px" },
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        color: "#FFFFFF",
        fontWeight: 700,
        margin: { xs: "10px" },
        fontSize: { xs: "30px", sm: "25px", md: "30px", lg: "40px" },
    },

    card: {
        padding: "10px",
        margin: { xs: "10px" },
        border: "1px solid #fff",
        borderRadius: "10px",
        backgroundColor: "#101318 !important",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            border: "1px solid #2F80ED",
            boxShadow: "0 8px 24px rgba(47, 128, 237, 0.2)",
            "&:before": {
                opacity: 1,
                transform: "translateY(0)",
            },
            "& $projectTitle": {
                transform: "scale(1.05)",
            },
            "& $readMoreButton": {
                transform: "scale(1.05)",
            },
        },
        "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(45deg, rgba(47, 128, 237, 0.1), rgba(16, 19, 24, 0.9))",
            opacity: 0,
            transform: "translateY(100%)",
            transition: "all 0.4s ease-in-out",
            zIndex: 0,
        },
    },
    cardContent: {
        position: "relative",
        zIndex: 1,
    },
    categoryButton: {
        fontSize: "12px",
        marginBottom: 1,
        backgroundColor: "#2F80ED",
        fontWeight: "300",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "#1E5DBE",
            boxShadow: "none",
        },
    },
    projectTitle: {
        fontFamily: "Quicksand, sans-serif",
        textAlign: "left",
        fontSize: "24px",
        fontWeight: "700",
        transition: "transform 0.3s ease-in-out",
    },
    readMoreButton: {
        fontFamily: "Quicksand, sans-serif",
        textAlign: "left",
        color: "#8A96A6",
        fontSize: "16px",
        fontWeight: "500",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "transparent",
        border: "none",
        padding: "5px 0",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            color: "#2F80ED",
            backgroundColor: "transparent",
        },
    },
    readMoreIcon: {
        width: "20px",
        height: "20px",
        transition: "transform 0.3s ease-in-out",
    },
    cardMedia: {
        position: "relative",
        zIndex: 2,
        transition: "all 0.3s ease-in-out",
    },
};

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    once: true,
                },
                duration: 0.8,
                ease: "back.out(1.7)",
            }
        );

        // Animate each card
        gsap.fromTo(
            ".portfolio-card",
            {
                opacity: 0,
                y: 100,
                scale: 0.9,
                rotationX: (i) => (i % 2 === 0 ? -45 : 45),
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationX: 0,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                duration: 0.8,
                ease: "back.out(1.4)",
            }
        );

        // Image hover effects
        imageRefs.current.forEach((image) => {
            if (!image) return;

            const handleMouseEnter = () => {
                gsap.to(image, {
                    scale: 1.05,
                    y: -8,
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    duration: 0.35,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            };

            const handleMouseLeave = () => {
                gsap.to(image, {
                    scale: 1,
                    y: 0,
                    boxShadow: "none",
                    duration: 0.3,
                    ease: "power2.inOut",
                    overwrite: "auto",
                });
            };

            image.addEventListener("mouseenter", handleMouseEnter);
            image.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                image.removeEventListener("mouseenter", handleMouseEnter);
                image.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);


    const setImageRef = (el, index) => {
        imageRefs.current[index] = el;
    };

    return (
        <Box sx={styles.section} ref={sectionRef}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h1" sx={styles.title} ref={titleRef}>
                        Branding Works
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={4} key={project.id}>
                                <Card sx={styles.card} className="portfolio-card">
                                    {project.image && (
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            sx={styles.cardMedia}
                                            ref={(el) => setImageRef(el, index)}
                                        />
                                    )}
                                    <CardContent sx={styles.cardContent}>
                                        <Typography sx={styles.projectTitle}>{project.title}</Typography>
                                        <Button
                                            sx={styles.readMoreButton}
                                            endIcon={<Box component="img" src={ReadMore} sx={styles.readMoreIcon} />}
                                        >
                                            Read more
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PortfolioSection;