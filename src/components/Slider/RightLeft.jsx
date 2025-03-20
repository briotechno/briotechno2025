import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, Box } from "@mui/material";
import img1 from "../../assets/images/Slider_2/rtl1.png";
import img2 from "../../assets/images/Slider_2/rtl2.png";
import img3 from "../../assets/images/Slider_2/rtl3.png";
import img4 from "../../assets/images/Slider_2/rtl4.png";
import img5 from "../../assets/images/Slider_2/rtl5.png";
import img6 from "../../assets/images/Slider_2/rtl6.png";

const styles = {
    slickrtl: {
        maxWidth: "1440px",
        margin: "0 auto"
    }
};
const Data = [
    { image: img1, id: 1 },
    { image: img2, id: 2 },
    { image: img3, id: 3 },
    { image: img4, id: 4 },
    { image: img5, id: 5 },
    { image: img6, id: 6 },
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
            { breakpoint: 1000, settings: { slidesToShow: 4 } }, // Large screens
            { breakpoint: 924, settings: { slidesToShow: 3 } }, // Tablets
            { breakpoint: 668, settings: { slidesToShow: 2 } }, // Small tablets
            { breakpoint: 380, settings: { slidesToShow: 1 } }  // Mobile phones
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
                                sx={{ height: "95%", width: "95%", borderRadius: "5px"}}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </>
    )
}

export default RightLeft
