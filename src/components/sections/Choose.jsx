import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
import ChooseImg from "../../assets/images/Choose.png";
import DynamicButton from "../header/DynamicButton";

const styles = {
    content: {
        width: "100%",
        maxWidth: "1440px",
        minHeight: "596px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
    },
    imgbox: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: { xs: "flex-start", md: "center" },
        marginLeft: { xs: "20px", md: "0px" },
        marginRight: { xs: "20px", md: "0px" }
    },
    img: {
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        objectFit: "contain",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Always align left
        textAlign: "left", // Ensure text is left-aligned
        marginLeft: { xs: "20px", md: "0px" }, // Add margin for xs screens
        marginRight: { xs: "20px", md: "0px" } // Optional for better spacing
    },
    title: {
        fontFamily: "Inter, sans-serif",
        color: "#fff",
        fontWeight: 700,
        fontSize: "40px",
        marginBottom: "20px",
    },
    subTextTwo: {
        width: "100%",
        maxWidth: "600px",
        fontFamily: "Inter, sans-serif",
        paddingBottom: "10px",
        fontSize: "16px",
        color: "#8A96A6",
        fontWeight: 400,
        lineHeight: "24px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        marginTop: "20px",
    }
};

const Choose = () => {
    return (
        <Box sx={styles.content}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" }, paddingLeft: { xs: "20px", md: "0px" } }}>
                    <Box sx={styles.imgbox}>
                        <img src={ChooseImg} alt="Choose" style={styles.img} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h1" sx={styles.title}>
                            Why choose us
                        </Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at.
                            Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
                        </Typography>
                        <Box sx={styles.buttonContainer}>
                            <DynamicButton filled={false}>Let's Connect</DynamicButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Choose;
