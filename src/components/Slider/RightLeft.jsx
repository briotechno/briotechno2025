import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, Box } from "@mui/material";
import { Slider2_1, Slider2_2, Slider2_3, Slider2_4, Slider2_5, Slider2_6 } from "../header/Images";

const styles = {
    slickrtl: {
        margin: "0 auto"
    }
};
const Data = [
    { image: Slider2_1, id: 1 },
    { image: Slider2_2, id: 2 },
    { image: Slider2_3, id: 3 },
    { image: Slider2_4, id: 4 },
    { image: Slider2_5, id: 5 },
    { image: Slider2_6, id: 6 },
];
const RightLeft = () => {
    const settingsRTL = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        rtl: false, // Right to left
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 6 } }, // Large screens
            { breakpoint: 768, settings: { slidesToShow: 4 } }, // Tablets
            { breakpoint: 425, settings: { slidesToShow: 2.3 } }, // Small tablets
            { breakpoint: 375, settings: { slidesToShow: 2 } }  // Mobile phones
        ]
    };
    return (
        <>
            <Box sx={styles.slickrtl}>
                {/* Right to Left Continuous Slider */}
                <Slider {...settingsRTL}>
                    {Data.map((project) => (
                        <Box key={project.id}>
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={`Image ${project.id}`}
                                sx={{
                                    width: "85%",
                                    padding: "8px",
                                    height: "auto",
                                    borderRadius: "10px",
                                    border: "1px solid #ccc",
                                    "&:hover": { borderColor: "#2568c5" },
                                    "&:focus": { outline: "none" },
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </>
    )
}

export default RightLeft
