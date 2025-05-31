import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import AboutOne from "../About_section/AboutOne";
import AboutChoose from "../About_section/AboutChoose";
import About_SectionTwo from "../AboutSlider/About_SectionTwo";
import AboutSlidebar from "../About_section/AboutSlidebar"
import Location from "../About_section/Location"
import Footer from "../sections/Footer"

const styles = {
    pageContainer: {
        width: "100%",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        backgroundColor: "black",
    }
};

const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={styles.pageContainer}>
                <Header />
                <AboutOne />
                <AboutChoose/>
                <About_SectionTwo/>
                <AboutSlidebar/>
                <Location/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
};

export default AboutPage;
