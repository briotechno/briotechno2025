import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/quicksand";
import { Grid, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import vector1 from "../../assets/images/Frame1.png";
import vector2 from "../../assets/images/Frame2.png";
import vector3 from "../../assets/images/Frame3.png";
import vector4 from "../../assets/images/Frame4.png";

const styles = {
    box: {
        width: "100%",
        maxWidth: "1440px",
        height: "524px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    heading: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        padding: 2,
        fontSize: "24px",
        color: "#D7E4F5",
        textAlign: "left",
        mb: "80px"
    },
    card: {
        width: "100%",
        maxWidth: 345,
        border: "1px solid",
        backgroundColor: "transparent",
        borderColor: "#A1AEBF",
        borderRadius: "10px",
        transition: "border 0.3s ease-in-out",
        "&:hover": { borderColor: "#2F80ED" }
    },
    media: {
        height: 50,
        width: 50,
        borderRadius: "3px"
    },
    title: {
        fontWeight: 600,
        fontFamily: "Quicksand, sans-serif",
    },
    subtitle: {
        textAlign: "left",
        fontFamily: "Quicksand, sans-serif",
        color: "textSecondary"
    },
    description: {
        textAlign: "left",
        fontSize: "16px",
        mt: 1,
        fontWeight: 700,
        fontFamily: "Quicksand, sans-serif"
    }
};

const Data = [
    { title: "Brooklyn Simmon", subtitle: "manam", description: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.", image: vector1, id: 1 },
    { title: "Esther Howard", subtitle: "Offmax", description: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.", image: vector2, id: 2 },
    { title: "Arlene McCoy", subtitle: "bloopixel", description: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.", image: vector3, id: 3 },
    { title: "Jane Cooper", subtitle: "unpexel", description: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ", image: vector4, id: 4 },
];

const SlideBar = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, dots: true } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    return (
        <Box sx={styles.box}>
            <Typography sx={styles.heading}>Hear what our customers say :</Typography>
            <Slider {...settings}>
                {Data.map((project) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                        <Card sx={styles.card}>
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    {project.image && (
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.title}
                                            sx={styles.media}
                                        />
                                    )}
                                    <Box>
                                        <Typography sx={styles.title}>{project.title}</Typography>
                                        <Typography sx={styles.subtitle}>{project.subtitle}</Typography>
                                    </Box>
                                </Box>
                                <Typography sx={styles.description}>{project.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Slider>
        </Box>
    );
}

export default SlideBar;
