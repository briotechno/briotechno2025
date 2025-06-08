import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // <-- added import
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";

const Team = () => {
    const navigate = useNavigate(); // <-- added navigation hook

    const styles = {
        content: {
            width: "100%",
            height: "250px",
            padding:"100px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        subcontent: {
            width: "100%",
            maxWidth: "1440px",
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
            color: "#FFFFFF",
            fontSize: "48px",
            fontWeight: 700,
            textAlign: "center",
        },
        buttonContainer: {
            display: "flex",
            gap: 2,
            paddingTop: "30px",
            fontFamily: "Quicksand, sans-serif",
        },
    };

    return (
        <Box sx={styles.content}>
            <Box sx={styles.subcontent}>
                <Typography sx={styles.text}>
                    Get to know us and join our team
                </Typography>
                <Box sx={styles.buttonContainer}>
                    <DynamicButton filled={true} onClick={() => navigate("/ApplyNow")}>
                        Apply Now
                    </DynamicButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Team;
