import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import ServiceOne from "../service_section/ServiceOne";
import ServiceChoose from "../service_section/ServiceChoose";
import ServiceWork from "../service_section/ServiceWork";
import ServicesOffer from "../service_section/ServicesOffer";
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

const ServicePage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={styles.pageContainer}>
                <Header />
                <ServiceOne />
                <ServiceChoose/>
                <ServiceWork/>
                <ServicesOffer/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
};

export default ServicePage;
