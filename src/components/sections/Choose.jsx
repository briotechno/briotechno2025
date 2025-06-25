import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
import { ChooseImg } from "../header/Images";
import DynamicButton from "../header/DynamicButton";
import { useNavigate } from "react-router-dom";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const styles = {
    content: {
        width: "100%",
        maxWidth: "1440px",
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px" }
    },
    imgbox: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: { xs: "flex-start", md: "center" },
    },
    img: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        marginLeft: { xs: "20px", md: "0px" },
        marginRight: { xs: "20px", md: "0px" }
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
        maxWidth: "700px",
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
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Image animation - moves from left to right
        gsap.fromTo(
            imgRef.current,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                delay: 0.2,
                duration: 2, // 4 seconds duration
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // Start when top of section is 80% from top of viewport
                    toggleActions: "play none none reverse", // Play on enter, reverse on leave
                }
            }
        );

        // Text container fade in animation
        gsap.fromTo(
            textRef.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 3, // 4 seconds duration
                ease: "power2.out",
                delay: 1.2, // 1 second delay after image starts
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <Box ref={sectionRef} sx={styles.content}>
            <Grid2 container spacing={2} alignItems="center" justifyContent="center" >
                <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-start", md: "center" },
                        paddingLeft: { xs: "20px", md: "0px" }
                    }}
                >
                    <Box sx={styles.imgbox}>
                        <img
                            ref={imgRef}
                            src={ChooseImg}
                            alt="Choose"
                            style={styles.img}
                        />
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} order={{ xs: 1, md: 2 }}>
                    <Box
                        ref={textRef}
                        sx={styles.textContainer}
                    >
                        <Typography variant="h1" sx={styles.title}>
                            Why choose us
                        </Typography>
                        <Typography variant="body1" sx={styles.subTextTwo}>
                            We don’t just build digital products — we build partnerships that last. Our approach blends strategy, creativity, and technical excellence to deliver solutions that are innovative, scalable, and truly aligned with your business goals. With a focus on quality, transparency, and long-term value, we’re here to help you succeed in a digital-first world
                        </Typography>
                        <Box>
                            <DynamicButton filled={false} onClick={() => navigate("/Contact")}>
                                Let's Connect
                            </DynamicButton>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Choose;