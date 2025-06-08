import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import CareerOne from "../Career_section/CareerOne";
import CareerTwo from "../Career_section/CareerTwo";
import CareerTeam from "../Career_section/CareerTeam";
import CareerWork from "../Career_section/CareerWork";
import CareerPosition from "../Career_section/CareerPosition";
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
                <CareerOne />
                <CareerTwo />
                <CareerTeam />
                <CareerWork />
                <CareerPosition />
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default AboutPage;
