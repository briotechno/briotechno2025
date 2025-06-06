import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import darkTheme from "../../utils/theme";
import Header from "../header/Header";
import ContactOne from "../Contact_section/ContactOne";
import ContactForm from "../Contact_section/ContactForm";
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

const ContactPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={styles.pageContainer}>
        <Header />
        <ContactOne />
        <ContactForm />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default ContactPage
