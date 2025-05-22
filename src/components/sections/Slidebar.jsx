import * as React from 'react';
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/quicksand";
import { Typography, Card, CardContent, CardMedia, Box, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vector1 from "../../assets/images/Frame1.png";
import vector2 from "../../assets/images/Frame2.png";
import vector3 from "../../assets/images/Frame3.png";
import vector4 from "../../assets/images/Frame4.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

gsap.registerPlugin(ScrollTrigger);

const SlideBar = () => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const styles = {
        container: {
            width: "100%",
            margin: "auto",
            padding: isMobile ? "0 10px" : "0 20px",
            minHeight: "596px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        subbox: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
        },
        heading: {
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            color: "#D7E4F5",
            textAlign: "left",
            opacity: 0, // Initial state for animation
            transform: "translateY(20px)",
        },
        arrowContainer: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingRight: "40px",
            "@media (max-width: 1024px)": {
                paddingRight: "20px",
            },
        },
        arrow: {
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            color: "#2F80ED",
            borderRadius: "4px",
            border: "1px solid #2F80ED",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { backgroundColor: "#2F80ED", color: "white" },
        },
        arrowIcon: {
            fontSize: "10px",
        },
        card: {
            border: "1px solid #A1AEBF",
            backgroundColor: "transparent",
            borderRadius: "10px",
            transition: "border 0.3s ease-in-out",
            "&:hover": { borderColor: "#2F80ED" },
            padding: "15px",
            margin: "0 10px",
        },
        media: {
            height: 50,
            width: 50,
            borderRadius: "3px",
        },
        textBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        title: {
            fontWeight: 600,
            fontFamily: "Quicksand, sans-serif",
        },
        subtitle: {
            fontFamily: "Quicksand, sans-serif",
            color: "textSecondary",
        },
        description: {
            textAlign: "left",
            fontSize: "16px",
            marginTop: 1,
            fontWeight: 700,
            fontFamily: "Quicksand, sans-serif",
        },
    };

    const Data = [
        { title: "Brooklyn Simmon", subtitle: "manam", description: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.", image: vector1 },
        { title: "Esther Howard", subtitle: "Offmax", description: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.", image: vector2 },
        { title: "Arlene McCoy", subtitle: "bloopixel", description: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.", image: vector3 },
        { title: "Jane Cooper", subtitle: "unpexel", description: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ", image: vector4 }
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2.5 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1.5 } },
            { breakpoint: 425, settings: { slidesToShow: 1 } },
            { breakpoint: 375, settings: { slidesToShow: 1 } },
        ]
    };

    useEffect(() => {
        // Animation for heading
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    once: true,
                },
                duration: 1,
                ease: "power2.out",
            }
        );

        // Animation for slider items
        gsap.fromTo(
            ".slider-item",
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                delay: 0.1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    once: true,
                },
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <Box sx={styles.container} ref={containerRef}>
            <Box sx={styles.subbox}>
                <Typography sx={styles.heading} ref={headingRef}>
                    Hear what our projects say :
                </Typography>
                <Box sx={styles.arrowContainer}>
                    <Box sx={styles.arrow} onClick={() => sliderRef.current.slickPrev()}>
                        <ArrowBackIosIcon sx={styles.arrowIcon} />
                    </Box>
                    <Box sx={styles.arrow} onClick={() => sliderRef.current.slickNext()}>
                        <ArrowForwardIosIcon sx={styles.arrowIcon} />
                    </Box>
                </Box>
            </Box>
            <Slider ref={sliderRef} {...settings} style={{ padding: "0 10px" }}>
                {Data.map((project, index) => (
                    <Box key={index} sx={{ padding: "10px" }} className="slider-item">
                        <Card sx={styles.card}>
                            <CardContent>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2
                                }}>
                                    <CardMedia 
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                        sx={styles.media} 
                                    />
                                    <Box sx={styles.textBox}>
                                        <Typography sx={styles.title}>{project.title}</Typography>
                                        <Typography sx={styles.subtitle}>{project.subtitle}</Typography>
                                    </Box>
                                </Box>
                                <Typography sx={styles.description}>{project.description}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default SlideBar;