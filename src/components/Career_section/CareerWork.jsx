import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Growth, Great, Executive, Collaboration, Culture } from "../header/Images"

gsap.registerPlugin(ScrollTrigger);

const CareerWork = () => {

    const boxData = [
        {
            img: Growth,
            title: "Rapid Growth",
            desc: "Work on exciting, high-impact projects that challenge you to grow fast. We believe in promoting from within and providing opportunities to step up, take ownership, and accelerate your career.",
        },
        {
            img: Collaboration,
            title: "Team Collaboration ",
            desc: "We foster a culture of open communication, cross-functional teamwork, and shared success. Everyone’s voice matters, and we grow better together.",
        },
        {
            img: Culture,
            title: "Vibrant Culture",
            desc: "We work hard, but we know how to have fun too. From team outings and virtual game nights to regular knowledge-sharing sessions, our culture is creative, inclusive, and full of energy.",
        },
        {
            img: Executive,
            title: "Executive Mentors",
            desc: "Learn from experienced leaders who are invested in your personal and professional development. Get guidance, feedback, and insights that shape you into a stronger, more confident professional.",
        },
        {
            img: Great,
            title: "Great Perks",
            desc: "Enjoy flexible work hours, remote-friendly options, competitive compensation, wellness programs, and more because happy teams build better products.",
        },
    ];
    const styles = {
        section: {
            width: "100%",
            maxWidth: "1440px",
            p: { xs: "16px", sm: "24px", md: "32px" },
            pb: "100px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        },
        textContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "25px 0"
        },
        title: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "30px", sm: "32px", md: "42px", lg: "52px" },
            marginBottom: "20px",
            color: "#D7E4F5",
        },

        gridContainer: {
            width: "100%",
            maxWidth: "1440px",
        },
        box: {
            m: 2,
            width: "100%",
            borderRadius: "16px",
            padding: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid transparent",
            transition: "transform 0.3s ease, border 0.3s ease",
            "&:hover": {
                border: "1px solid #2F80ED",
                transform: "scale(1.05)",
            },
        },
        image: {
            width: "50px",
            height: "50px",
        },

        boxheading: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            margin: "12px 0",
            color: "#D7E4F5",
        },

        boxSubheading: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#D7E4F599",
            textAlign: "center"
        },
    };

    return (
        <Box sx={styles.section}>
            <Box>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h1" sx={styles.title}>
                            Why work with us
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 container sx={styles.gridContainer} justifyContent="center">
                    {boxData.map((box, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4 }} display="flex"
                            justifyContent="center">
                            <Box
                                sx={styles.box}
                                className="offer-box"
                            >
                                <Box component="img" src={box.img} alt={box.title} sx={styles.image} />
                                <Typography sx={styles.boxheading}>{box.title}</Typography>
                                <Typography sx={styles.boxSubheading}>{box.desc}</Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    );
};

export default CareerWork;