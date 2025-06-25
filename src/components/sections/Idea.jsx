import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";

const Idea = () => {
    const styles = {
        content: {
            width: "100%",
            height: "524px",
            backgroundColor: "#0D0F18",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        subcontent: {
            width: "100%",
            maxWidth: "1240px",
            height: { lg: "365px", xs: "400px" },
            backgroundImage: "linear-gradient(90deg, #9DE8EE 0%, #2F80ED 49%, #9F8CED 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            borderRadius: "5px",
        },
        text: {
            color: "#0D0E14",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "56px",
            textAlign: "center",
            marginBottom: "10px",
            fontFamily: "Agrandir, sans-serif",

        },
        subtext: {
            maxWidth: "800px",
            color: "#00000099",
            fontFamily: "Agrandir, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "2%",
            textAlign: "center",
            marginBottom: "20px",
        },
        form: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            maxWidth: "700px",
            backgroundColor: "#fff",
            borderRadius: "50px",
            padding: "10px",
        },
        input: {
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: "50px",
            color: "#000", // Set text color to black
            "& input::placeholder": {
                color: "#A1AEBF", // Grey color for placeholder
                opacity: 1, // Ensure it's visible
                fontSize: "16px",
            },
            "& input": {
                color: "#000", // Ensure input text is black
            }
        },
        button: {
            backgroundColor: "#2F80ED",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "50px",
            textTransform: "none",
            height: "40px",
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#2568c5" }
        }
    };

    return (
        <Box sx={styles.content}>
            <Box sx={styles.subcontent}>
                <Typography sx={styles.text}>Let's discuss the idea</Typography>
                <Typography sx={styles.subtext}>
                    Have a project in mind or just exploring possibilities? We’d love to hear from you. Whether you’re starting from scratch, refining an existing product, or looking to scale, our team is here to turn your vision into reality. Let’s collaborate to build something impactful, innovative, and future-ready.
                </Typography>
                <Box sx={styles.form}>
                    <TextField
                        variant="standard"
                        placeholder="Your email"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                        sx={styles.input}
                    />
                    <DynamicButton filled={true}>Send</DynamicButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Idea;
