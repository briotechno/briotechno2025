import React from "react";
import { Button } from "@mui/material";

const baseStyles = {
    height: "44px",
    minWidth: "auto",
    padding: "10px 24px",
    borderRadius: "1000px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "100%",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    outline: "none",

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "0%",
        height: "100%",
        background: "#2F80ED",
        transition: "width 0.4s ease-in-out",
        zIndex: -1, 
    },

    "&:hover": {
        color: "black",
    },

    "&:hover::before": {
        width: "100%",
    },

    "&:focus": {
        outline: "none",
        borderColor: "inherit",
    },

    "&:active": {
        borderColor: "inherit",
    },
};

const filledStyles = {
    backgroundColor: "#2F80ED",
    color: "black",
    border: "none",
    transition: "transform 0.1s ease-in-out",

    "&:hover": {
        backgroundColor: "#2C70D6",
    },
    "&:active": {
        transform: "scale(0.95)",
    },
};

const unfilledStyles = {
    borderWidth: "1px",
    borderColor: "#2F80ED",
    color: "#2F80ED",
    backgroundColor: "transparent",
    position: "relative",
    overflow: "hidden",
    transition: "color 0.3s ease, border-color 0.3s ease",
    zIndex: 1, 

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "0%",
        height: "100%",
        background: "#2F80ED",
        transition: "width 0.4s ease-in-out",
        zIndex: -1, // Behind the text
    },

    "&:hover": {
        color: "White", // Text turns black on hover
    },

    "&:hover::before": {
        width: "100%", // Background fills on hover
    },
};

const DynamicButton = ({ children, filled = false, ...props }) => {
    return (
        <Button
            variant={filled ? "contained" : "outlined"}
            sx={{ ...baseStyles, ...(filled ? filledStyles : unfilledStyles) }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default DynamicButton;