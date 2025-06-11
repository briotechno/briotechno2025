import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import CareerApply from "../CareerApplyPage/CareerApply";
import CareerApplyRules from "../CareerApplyPage/CareerApplyRules";
import Team from "../CareerApplyPage/Team";
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

const CareerApplyPagePage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={styles.pageContainer}>
                <Header />
                <CareerApply />
                <CareerApplyRules />
                <Team />
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default CareerApplyPagePage;
