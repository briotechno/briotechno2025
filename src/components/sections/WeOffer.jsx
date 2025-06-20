import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Branding, DigitalMarketing, MobileApp, Seo, Testing, WebDevelopment } from "../header/Images"

gsap.registerPlugin(ScrollTrigger);

const WeOffer = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    const styles = {
        section: {
            width: "100%",
            minHeight: "720px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            backgroundColor: "#101318",
            padding: "50px 0",
        },
        heading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 400,
            fontSize: "40px",
            textAlign: "center",
            color: "#D7E4F5",
        },
        subheading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            textAlign: "center",
            color: "#E7E7E799",
            maxWidth: "700px",
        },
        gridContainer: {
            width: "100%",
            maxWidth: "1440px",
            marginTop: "40px",
        },
        box: {
            height: "auto",
            border: "1px solid #A1AEBF",
            borderRadius: "4px",
            padding: "25px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            transition: "border 0.3s ease-in-out, transform 0.3s ease-in-out",
            "&:hover": {
                border: "1px solid",
                borderImageSource: "linear-gradient(180deg, #9DE8EE 0%, #66B4EE 49%, #9F8CED 100%)",
                borderImageSlice: 1,
                transform: "scale(1.05)",
            },
            perspective: "1000px", // Adds 3D perspective
        },
        image: {
            width: "48px",
            height: "48px",
        },
        boxHeading: {
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "36px",
            color: "#D7E4F5",
        },
        boxSubheading: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#8A96A6",
        },
    };

    const boxData = [
        { title: "Branding", desc: "We craft impactful brand identities that resonate with your audience and set you apart in the market. From logo design and brand strategy to complete visual systems, we build consistent, memorable, and meaningful brand experiences that connect emotionally and build trust.", img: Branding },
        { title: "Web Development", desc: "We design and develop high-performance, responsive websites that are fast, secure, and tailored to your business needs. Whether it’s a corporate site, landing page, or full-stack web app — we build it with clean code and great user experience in mind.", img: WebDevelopment },
        { title: "Digital Marketing", desc: "We help your brand grow through data-driven digital marketing strategies that increase visibility, engagement, and conversions. Our approach combines creativity and performance to make sure your message reaches the right audience at the right time.", img: DigitalMarketing },
        { title: "Mobile App", desc: "From concept to launch, we create scalable and user-friendly mobile apps for iOS and Android that solve real-world problems. Whether it’s a consumer app or enterprise solution, our team ensures high-quality design and robust functionality.", img: MobileApp },
        { title: "SEO", desc: "We optimize your online presence to improve visibility, increase traffic, and boost search engine rankings. Our SEO strategies are designed to deliver long-term organic growth through both technical and content-based optimization.", img: Seo },
        { title: "User Testing", desc: "We ensure your product works flawlessly across devices, browsers, and user scenarios. Our meticulous testing processes help you deliver reliable and bug-free digital experiences, saving time and protecting your reputation.", img: Testing },
    ];

    useEffect(() => {
        // Animation for heading
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

        // Animation for subheading
        gsap.fromTo(
            ".subheading",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    once: true,
                },
                duration: 0.8,
                ease: "power2.out",
                delay: 0.3,
            }
        );

        // Animation for boxes
        gsap.fromTo(
            ".offer-box",
            {
                opacity: 0,
                y: 100,
                delay: 0.1,
                scale: 0.8,
                rotationX: (index) => index % 2 === 0 ? -45 : 45, // Odd rotates from left, even from right
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                delay: 0.1,
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
            <Typography sx={styles.heading} ref={headingRef}>We Offer</Typography>
            <Typography sx={styles.subheading}>
                At the core of our services is a commitment to building intelligent, scalable, and user-friendly digital solutions. We partner with startups, scale-ups, and enterprises to deliver
            </Typography>

            <Grid container spacing={3} sx={styles.gridContainer} justifyContent="center">
                {boxData.map((box, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            sx={styles.box}
                            className="offer-box"
                        >
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

export default WeOffer;