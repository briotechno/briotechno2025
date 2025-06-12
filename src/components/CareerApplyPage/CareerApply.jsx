import React, { useEffect, useState } from "react";
import { Box, Typography, keyframes, useMediaQuery, useTheme } from "@mui/material";
import {BlueVector, PurpleVector}from "../header/Images"
import gsap from "gsap";
import DynamicButton from "../../components/header/DynamicButton";
import "@fontsource/quicksand";
import { useNavigate, useParams } from "react-router-dom";

// Scaling animation (shrinks to 50% then back to original)
const scalingEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.5); }
  100% { transform: scale(1); }
`;

const CareerApply = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { role } = useParams(); // Get role from route
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const [showHeading, setShowHeading] = useState(false);
    const [showTextAnimation, setShowTextAnimation] = useState(false);
    const [showExtraContent, setShowExtraContent] = useState(false);

    // Format the role string for display (e.g., "senior-react-js-developer" -> "Senior React Js Developer")
    const formattedRole = role
        ?.split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setShowTextAnimation(true)
        });

        // Step 1: Animate title
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

            // Step 2: Animate each letter of the role
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
            // Step 3: Animate extra content
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
            minHeight: { xs: "600px", sm: "600px", lg: "640px" },
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
            fontSize: "24px",
                        // lineHeight: { xs: "56px", sm: "111px" },

            letterSpacing: "0px",
            color: "#2F80ED",
            paddingX: { lg: "45px", sm: "0" },
        },
        heading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "26px", sm: "36px", md: "48px", lg: "64px" },
            lineHeight: { xs: "56px", sm: "112px", lg: "80px" },
            letterSpacing: "0px",
            color: "white",
            paddingX: { lg: "45px", sm: "0" },
        },
        subText: {
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            paddingX: { lg: "45px", sm: "0" },
            padding: "10px 0"
        },
        subTextone: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: '700',
            fontSize: "16px",
            letterSpacing: "0px",
            color: "#D7E4F5",
        },
        subTexttwo: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: '700',
            fontSize: "16px",
            color: "#D7E4F599",
        },
        Button: {
            display: "flex",
            gap: 2,
            paddingX: { lg: "45px", sm: "0" },
            padding: "30px 0",
            fontFamily: "Quicksand, sans-serif",
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
            width: isMobile ? "250px" : isSmall ? "100px" : "350px",
            height: "auto",
            animation: `${scalingEffect} 3s infinite ease-in-out`,
        }
    };

    return (
        <Box sx={styles.content}>
            <Box sx={styles.imageContainer}>
                <img src={BlueVector} alt="Blue Vector" className="image" style={{ ...styles.vectorImage, bottom: "0", left: "0" }} />
                <img src={PurpleVector} alt="Purple Vector" className="image" style={{ ...styles.vectorImage, top: "0", right: "0" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1, paddingX: "10px", maxWidth: "700px" }}>
                <Typography className="services-title" sx={styles.Title}>
                    Career
                </Typography>

                {showHeading && (
                    <Typography className="text-heading" sx={styles.heading}>
                        {formattedRole?.split("").map((char, index) => (
                            <span key={index} style={char === " " ? { marginRight: "8px" } : {}}>
                                {char}
                            </span>
                        ))}
                    </Typography>
                )}

                {showExtraContent && (
                    <Box className="extra-content">
                        <Box sx={styles.subText}>
                            <Box>
                                <Typography sx={styles.subTextone}>Location</Typography>
                                <Typography sx={styles.subTexttwo}>Andheri, Mumbai</Typography>
                            </Box>
                            <Box>
                                <Typography sx={styles.subTextone}>Job type</Typography>
                                <Typography sx={styles.subTexttwo}>Full-time</Typography>
                            </Box>
                            <Box>
                                <Typography sx={styles.subTextone}>Salary</Typography>
                                <Typography sx={styles.subTexttwo}>Negotiable</Typography>
                            </Box>
                        </Box>

                        <Box sx={styles.Button}>
                            <DynamicButton filled={true} onClick={() => navigate("/ApplyNow")}>
                                Apply Now
                            </DynamicButton>
                            <DynamicButton filled={true} onClick={() => navigate("/Career")}>
                                Back to Career
                            </DynamicButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CareerApply;
