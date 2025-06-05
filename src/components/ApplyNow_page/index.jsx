import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import ApplyNow from "../ApplyNow_section/ApplyNow";
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

const ApplyNowPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={styles.pageContainer}>
                <Header />
                <ApplyNow />
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default ApplyNowPage;
