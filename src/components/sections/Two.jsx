import React from 'react'
import { Grid, Typography } from '@mui/material'

const styles = {
    subContent: {
        padding: { xs: "0 20px", lg: "0 35px" },
        alignItems: "center",
        justifyContent: "center",
    },
    subTextOne: {
        fontSize: { xs: "30px", md: "40px" },
        fontWeight: 700,
        color: "#D7E4F5",
        textAlign: { xs: "center", md: "left" },
    },
    subTextTwo: {
        fontSize: "16px",
        fontWeight: 400,
        color: "#8A96A6",
        lineHeight: "24px",
        textAlign: { xs: "center", md: "left" },
        maxWidth: "635px",
        margin: "0 auto",
    },
};

const Two = () => {
    return (
        <div>
            <Grid container spacing={2} sx={styles.subContent}>
                <Grid item xs={12} md={6}>
                    <Typography sx={styles.subTextOne}>
                        Trusted by 50+ Clients around the world
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={styles.subTextTwo}>
                        Our team combines deep technical expertise with a strong focus on user experience to build solutions that are not only robust and scalable but also aligned with your business goals. Whether you're launching a new product, optimizing operations, or entering new markets, we provide the technology foundation you need to move faster, work smarter, and stay ahead of the curve
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Two
