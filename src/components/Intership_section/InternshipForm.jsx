import React, { useState } from "react";
import { Box, Typography, Button, InputLabel } from "@mui/material";
import "@fontsource/quicksand";
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from "@mui/icons-material/Add";
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from "@mui/material";
import emailjs from '@emailjs/browser';




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
    { label: "Highest Qualification", name: "qualification", type: "text" },
    { label: "Course Name", name: "courseName", type: "text" },
    { label: "Year of Graduation", name: "graduationYear", type: "number" },
    { label: "CGPA/PR", name: "cgpa", type: "number" },
];

const InternshipForm = () => {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        qualification: "",
        courseName: "",
        graduationYear: "",
        cgpa: "",
    });

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
        } else {
            alert("Please upload only PDF or Documents.");
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
        
        const { firstName, lastName , email , phoneNumber , courseName , qualification , graduationYear , cgpa } = formData;

        const serviceID = 'service_yvztfr8';
        const templateID = 'template_f2a768m';
        const publicKey = 'user_473cP0iJABpz16Uy0Jjpx';

        const reader = new FileReader();

        reader.onload = () => {
            const base64File = reader.result.split(',')[1]; // remove data prefix

            const templateParams = {
                // to_email: userEmail,
                to_name: `${firstName} ${lastName}`,
                message: `Dear HR Team,
                        I hope this email finds you well.

                        I would like to apply for an internship position at your organization. Please find my details below:

                        - First Name: ${firstName}
                        - Last Name: ${lastName}
                        - Email: ${email}
                        - Phone Number: ${phoneNumber}
                        - Highest Qualification: ${qualification}
                        - Course Name: ${courseName}
                        - Year of Graduation: ${graduationYear}
                        - CGPA / PR: ${cgpa}

                        I have also attached my resume for your reference.

                        I look forward to the opportunity to contribute and learn at your organization.

                        Thank you for considering my application.

                        Best regards,  
                        ${firstName} ${lastName} 
                        ${email}
                        ${phoneNumber}
                        `,
                attachment: base64File, // your attachment
                fileName: file.name
            };

            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: "",
                        qualification: "",
                        courseName: "",
                        graduationYear: "",
                        cgpa: "",
                    });
                    setFile(null);
                    alert("Form submitted successfully!");
                }, (err) => {
                    console.log('FAILED...', err);
                });
        };

        reader.readAsDataURL(file); // Read file as base64

        // emailjs.send('service_gxssddd', 'template_l0yxi0r', {
        //     to_name: `${firstName} ${lastName}`,
        //     from_name: 'Briotechno Internship Application',
        //     message: `${firstName} ${lastName} , we will connect soon.`,
        //     // to_email: "Info@briotechno.com",
        // }, 'Bz2fUEsYputFHn4lO')
        //     .then((response) => {
        //         console.log('SUCCESS!', response.status, response.text);
        //     })
        //     .catch((err) => {
        //         console.error('FAILED...', err);
        //     });

        // Clear form

    };

    const handleRemove = () => {
        setFile(null);
    };

    return (
        <Box sx={styles.section}>
            <Typography sx={styles.title}>Internship Application</Typography>
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
                            onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
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
                            style={{ display: "none" }}
                        />
                    </label>

                    {file && (
                        <Box
                            mt={2}
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            sx={{
                                width: "200px",
                                // backgroundColor: "#111",
                                // padding: "5px",
                                // border: "1px solid #333",
                                borderRadius: "8px",
                                color: "#ccc",
                            }}
                        >
                            <DescriptionIcon />{file.name}
                            <IconButton size="small" onClick={handleRemove}>
                                <CloseIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                <Box mt={3} display="flex" justifyContent="center">
                    <Button sx={styles.button} type="submit">
                        Apply Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default InternshipForm;
