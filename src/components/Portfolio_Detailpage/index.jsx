import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import PortfolioDetailpageOne from "../Portfolio_Detailsection/PortfolioDetailpageOne"
import PortfolioDetailpageTwo from "../Portfolio_Detailsection/PortfolioDetailpageTwo"
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

const PortfolioDetailpage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={styles.pageContainer}>
        <Header />
        <PortfolioDetailpageOne />
        <PortfolioDetailpageTwo />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioDetailpage;
