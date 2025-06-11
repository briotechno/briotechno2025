import React, { useState } from "react";
import {
    Box,
    Typography,
    InputLabel,
    IconButton,
    LinearProgress,
    Fade,
} from "@mui/material";
import "@fontsource/quicksand";
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from "@mui/icons-material/Add";
import DescriptionIcon from '@mui/icons-material/Description';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from "@mui/material/CircularProgress";
import DynamicButton from "../header/DynamicButton";

const LinearProgressWithLabel = ({ value }) => (
    <Box sx={{ width: '100%' }}>
        <LinearProgress
            variant="determinate"
            value={value}
            sx={{
                height: 10,
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                    backgroundColor: '#2F80ED',
                },
                backgroundColor: '#1C1C1C',
            }}
        />
    </Box>
);

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
        padding: "0 10px",
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
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [errors, setErrors] = useState({});
    const [query, setQuery] = useState('idle');
    const [openSnackbar, setOpenSnackbar] = useState(false);
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
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setIsUploading(true);
            setUploadProgress(0);

            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                setUploadProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setFile(selectedFile);
                        setIsUploading(false);
                        setErrors(prev => ({ ...prev, file: undefined }));
                    }, 500);
                }
            }, 150);
        } else {
            alert("Please upload only PDF or Word documents.");
            event.target.value = null;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error for this field on input
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query === 'success') {
            setQuery('idle');
            return;
        }

        const newErrors = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) newErrors[key] = "This field is required";
        });

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Enter a valid 10-digit phone number";
        }

        if (!/^\d{4}$/.test(formData.graduationYear)) {
            newErrors.graduationYear = "Enter a valid 4-digit year (e.g., 2025)";
        }

        const scoreRegex = /^(100(\.0{1,2})?|([0-9]{1,2})(\.\d{1,2})?)$/;
        if (!scoreRegex.test(formData.cgpa)) {
            newErrors.cgpa = "Enter a valid number (CGPA ≤ 10 or Percentage ≤ 100)";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!file) newErrors["file"] = "Resume is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Submitted:", formData, file);

        setQuery('progress');

        setTimeout(() => {
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
            setUploadProgress(0);
            setErrors({});
            setQuery('success');
            setOpenSnackbar(true);
        }, 2000);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
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
                        {type === "text" && name === "message" ? (
                            <>
                                <textarea
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleInputChange}
                                    rows={5}
                                    style={{
                                        ...styles.input,
                                        height: "auto",
                                        minHeight: "120px",
                                        resize: "vertical",
                                        fontFamily: "Quicksand, sans-serif",
                                        fontSize: "16px",
                                        lineHeight: "1.5",
                                        padding: "10px",
                                        borderColor: errors[name] ? "red" : "#212529",
                                    }}
                                />
                                {errors[name] && (
                                    <Typography sx={{ color: "red", fontSize: "13px", marginTop: "4px" }}>
                                        {errors[name]}
                                    </Typography>
                                )}
                            </>
                        ) : (
                            <>
                                {type === "number" && ["phoneNumber", "graduationYear", "cgpa"].includes(name) ? (
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleInputChange}
                                        style={{
                                            ...styles.input,
                                            borderColor: errors[name] ? "red" : "#212529",
                                        }}
                                    />
                                ) : (
                                    <input
                                        type={type}
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleInputChange}
                                        style={{
                                            ...styles.input,
                                            borderColor: errors[name] ? "red" : "#212529",
                                        }}
                                    />
                                )}
                                {errors[name] && (
                                    <Typography sx={{ color: "red", fontSize: "13px", marginTop: "4px" }}>
                                        {errors[name]}
                                    </Typography>
                                )}
                            </>
                        )}
                    </label>
                ))}

                <Box>
                    <InputLabel sx={{ color: "#ccc", mb: 1, margin: "0 15px", padding: "0 0 8px 0" }}>
                        Upload your resume [ PDF or Document ]
                    </InputLabel>
                    <label
                        htmlFor="resumeUpload"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            border: `1px dashed ${errors.file ? "red" : "#212529"}`,
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

                    {errors.file && (
                        <Typography sx={{ color: "red", fontSize: "13px", marginLeft: "15px", marginTop: "8px" }}>
                            {errors.file}
                        </Typography>
                    )}

                    {isUploading ? (
                        <Box mt={2} ml={2} sx={{ width: "100%", maxWidth: "300px" }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                <Typography sx={{ color: "#ccc", fontStyle: "italic" }}>Uploading...</Typography>
                                <Typography sx={{ color: "#ccc" }}>{`${uploadProgress}%`}</Typography>
                            </Box>
                            <LinearProgressWithLabel value={uploadProgress} />
                        </Box>
                    ) : file && (
                        <Box
                            mt={2}
                            display="flex"
                            alignItems="center"
                            sx={{
                                width: "100%",
                                maxWidth: "300px",
                                color: "#ccc",
                                gap: "8px",
                                marginLeft: "15px",
                            }}
                        >
                            <DescriptionIcon />
                            <Typography noWrap>{file.name}</Typography>
                            <IconButton size="small" onClick={handleRemove}>
                                <CloseIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                <Box sx={{ paddingX: { lg: "45px", sm: "0" }, mt: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <DynamicButton filled={true} onClick={handleSubmit} disabled={query === 'progress'}>
                            {query === 'progress' ? (
                                <Fade
                                    in={true}
                                    style={{ transitionDelay: '800ms' }}
                                    unmountOnExit
                                >
                                    <CircularProgress size={28} sx={{ color: "white", mr: 1 }} />
                                </Fade>
                            ) : query === 'success' ? (
                                <Typography sx={{ color: "black", fontWeight: 600 }}>
                                    Apply Now</Typography>
                            ) : (
                                'Apply Now'
                            )}
                        </DynamicButton>
                    </Box>

                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={2000}
                        onClose={handleCloseSnackbar}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled"
                            sx={{ width: '100%' }}>
                            Internship Application submitted successfully!
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </Box>
    );
};

export default InternshipForm;
