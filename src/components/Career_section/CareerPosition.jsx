import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import "@fontsource/quicksand";
import "@fontsource/poppins";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../styles/fonts.css";
import { useNavigate } from "react-router-dom";

const styles = {
    section: {
        color: "#fff",
        maxWidth: "1240px",
        padding: { xs: "30px 20px", md: "50px" },
        margin: "0 auto",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        marginBottom: "30px",
    },
    title: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
        fontSize: { xs: "28px", sm: "32px", md: "36px" },
        marginBottom: "10px",
    },
    subText: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: { xs: "14px", sm: "16px" },
        color: "#8A96A6",
        maxWidth: "600px",
    },
    jobButton: {
        backgroundColor: "#2F80ED",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Poppins, sans-serif",
        textTransform: "none",
        fontSize: "20px",
        borderRadius: "16px",
        width: "100%",
        padding: "16px",
        overflow: "hidden",
        transition: "background-color 0.3s ease",
        "&:hover": {
            backgroundColor: "#1C6DD0",
        },
        "&:hover .button-content": {
            justifyContent: "space-between",
            transform: "translateX(-10px)",
        },
        "&:hover .arrow": {
            opacity: 1,
            transform: "translateX(0)",
        },
    },
    buttonContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // default centered
        gap: "10px",
        width: "100%",
        transition: "transform 0.6s ease, justify-content 0.6s ease",
    },
    arrow: {
        backgroundColor: "#D7E4F5",
        borderRadius: "100%",
        opacity: 0,
        transform: "translateX(40px)", // arrow starts off right, invisible
        transition: "all 0.6s ease",
    },
};

const positions = [
    "Senior React Js Developer",
    "Senior React Js Developer",
    "Senior React Js Developer",
    "Senior React Js Developer",];

const CareerPosition = () => {
    const navigate = useNavigate();

    return (
        <Box id="career-position" sx={styles.section}>
            <Box sx={styles.textContainer}>
                <Typography sx={styles.title}>Open positions</Typography>
                <Typography sx={styles.subText}>
                    Get to know us and join our team. We'd love to have more talented people on board. Check out our open positions!
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {positions.map((role, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                        <Button variant="contained" sx={styles.jobButton}
                            onClick={() => navigate(`/careers/${role.toLowerCase().replace(/\s+/g, "-")}`)}
                        >
                            <Box className="button-content" sx={styles.buttonContent}>
                                <span>{role}</span>
                                <ArrowForwardIcon className="arrow" sx={styles.arrow} />
                            </Box>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CareerPosition;
