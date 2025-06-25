import * as React from "react";
import { Typography, Box, Grid2 } from "@mui/material";
import LeftRight from "./LeftRight";
import RightLeft from "./RightLeft";

const SectionTwo = () => {

    const styles = {
        box: {
            width: "100%",
            maxWidth: "1440px",
            height: "544px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        subContent: {
            padding: { xs: "0 20px", lg: "0 35px" },
            alignItems: "center",
            justifyContent: "center",
        },
        subTextOne: {
            fontSize: { xs: "25px", md: "40px" },
            fontWeight: 400,
            color: "#D7E4F5",
            textAlign: { xs: "center", md: "left" },
        },
        subTextTwo: {
            fontSize: "16px",
            fontWeight: 400,
            color: "#8A96A6",
            lineHeight: "24px",
            textAlign: { xs: "center", md: "left" },
        },
        sliderBox: {
            mt: 2,
        },
    };

    return (
        <Box sx={styles.box}>
            <Grid2 container spacing={2} sx={styles.subContent}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Typography sx={styles.subTextOne}>
                        Trusted by 50+ Clients around the world
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Typography sx={styles.subTextTwo}>
                        Our team combines deep technical expertise with a strong focus on user experience to build solutions that are not only robust and scalable but also aligned with your business goals. Whether you're launching a new product, optimizing operations, or entering new markets, we provide the technology foundation you need to move faster, work smarter, and stay ahead of the curve
                    </Typography>
                </Grid2>
            </Grid2>
            <Box sx={styles.sliderBox}>
                <LeftRight />
            </Box>
            <Box sx={styles.sliderBox}>
                <RightLeft />
            </Box>
        </Box >
    );
};

export default SectionTwo;
