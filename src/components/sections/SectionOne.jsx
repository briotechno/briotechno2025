import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, keyframes } from "@mui/material";
import BlueVector from "../../assets/images/BlueVector.png";
import PurpleVector from "../../assets/images/PurpleVector.png";
import gsap from "gsap";
import DynamicButton from "../header/DynamicButton";
import "@fontsource/quicksand";
import "../../styles/fonts.css";

// Scaling animation (shrinks to 50% then back to original)
const scalingEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.5); }
  100% { transform: scale(1); }
`;

const SectionOne = () => {
    const [showExtraContent, setShowExtraContent] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setShowExtraContent(true),
        });
        tl.fromTo(
            ".text-heading span",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 1,
                ease: "power3.out",
                stagger: 0.07,
            }
        );
        gsap.fromTo(
            ".image",
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    useEffect(() => {
        if (showExtraContent) {
            gsap.fromTo(
                ".extra-content",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
        }
    }, [showExtraContent]);

    const styles = {
        content: {
            width: "100%",
            maxWidth: "1440px",
            minHeight: "720px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            paddingTop: "72px",
            overflow: "hidden",
            backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            backgroundPosition: "center",
        },
        heading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 400,
            fontSize: "96px",
            lineHeight: "111px",
            letterSpacing: "0px",
            color: "white",
            textAlign: "left",
        },
        gradientText: {
            background: "linear-gradient(180deg, #9DE8EE 0%, #66B4EE 49%, #9F8CED 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
        },
        subText: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "2%",
            color: "#8A96A6",
            maxWidth: "600px",
            marginTop: "8px",
            textAlign: "left",
        },
        form: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "24px",
            width: "100%",
            maxWidth: "700px",
        },
        inputField: {
            width: "550px",
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
            width: "450px",
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
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
                <Typography className="text-heading" sx={styles.heading}>
                    {"Building Digital".split("").map((char, index) => (
                        <span key={index} style={char === " " ? { marginRight: "8px" } : {}}>
                            {char}
                        </span>
                    ))}
                    <br />
                    {"Solutions For a".split("").map((char, index) => (
                        <span key={index + 100} style={index < 9 ? styles.gradientText : {}}>
                            {char}
                        </span>
                    ))}
                    <br />
                    {"Smarter Future.".split("").map((char, index) => (
                        <span key={index + 200} style={char === " " ? { marginRight: "8px" } : {}}>
                            {char}
                        </span>
                    ))}
                </Typography>
                {showExtraContent && (
                    <Box className="extra-content">
                        <Typography sx={styles.subText}>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros</Typography>
                        <Box sx={styles.form}>
                            <TextField placeholder="Email" variant="outlined" fullWidth sx={styles.inputField} />
                            <DynamicButton filled={true}>ATTRACT</DynamicButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default SectionOne;
