import React from "react";
import { Box, Button, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from '@mui/material/Grid';
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";
import frame from "../../assets/images/Frame.png";
import ReadMore from "../../assets/images/ReadMore.png"

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
        padding: "40px",
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        textAlign: "left",
        fontSize: "40px",
        fontWeight: "700",
    },
    description: {
        fontFamily: "Quicksand, sans-serif",
        color: "#8A96A6",
        marginTop: 2,
        textAlign: "left",
        fontSize: "18px",
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
        "&:hover": {
            border: "1px solid #2F80ED",
        },
    },
    categoryButton: {
        fontSize: "12px",
        marginBottom: 1,
        backgroundColor: "#2F80ED",
        fontWeight: "300",
        color: "#000",
        display: "flex",
        alignItems: "center",  // Corrected from "left"
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "#1E5DBE",  // Slight hover effect if needed
            boxShadow: "none",  // Ensures no shadow appears on hover
        },
        "&:focus": {
            outline: "none",
            boxShadow: "none",
        },
        "&:active": {
            backgroundColor: "#1E5DBE",
            boxShadow: "none",
        },
    },
    
    projectTitle: {
        fontFamily: "Quicksand, sans-serif",
        textAlign: "left",
        fontSize: "24px",
        fontWeight: "700",
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
        "&:hover": {
            color: "#2F80ED",
            backgroundColor: "transparent",
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "transparent",
        },
        "&:active": {
            color: "#2F80ED",
            backgroundColor: "transparent",
        },
    },
    readMoreIcon: {
        width: "20px",
        height: "20px",
    },
};

const PortfolioSection = () => {
    return (
        <Box sx={styles.section}>
            <Grid container spacing={4}>
                {/* Left Section */}
                <Grid item xs={12} md={4}>
                    <Typography sx={styles.title}>
                        Some pieces of our work
                    </Typography>
                    <Typography variant="body1" sx={styles.description}>
                        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
                    </Typography>
                    <Box sx={styles.buttonContainer}>
                        <DynamicButton filled={false}>Show More</DynamicButton>
                        <DynamicButton filled={true}>Show More</DynamicButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        {projects.map((project) => (
                            <Grid item xs={12} sm={12} key={project.id}>
                                <Card sx={styles.card}>
                                    {project.image && <CardMedia component="img" image={project.image} />}
                                    <CardContent>
                                        <Button variant="contained" sx={styles.categoryButton}>
                                            {project.category}
                                        </Button>
                                        <Typography sx={styles.projectTitle}>{project.title}</Typography>
                                        <Button sx={styles.readMoreButton} endIcon={<Box component="img" src={ReadMore} sx={styles.readMoreIcon} />}>
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
                        {projecttwo.map((project) => (
                            <Grid item xs={12} sm={12} key={project.id}>
                                <Card sx={styles.card}>
                                    {project.image && (
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            sx={{ objectFit: "cover" }}
                                        />
                                    )}
                                    <CardContent>
                                        <Button variant="contained" sx={styles.categoryButton}>
                                            {project.category}
                                        </Button>
                                        <Typography sx={styles.projectTitle}>{project.title}</Typography>
                                        <Button sx={styles.readMoreButton} endIcon={<Box component="img" src={ReadMore} sx={styles.readMoreIcon} />}>
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
