import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GitHub, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { companyLogo } from "../header/Images";
import "@fontsource/quicksand";

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        if (path.startsWith("http")) {
            window.open(path, "_blank");
        } else {
            navigate(path);
        }
    };

    return (
        <Box sx={{ pt: 6, pb: 3, }}>
            <Box
                sx={{
                    maxWidth: "1440px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000000",
                    // minHeight: "430px",
                    mx: "auto",
                    px: 3,
                }}
            >
                <Grid container spacing={4} >
                    {/* Logo + Description */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Box
                            component="img"
                            src={companyLogo}
                            alt="Logo"
                            sx={{ height: 40, cursor: "pointer", mb: 2 }}
                            onClick={() => navigate("/")}
                        />
                        <Typography sx={{ color: "#6c757d", fontSize: "15px" }}>
                            Briotechno is a renowned web app and mobile app development company and the best IT Software Solutions provider based in Mehsana, Gujarat, India, established in 2017.
                        </Typography>
                    </Grid>

                    {/* Useful Links */}
                    <Grid item xs={12} sm={4} md={3} sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>Company</Typography>
                        {[
                            { label: "About Us", path: "/About" },
                            { label: "Career", path: "/Career" },
                            { label: "Internship", path: "/Internship" }
                        ].map(({ label, path }, i) => (
                            <Typography
                                key={i}
                                onClick={() => handleClick(path)}
                                sx={{
                                    mb: 1,
                                    color: "#6c757d",
                                    cursor: "pointer",
                                    "&:hover": { color: "#2F80ED" },
                                }}
                            >
                                {label}
                            </Typography>
                        ))}

                    </Grid>

                    {/* Resources */}
                    <Grid item xs={12} sm={4} md={3} sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>Resources</Typography>
                        {[
                            { label: "Portfolio", path: "/portfolio" },
                            { label: "Testimonials", path: "/" },
                        ].map(({ label, path }, i) => (
                                <Typography
                                    key={i}
                                    onClick={() => handleClick(path)}
                                    sx={{
                                        mb: 1,
                                        color: "#6c757d",
                                        cursor: "pointer",
                                        "&:hover": { color: "#2F80ED" },
                                    }}
                                >
                                    {label}
                                </Typography>
                            ))}

                    </Grid>

                    {/* Social Icons */}
                    <Grid item xs={12} sm={4} md={3} sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>Follow us</Typography>
                        <Box sx={{
                            display: "flex", gap: 2,
                        }}>
                            <IconButton
                                onClick={() => handleClick("https://github.com/briotechno")}
                                sx={{
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                <GitHub />
                            </IconButton>
                            <IconButton onClick={() => handleClick("https://x.com/brijesh95571869")}
                                sx={{
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton onClick={() => handleClick("https://www.linkedin.com/company/13592774")}
                                sx={{
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                    },
                                }}>
                                <LinkedIn />
                            </IconButton>
                            {/* <IconButton onClick={() => handleClick("https://instagram.com/")}
                                sx={{
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                    },
                                }}>
                                <Instagram />
                            </IconButton> */}
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box sx={{
                    width: "100%", textAlign: "center", mt: 4, pt: 2,
                    borderTop: "1px solid #eee"
                }}>
                    <Typography sx={{ color: "#6c757d", fontSize: "14px" }}>
                        © {new Date().getFullYear()} Briotechno. All Rights Reserved.
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
