import * as React from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import LeftRight from "./LeftRight";
import RightLeft from "./RightLeft";

const SectionTwo = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall =useMediaQuery(theme.breakpoints.down("sm"));

    const styles = {
        box: {
            width: "100%",
            maxWidth: "1440px",
            height: 544,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        subContent: {
            minHeight: "112px",
            display: "flex",
            flexDirection: isLarge ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "10px",
            padding: isSmall ? "20px 0" : "0 20px",
            margin: "0 auto",
        },
        subTextOne: {
            fontSize:isMobile?"25px": "35px",
            fontWeight: 400,
            textAlign:isSmall?"center": "left",
            color: "#D7E4F5",
        },
        subTextTwo: {
            padding:isMobile? "0 15px" : "0 20px",
            maxWidth: "635px",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign:isSmall?"center": "left",
            color: "#8A96A6",
        },
        sliderBox: {
            mt: 2,
        },
    };

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
