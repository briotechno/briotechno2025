import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, keyframes, useMediaQuery, useTheme } from "@mui/material";
import BlueVector from "../../assets/images/BlueVector.png";
import PurpleVector from "../../assets/images/PurpleVector.png";
import gsap from "gsap";
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
import { useNavigate } from "react-router-dom";

// Scaling animation (shrinks to 50% then back to original)
const scalingEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.5); }
  100% { transform: scale(1); }
`;

const PortfolioDetailpageOne = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const [showHeading, setShowHeading] = useState(false);
    const [showTextAnimation, setShowTextAnimation] = useState(false);
    const [showExtraContent, setShowExtraContent] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setShowTextAnimation(true)
        });

        // Step 1: Animate "Services" title
        tl.fromTo(
            ".services-title",
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                onComplete: () => setShowHeading(true)
            }
        );
    }, []);

    useEffect(() => {
        if (showTextAnimation) {
            const tl = gsap.timeline({
                onComplete: () => setShowExtraContent(true),
            });

            // Step 2: Animate each letter of "Lorem Ipsum"
            tl.fromTo(
                ".text-heading span",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.07,
                }
            );
        }
    }, [showTextAnimation]);

    useEffect(() => {
        if (showExtraContent) {
            // Step 3: Animate extra content (description + button)
            gsap.fromTo(
                ".extra-content",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
        }
    }, [showExtraContent]);

    useEffect(() => {
        // Animate vector images
        gsap.fromTo(
            ".image",
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    const styles = {
        content: {
            width: "100%",
            minHeight: { xs: "600px", sm: "820px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            backgroundPosition: "center",
            paddingX: { xs: "20px", sm: "0" },
        },
        Title: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: '700',
            fontSize: { xs: "20px", sm: "40px", md: "60px", lg: "24px" },
            lineHeight: { xs: "56px", sm: "111px" },
            letterSpacing: "0px",
            color: "#2F80ED",
            paddingX: { lg: "45px", sm: "0" },
        },
        heading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "20px", sm: "40px", md: "60px", lg: "64px" },
            lineHeight: { xs: "56px", sm: "112px" },
            letterSpacing: "0px",
            color: "white",
            paddingX: { lg: "45px", sm: "0" },
        },
        gradientText: {
            background: "linear-gradient(180deg, #9DE8EE 0%, #66B4EE 49%, #9F8CED 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
        },
        subText: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "16px" },
            lineHeight: "24px",
            letterSpacing: "2%",
            color: "#FFFFFF99",
            textAlign: "justify",
            paddingX: { lg: "45px", sm: "0" },
            margin: "5px 0"
        },
        form: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "24px",
            width: "100%",
            maxWidth: isMobile ? "600px" : "700px",
        },
        inputField: {
            width: { xs: "100%", sm: "550px" },
            borderRadius: "30px",
            backgroundColor: "transparent",
            paddingRight: "16px",
            "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                padding: "3px",
                "& fieldset": { borderWidth: "2px", borderColor: "#A1AEBF" },
                "&:hover fieldset": { borderColor: "#A1AEBF" },
                "&.Mui-focused fieldset": { borderColor: "#A1AEBF" },
            },
            "& .MuiInputBase-input": {
                color: "#D7E4F5",
                fontSize: "16px",
                fontWeight: 400,
                fontFamily: "Quicksand, sans-serif",
                padding: "8px 16px",
            },
        },
        imageContainer: {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 0,
        },
        vectorImage: {
            position: "absolute",
            width: isMobile ? "300px" : isSmall ? "100px" : "450px",
            height: "auto",
            animation: `${scalingEffect} 3s infinite ease-in-out`,
        },
    };

    return (
        <Box sx={styles.content}>
            <Box sx={styles.imageContainer}>
                <img src={BlueVector} alt="Blue Vector" className="image" style={{ ...styles.vectorImage, bottom: "0", left: "0" }} />
                <img src={PurpleVector} alt="Purple Vector" className="image" style={{ ...styles.vectorImage, top: "0", right: "0" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1, paddingX: "10px", maxWidth: "700px" }}>
                <Box>
                    <Typography className="services-title" sx={styles.Title}>
                        Project Detail
                    </Typography>

                    {showHeading && (
                        <Typography className="text-heading" sx={styles.heading}>
                            {"Lorem Ipsum".split("").map((char, index) => (
                                <span key={index} style={char === " " ? { marginRight: "8px" } : {}}>
                                    {char}
                                </span>
                            ))}
                        </Typography>
                    )}

                    {showExtraContent && (
                        <Box className="extra-content">
                            <Typography sx={styles.subText}>
                                Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros                             </Typography>
                            <Box sx={{ paddingX: { lg: "45px", sm: "0" }, mt: 2 }}>
                                <DynamicButton filled={true} onClick={() => navigate("/Contact")}>
                                    Contact
                                </DynamicButton>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default PortfolioDetailpageOne;