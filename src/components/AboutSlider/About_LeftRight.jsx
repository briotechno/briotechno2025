import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, Box } from "@mui/material";
import img1 from "../../assets/images/Slider_1/ltr1.png";
import img2 from "../../assets/images/Slider_1/ltr2.png";
import img3 from "../../assets/images/Slider_1/ltr3.png";
import img4 from "../../assets/images/Slider_1/ltr4.png";
import img5 from "../../assets/images/Slider_1/ltr5.png";
import img6 from "../../assets/images/Slider_1/ltr6.png";

const styles = {
    slickltr: {
        margin: "0 auto"
    },
};
const Data = [
    { image: img1, id: 1 },
    { image: img2, id: 2 },
    { image: img3, id: 3 },
    { image: img4, id: 4 },
    { image: img5, id: 5 },
    { image: img6, id: 6 },
];


const About_LeftRight = () => {
    const settingsLTR = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000, // Continuous smooth scroll
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        rtl: true, // Left to right
        centerMode: true, // Helps keep even spacing
        centerPadding: "10px", // Adds spacing without affecting layout
        responsive: [
            { breakpoint: 1024,settings: { slidesToShow: 6 } }, // Large screens
            { breakpoint: 768, settings: { slidesToShow: 4 } }, // Tablets
            { breakpoint: 425, settings: { slidesToShow: 2.3 } }, // Small tablets
            { breakpoint: 375, settings: { slidesToShow: 2 } }  // Mobile phones
        ]
    };

    return (
        <Box sx={styles.slickltr}>
            <Slider {...settingsLTR}>
                {Data.map((project) => (
                    <Box key={project.id} sx={{ margin: "0 10px" }}> {/* Added padding here */}
                    <CardMedia
                        component="img"
                        image={project.image}
                        alt={`Slide ${project.id}`}
                        sx={{
                            width: "85%",
                            padding:"8px",
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
    );
};



export default About_LeftRight
