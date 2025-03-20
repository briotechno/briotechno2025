import * as React from 'react';
import { Typography, Box } from "@mui/material";
import LeftRight from './LeftRight';
import RightLeft from './RightLeft';

const styles = {
    box: {
        width: "100%",
        height: 544,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    subContent: {
        maxWidth: "1200px",
        minHeight: "112px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "10px",
        padding: "0 20px",
        margin: "0 auto",
    },
    subTextOne: {
        fontSize: "35px",
        fontWeight: 400,
        textAlign: "left",
        color: "#D7E4F5",
    },
    subTextTwo: {
        padding: "0 20px",
        maxWidth: "635px",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        textAlign: "left",
        color: "#8A96A6",
    },
    sliderBox: {
        mt: 2,
    },
};

const SectionTwo = () => {
    return (
        <Box sx={styles.box}>
            <Box sx={styles.subContent}>
                <Typography sx={styles.subTextOne}>
                    Trusted by 50+ Clients around the world
                </Typography>
                <Typography sx={styles.subTextTwo}>
                    Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget.
                    Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit.
                    Lectus ac.
                </Typography>
            </Box>
            <Box sx={styles.sliderBox}>
                <LeftRight />
            </Box>
            <Box sx={styles.sliderBox}>
                <RightLeft />
            </Box>
        </Box>
    );
};

export default SectionTwo;