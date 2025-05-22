import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import ServiceOne from "../service_section/ServiceOne";

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

const ServicePage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={styles.pageContainer}>
                <Header />
                <ServiceOne />
            </Box>
        </ThemeProvider>
    );
};

export default ServicePage;
