import React, { useRef, useEffect } from "react";
import { Box, Button, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from '@mui/material/Grid';
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";
import frame from "../../assets/images/Frame.png";
import ReadMore from "../../assets/images/ReadMore.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: "Creative landing page", category: "Website", image: frame, id: 1 },
    { title: "Creative Branding", category: "Branding", image: "", id: 3 },
    { title: "Automation. Advanced Level", category: "Development", image: "", id: 5 },
];
const projecttwo = [
    { title: "Why We Collect User's Data", category: "Digital Marketing", image: "", id: 2 },
    { title: "Creative landing page", category: "User Testing", image: frame, id: 4 },
    { title: "How We Optimized Our SEO", category: "SEO", image: "", id: 6 },
];

const styles = {
    section: {
        backgroundColor: "#101318",
        color: "#fff",
        padding: "60px",
        maxWidth: "1440px",
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        textAlign: "left",
        fontSize: "40px",
        fontWeight: "700",
        opacity: 0, // Initial state for animation
    },
    description: {
        fontFamily: "Quicksand, sans-serif",
        color: "#8A96A6",
        marginTop: 2,
        textAlign: "left",
        fontSize: "18px",
        opacity: 0, // Initial state for animation
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginTop: 2,
        width: "140px",
    },
    card: {
        padding: "10px",
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
    const descRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        // Animation for title
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

        // Animation for description
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

        // Animation for cards
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

        // Existing image hover animation
        imageRefs.current.forEach((image) => {
            if (image) {
                const handleMouseEnter = () => {
                    gsap.to(image, {
                        scale: 1.2,
                        y: -20,
                        z: 50,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                        duration: 0.4,
                        ease: "power3.out",
                        zIndex: 10,
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(image, {
                        scale: 1,
                        y: 0,
                        z: 0,
                        boxShadow: "none",
                        duration: 0.4,
                        ease: "power3.in",
                        zIndex: 2,
                    });
                };

                image.addEventListener("mouseenter", handleMouseEnter);
                image.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    image.removeEventListener("mouseenter", handleMouseEnter);
                    image.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        });
    }, []);

    const setImageRef = (el, index) => {
        imageRefs.current[index] = el;
    };

    return (
        <Box sx={styles.section} ref={sectionRef}>
            <Grid container spacing={4}>
                {/* Left Section */}
                <Grid item xs={12} md={4}>
                    <Typography sx={styles.title} ref={titleRef}>
                        Some pieces of our work
                    </Typography>
                    <Typography variant="body1" sx={styles.description} ref={descRef}>
                        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
                    </Typography>
                    <Box sx={styles.buttonContainer}>
                        <DynamicButton filled={false}>Show More</DynamicButton>
                        <DynamicButton filled={true}>Show More</DynamicButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={12} key={project.id}>
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
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Third part */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        {projecttwo.map((project, index) => (
                            <Grid item xs={12} sm={12} key={project.id}>
                                <Card sx={styles.card} className="portfolio-card">
                                    {project.image && (
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            sx={styles.cardMedia}
                                            ref={(el) => setImageRef(el, projects.length + index)}
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
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PortfolioSection;