import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Branding from "../../assets/images/Branding.png";
import DigitalMarketing from "../../assets/images/DigitalMarketing.png";
import MobileApp from "../../assets/images/MobileApp.png";
import Seo from "../../assets/images/Seo.png";
import Testing from "../../assets/images/Testing.png";
import WebDevelopment from "../../assets/images/WebDevelopment.png";

const WeOffer = () => {
    const styles = {
        section: {
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
            overflow: "hidden",
            backgroundColor: "#101318",
            padding: "50px 0",
        },
        heading: {
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "40px",
            lineHeight: "56px",
            textAlign: "center",
            color: "#D7E4F5",
        },
        subheading: {
            fontFamily: "Agrandir, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#E7E7E799",
            maxWidth: "700px",
            marginTop: "12px",
        },
        gridContainer: {
            width: "80%",
            marginTop: "40px",
        },
        box: {
            width: "338px",
            height: "auto",
            border: "1px solid #A1AEBF",
            borderRadius: "4px",
            padding: "20px",
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
                transform: "scale(1.05)", // Scale effect
            },
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
        { title: "Branding", desc: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices", img: Branding },
        { title: "Web Development", desc: "Integer ante non nunc, eget est justo vel semper nunc. Lacus", img: WebDevelopment },
        { title: "Digital Marketing", desc: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.", img: DigitalMarketing },
        { title: "Mobile App", desc: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices", img: MobileApp },
        { title: "SEO", desc: "Integer ante non nunc, eget est justo vel semper nunc. Lacus ", img: Seo },
        { title: "User Testing", desc: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.", img: Testing },
    ];

    return (
        <Box sx={styles.section}>
            <Typography sx={styles.heading}>We Offer</Typography>
            <Typography sx={styles.subheading}>
                Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
            </Typography>

            <Grid container spacing={3} sx={styles.gridContainer} justifyContent="center">
                {boxData.map((box, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} display="flex" justifyContent="center">
                        <Box sx={styles.box}>
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
