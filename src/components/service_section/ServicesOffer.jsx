import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Branding, DigitalMarketing, MobileApp, Seo, Testing, WebDevelopment } from "../header/Images"

gsap.registerPlugin(ScrollTrigger);

const ServicesOffer = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    const boxData = [
        { title: "Branding", desc: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices", img: Branding },
        { title: "Web Development", desc: "Integer ante non nunc, eget est justo vel semper nunc. Lacus", img: WebDevelopment },
        { title: "Digital Marketing", desc: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.", img: DigitalMarketing },
        { title: "Mobile App", desc: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices", img: MobileApp },
        { title: "SEO", desc: "Integer ante non nunc, eget est justo vel semper nunc. Lacus ", img: Seo },
        { title: "User Testing", desc: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.", img: Testing },
    ];

    const styles = {
        section: {
            width: "100%",
            maxWidth: "1440px",
            minHeight: "566px",
        },
        heading: {
            fontFamily: "Quicksand, sans-serif",
            color: "#FFFFFF",
            fontWeight: 700,
            margin: { xs: "10px" },
            fontSize: { xs: "30px", sm: "25px", md: "30px", lg: "40px" },
            marginBottom: "20px",
            lineHeight: "56px",
            opacity: 0,
        },
        gridContainer: {
            maxWidth: "1440px",
            padding: "10px",
        },
        box: {
            border: "1px solid #A1AEBF",
            borderRadius: "4px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            transition: "border 0.3s ease-in-out, transform 0.3s ease-in-out",
            "&:hover": {
                border: "1px solid",
                borderImageSource: "linear-gradient(180deg, #9DE8EE 0%, #66B4EE 49%, #9F8CED 100%)",
                borderImageSlice: 1,
                transform: "scale(1.05)",
            },
            perspective: "1000px",
        },
        image: {
            width: "48px",
            height: "48px",
        },
        boxHeading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 600,
            fontSize: "28px",
            lineHeight: "36px",
            color: "#D7E4F5",
        },

        boxSubheading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
            color: "#8A96A6",
        },
    };

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                delay: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    once: true,
                },
                duration: 0.8,
                ease: "back.out(1.7)",
            }
        );

        gsap.fromTo(
            ".offer-box",
            {
                opacity: 0,
                y: 100,
                scale: 0.8,
                rotationX: (index) => index % 2 === 0 ? -45 : 45,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationX: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                duration: 0.8,
                ease: "back.out(1.4)",
            }
        );
    }, []);

    return (
        <Box sx={styles.section} ref={sectionRef}>
            <Typography variant="h2" sx={styles.heading} ref={headingRef}>
                Services
            </Typography>

            <Grid container spacing={4} sx={styles.gridContainer}>
                {boxData.map((box, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={styles.box} className="offer-box">
                            <img src={box.img} alt={box.title} style={styles.image} />
                            <Typography sx={styles.boxHeading}>{box.title}</Typography>
                            <Typography sx={styles.boxSubheading}>{box.desc}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default ServicesOffer;
