import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/quicksand";

const Team = () => {
    const navigate = useNavigate();

    const styles = {
        content: {
            width: "100%",
            maxWidth: "1440px",
            padding: "50px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        subcontent: {
            width: "100%",
            height: "243px",
            backgroundImage: "linear-gradient(90deg, #9DE8EE 0%, #2F80ED 49%, #9F8CED 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: "#FFFFFF",
            fontSize: { xs: "28px", sm: "36px", md: "42px", lg: "48px" },
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
                    <Button
                        sx={{
                            height: "42px",
                            padding: "10px 24px",
                            borderRadius: "1000px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "14px",
                            textTransform: "uppercase",
                            backgroundColor: "#101318",
                            color: "#D7E4F5",
                            "&:hover": {
                                backgroundColor: "#2F80ED",
                                color: "#fff",
                                transform: "scale(1.05)",
                            },
                            transition: "all 0.2s ease-in-out",
                        }}
                        onClick={() => navigate("/ApplyNow")}
                    >
                        Apply Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Team;
