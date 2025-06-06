import React, { useState } from "react";
import { Box, Typography, Button, InputLabel, IconButton } from "@mui/material";
import "@fontsource/quicksand";
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from "@mui/icons-material/Add";
import DescriptionIcon from '@mui/icons-material/Description';

const styles = {
    section: {
        width: "100%",
        maxWidth: "1440px",
        color: "#fff",
        padding: "100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000",
    },
    title: {
        fontFamily: "Quicksand, sans-serif",
        color: "#D7E4F5",
        fontWeight: 700,
        fontSize: "40px",
        margin: "0 15px",
        marginBottom: "10px",
    },
    subtitle: {
        fontFamily: "Quicksand, sans-serif",
        fontWeight: 600,
        fontSize: "20px",
        margin: "0 15px",
        lineHeight: "25px",
        color: "#D7E4F599",
        marginBottom: "30px",
    },
    formBox: {
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    label: {
        margin: "0 15px",
        fontFamily: "Quicksand, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#D7E4F5",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        gap: "8px",
    },

    labels: {
        width: "100%",
        fontFamily: "Quicksand, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#D7E4F5",
        fontSize: "16px",
        fontWeight: 600,
        gap: "8px",
        padding: "10px 0"
    },

    input: {
        height: "40px",
        backgroundColor: "#14181F",
        border: "1px solid #212529",
        borderRadius: "10px",
        color: "#fff",
        fontSize: "16px",
        fontFamily: "inherit",
        outline: "none",
    },
    inputs: {
        width: "100%",
        height: "40px",
        backgroundColor: "#14181F",
        border: "1px solid #212529",
        borderRadius: "10px",
        color: "#fff",
        fontSize: "16px",
        fontFamily: "inherit",
        outline: "none",
    },

    button: {
        fontSize: "14px",
        fontWeight: 700,
        padding: "10px 30px",
        color: "#000000",
        fontFamily: "Quicksand, sans-serif",
        backgroundColor: "#1E88E5",
        borderRadius: "25px",
        '&:hover': {
            backgroundColor: "#1565C0",
        }
    }

};

const formFields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phoneNumber", type: "number" },
    { label: "Current CTC", name: "currentCTC", type: "number" },
    { label: "Expected CTC", name: "expectedCTC", type: "number" },
    { label: "Notice Period", name: "noticePeriod", type: "text" },
];

const formlink = [
    { label: "Portfolio Link", name: "portfolioLink", type: "url" },
];

const ApplyNow = () => {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        currentCTC: "",
        expectedCTC: "",
        noticePeriod: "",
        portfolioLink: "",
    });


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
        } else {
            alert("Please upload only PDF or Word documents.");
            event.target.value = null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allFilled = Object.values(formData).every(val => val.trim() !== "");
        if (!allFilled || !file) {
            alert("Please fill all fields and upload your resume.");
            return;
        }
        alert("Form submitted successfully!");
        console.log("Submitted:", formData, file);

        // Clear form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            currentCTC: "",
            expectedCTC: "",
            noticePeriod: "",
            portfolioLink: "",
        });
        setFile(null);
    };

    const handleRemove = () => {
        setFile(null);
    };


    return (
        <Box sx={styles.wrapper}>
            <Box sx={styles.section}>
                <Typography sx={styles.title}>Job Application</Typography>
                <Typography sx={styles.subtitle}>
                    Tell us more about you so we can get back to you with more info.
                </Typography>

                <Box component="form" sx={styles.formBox} onSubmit={handleSubmit}>
                    {formFields.map(({ label, name, type }) => (
                        <label key={name} style={styles.label}>
                            {label}
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={(e) =>
                                    setFormData({ ...formData, [name]: e.target.value })
                                }
                                style={styles.input}
                            />
                        </label>
                    ))}


                    <Box>
                        <InputLabel sx={{ color: "#ccc", mb: 1, margin: "0 15px", }}>
                            Upload your resume [ PDF or Document ]
                        </InputLabel>
                        <label
                            htmlFor="resumeUpload"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                border: "1px dashed #212529",
                                borderRadius: "10px",
                                margin: "0 15px",
                                height: "150px",
                                cursor: "pointer",
                                color: "#aaa",
                            }}
                        >
                            <UploadIcon fontSize="large" />
                            <Typography>Select a File</Typography>
                            <input
                                id="resumeUpload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                style={{
                                    display: "none",
                                }}
                            />
                        </label>

                        {file && (
                            <Box
                                mt={2}
                                display="flex"
                                alignItems="center"
                                sx={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    color: "#ccc",
                                    gap: "8px",
                                }}
                            >
                                <DescriptionIcon />
                                <Typography noWrap>{file.name}</Typography>
                                <IconButton size="small" onClick={handleRemove}>
                                    <CloseIcon fontSize="medium" />
                                </IconButton>
                            </Box>
                        )}

                        {formlink.map(({ label, name, type }) => (
                            <label key={name} style={styles.labels}>
                                {label}
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={(e) =>
                                        setFormData({ ...formData, [name]: e.target.value })
                                    }
                                    style={styles.inputs}
                                />
                            </label>
                        ))}
                    </Box>

                    <Box mt={3} display="flex" justifyContent="center">
                        <Button sx={styles.button} type="submit">
                            Apply Now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ApplyNow;
