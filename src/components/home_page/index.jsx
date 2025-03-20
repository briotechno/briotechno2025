import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import SectionOne from "../sections/SectionOne";
import WeOffer from "../sections/WeOffer";
import Choose from "../sections/Choose";
import PortfolioSection from "../sections/Work";
import SectionTwo from "../Slider/SectionTwo";
import SlideBar from "../sections/Slidebar";
import Idea from "../sections/Idea";

const styles = {
  pageContainer: {
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    backgroundColor: "black",
  }
};

const HomePage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={styles.pageContainer}>
        <Header />
        <SectionOne />
        <SectionTwo />
        <WeOffer />
        <Choose />
        <PortfolioSection />
        <SlideBar />
        <Idea />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
