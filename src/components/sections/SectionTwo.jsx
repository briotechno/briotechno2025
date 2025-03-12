import React from "react";
import { Box, Typography } from "@mui/material";
import "@fontsource/quicksand";
import "../../styles/fonts.css";
const SectionTwo = () => {
    // const [leftValue, setLeftValue] = useState(50);
    // const [rightValue, setRightValue] = useState(50);

    const styles = {
        content: {
            width: "100%",
            maxWidth: "1440px",
            minHeight: "344px",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        },
        subTextOne: {
            width: "50%",
            minWidth: "634px",
            Height: "112px",
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
            fontSize: "40px",
            color: "#D7E4F5",
            fontwidth: "400",
            lineheight: "56px"
        },
        subTextTwo: {
            width: "50%",
            minWidth: "634px",
            height: "72px",
            Padding: "0 0 10px 5px",
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
            fontSize: "16px",
            color: "#8A96A6",
            fontwidth: "400",
            lineheight: "24px",
            letterspacing: "2%"
        }
    };

    return (
        <>
            <Box sx={styles.content}>
                <Box>
                    <Typography sx={styles.subTextOne}>
                        Trusted by 50+ Clients around <br /> the world
                    </Typography>
                </Box>
                <Box >
                    <Typography sx={styles.subTextTwo}>
                        Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default SectionTwo;
