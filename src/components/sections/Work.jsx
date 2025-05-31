import React, { useRef, useEffect } from "react";
import { Box, Button, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";
import frame from "../../assets/images/Frame.png";
import ReadMore from "../../assets/images/ReadMore.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: "Creative landing page", category: "Website", image: frame, id: 1 },
    { title: "Creative Branding", category: "Branding", image: frame, id: 2 },
    { title: "Automation. Advanced Level", category: "Development", image: frame, id: 3 },
];
const projecttwo = [
    { title: "Why We Collect User's Data", category: "Digital Marketing", image: frame, id: 4 },
    { title: "Creative landing page", category: "User Testing", image: frame, id: 5 },
    { title: "How We Optimized Our SEO", category: "SEO", image: frame, id: 6 },
];

const styles = {
    section: {
        width: "100%",
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#101318",
        color: "#fff",
        padding: "60px",
    },
    gridContainer: {
        maxWidth: "1440px",
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        textAlign: "left",
        fontSize: "40px",
        fontWeight: "700",
        opacity: 0,
    },
    description: {
        fontFamily: "Quicksand, sans-serif",
        color: "#8A96A6",
        marginTop: 2,
        textAlign: "left",
        fontSize: "18px",
        opacity: 0,
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
            "& .project-title": {
                transform: "scale(1.05)",
            },
            "& .read-more-button": {
                transform: "scale(1.05)",
            },
            "& .card-media": {
                opacity: 1,
                height: "auto",
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
    cardMedia: {
        position: "relative",
        zIndex: 2,
        transition: "all 0.3s ease-in-out",
        opacity: 0,
        height: 0,
        overflow: "hidden",
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
};

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);

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
        <Box sx={styles.section} ref={sectionRef}>
            <Grid container spacing={4} sx={styles.gridContainer}>
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

                {/* Middle Section */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={12} key={project.id}>
                                <Card sx={styles.card} className="portfolio-card">
                                    <CardMedia
                                        component="img"
                                        image={project.image}
                                        sx={{
                                            ...styles.cardMedia,
                                            ...(project.id === 1 && { opacity: 1, height: "auto" }),
                                        }}
                                        className="card-media"
                                    />
                                    <CardContent sx={styles.cardContent}>
                                        <Button variant="contained" sx={styles.categoryButton}>
                                            {project.category}
                                        </Button>
                                        <Typography sx={{ ...styles.projectTitle }} className="project-title">
                                            {project.title}
                                        </Typography>
                                        <Button
                                            sx={{ ...styles.readMoreButton }}
                                            className="read-more-button"
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

                {/* Right Section */}
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
                                            className="card-media"
                                        />
                                    )}
                                    <CardContent sx={styles.cardContent}>
                                        <Button variant="contained" sx={styles.categoryButton}>
                                            {project.category}
                                        </Button>
                                        <Typography sx={{ ...styles.projectTitle }} className="project-title">
                                            {project.title}
                                        </Typography>
                                        <Button
                                            sx={{ ...styles.readMoreButton }}
                                            className="read-more-button"
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
