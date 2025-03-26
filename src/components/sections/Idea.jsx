import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
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
            maxWidth: "1200px",
            height: "365px",
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
        },
        subtext: {
            color: "#00000099",
            fontFamily: "Quicksand, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
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
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                </Typography>
                <Box sx={styles.form}>
                    <TextField
                        variant="standard"
                        placeholder="Email"
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
