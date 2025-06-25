import React from 'react';
import { useRef, useEffect } from "react";
import { Box, Button, Typography, Card, CardContent, CardMedia, Grid2 } from "@mui/material";
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";
import { frame, ReadMore } from "../header/Images"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: "Creative landing page", category: "Website", image: frame, id: 1 },
    { title: "Creative Branding", category: "Branding", image: frame, id: 2 },
    { title: "Automation Advanced Level", category: "Development", image: frame, id: 3 },
];
const projecttwo = [
    { title: "Why We Collect User's Data", category: "Digital Marketing", image: frame, id: 4 },
    { title: "Creative landing page", category: "User Testing", image: frame, id: 5 },
    { title: "How We Optimized Our SEO", category: "SEO", image: frame, id: 6 },
];

const styles = {
    content: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#101318",
    },
    section: {
        width: "100%",
        maxWidth: "1440px",
        padding: "30px",
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: "56px",
        color: "#D7E4F5"
    },
    description: {
        fontFamily: "Quicksand, sans-serif",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        letterSpacing: "2%",
        color: "#8A96A6"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginTop: 2,
        width: "140px",
    },
    card: {
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #A1AEBF",
        borderRadius: "4px",
        backgroundColor: "#101318",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            border: "1px solid #2F80ED",
        },
    },
    cardContent: {
        width: "100%",
        maxwidth: "365px",
        position: "relative",
        padding: "20px 0",
        zIndex: 1,
    },
    cardMedia: {
        objectFit: "cover",
        borderRadius: "4px",
        position: "relative",
        zIndex: 2,
        transition: "all 0.3s ease-in-out",
        opacity: 0,
        height: 0,
        overflow: "hidden",
    },
    categoryButton: {
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "16px",
        letterSpacing: "2%",
        color: "#1A365D",
        backgroundColor: "#2F80ED",
        borderRadius: "4px",
        textTransform: "uppercase",
    },
    projectTitle: {
        fontFamily: "Quicksand, sans-serif",
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "32px",
        letterSpacing: "0px",
        color: "#D7E4F5",
        padding: "10px 0",
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
};

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const imageRefs = useRef([]);

    const setImageRef = (el, index) => {
        if (el) imageRefs.current[index] = el;
    };

    const [activeCard, setActiveCard] = React.useState(1); // default card id

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                duration: 0.8,
                ease: "power2.out",
            }
        );

        gsap.fromTo(
            descRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                duration: 0.8,
                ease: "power2.out",
                delay: 0.2,
            }
        );

        gsap.fromTo(
            ".portfolio-card",
            {
                opacity: 0,
                y: -100,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                duration: 0.8,
                ease: "back.out(1.7)",
            }
        );
    }, []);

    return (
        <>
            <Box sx={styles.content}>
                <Box sx={styles.section} ref={sectionRef}>
                    <Grid2 container spacing={2}>
                        {/* Left Section */}
                        <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                            <Typography sx={styles.title} ref={titleRef}>
                                Some pieces of our work
                            </Typography>
                            <Typography variant="body1" sx={styles.description} ref={descRef}>
                                We turn bold ideas into impactful digital experiences. Our portfolio reflects a deep commitment to quality, innovation, and user-centered design. From branding and websites to mobile apps and digital marketing, every project we take on is crafted with precision, creativity, and purpose.
                                <br />
                                We’ve partnered with startups, growing businesses, and global brands to build smart, scalable solutions that drive real results.
                            </Typography>
                            <Box sx={styles.buttonContainer}>
                                <DynamicButton filled={false}>Show More</DynamicButton>
                            </Box>
                        </Grid2>

                        <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                            <Grid2 container spacing={2}>
                                {projects.map((project, index) => (
                                    <Grid2 size={{ xs: 12, sm: 12 }} key={project.id}>
                                        <Card
                                            sx={styles.card}
                                            className="portfolio-card"
                                            onMouseEnter={() => setActiveCard(project.id)}
                                            onMouseLeave={() => setActiveCard(1)} // default image ID
                                        >
                                            {project.image && (
                                                <CardMedia
                                                    component="img"
                                                    image={project.image || frame}
                                                    className="fade-image"
                                                    sx={{
                                                        ...styles.cardMedia,
                                                        ...(activeCard === project.id && {
                                                            // maxwidth: "365px",
                                                            padding: "none",
                                                            height: "142px",
                                                            maxHeight: "142px",
                                                            opacity: 1,
                                                        }),
                                                    }}
                                                    ref={(el) => setImageRef(el, index)}
                                                />
                                            )}
                                            <CardContent sx={styles.cardContent}>
                                                <Button variant="contained" sx={styles.categoryButton}>
                                                    {project.category}
                                                </Button>
                                                <Typography sx={styles.projectTitle}>{project.title}</Typography>
                                                <Button
                                                    sx={styles.readMoreButton}
                                                    endIcon={<Box component="img" src={ReadMore} sx={styles.readMoreIcon} />}
                                                >
                                                    Read more
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Grid2>

                        {/* Third part */}
                        <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                            <Grid2 container spacing={2}>
                                {projecttwo.map((project, index) => (
                                    <Grid2 size={{ xs: 12, sm: 12 }} key={project.id}>
                                        <Card
                                            sx={styles.card}
                                            className="portfolio-card"
                                            onMouseEnter={() => setActiveCard(project.id)}
                                            onMouseLeave={() => setActiveCard(1)} // default image ID
                                        >
                                            {project.image && (
                                                <CardMedia
                                                    component="img"
                                                    image={project.image || frame}
                                                    className="fade-image"
                                                    sx={{
                                                        ...styles.cardMedia,
                                                        ...(activeCard === project.id && {
                                                            height: "142px",
                                                            maxHeight: "142px",
                                                            opacity: 1,
                                                        }),
                                                    }}
                                                    ref={(el) => setImageRef(el, index)}
                                                />
                                            )}
                                            <CardContent sx={styles.cardContent}>
                                                <Button variant="contained" sx={styles.categoryButton}>
                                                    {project.category}
                                                </Button>
                                                <Typography sx={styles.projectTitle}>{project.title}</Typography>
                                                <Button
                                                    sx={styles.readMoreButton}
                                                    endIcon={<Box component="img" src={ReadMore} sx={styles.readMoreIcon} />}
                                                >
                                                    Read more
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </>
    );
};

export default PortfolioSection;
