import React from "react";
import { Box, Typography } from "@mui/material";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
import ChooseImg from "../../assets/images/Choose.png";
import DynamicButton from "../header/DynamicButton";

const Choose = () => {
    const styles = {
        content: {
            width: "100%",
            maxWidth: "1440px",
            minHeight: "344px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        imgbox: {
            width: "100%",
            minWidth: "700px",
            height: "550px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        img: {
            width: "700px",
            height: "550px",
            objectFit: "contain",
        },
        textContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        title: {
            fontFamily: "Inter, sans-serif",
            color: "#fff",
            fontWeight: 700,
            fontSize: "40px",
            textAlign: "left",
            marginBottom: "20px"
        },
        subTextTwo: {
            width: "50%",
            fontFamily: "Inter, sans-serif",
            minWidth: "523px",
            height: "72px",
            padding: "0 0 10px 5px",
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
            fontSize: "16px",
            color: "#8A96A6",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "2%",
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px", // Adjust spacing between paragraph and button
        }
    };

    return (
        <Box sx={styles.content}>
            <Box sx={styles.imgbox}>
                <img src={ChooseImg} alt="Choose" style={styles.img} />
            </Box>
            <Box sx={styles.textContainer}>
                <Typography variant="h1" sx={styles.title}>
                    Why choose us
                </Typography>
                <Typography variant="body1" sx={styles.subTextTwo}>
                    Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
                </Typography>
                <Box sx={styles.buttonContainer}>
                    <DynamicButton filled={false}>Let's Connect</DynamicButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Choose;
