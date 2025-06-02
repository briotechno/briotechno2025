import { Box } from '@mui/material';
import React from 'react';

const Location = () => {
  return (
    <Box sx={{ width: '1440px', height: '520px', padding: '20px 0' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: "1440px",
          paddingTop: '56.25%',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.803140561016!2d72.37338230157675!3d23.61139206757072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c42343b740083%3A0x2a4e7fadd58e25db!2sBriotechno!5e0!3m2!1sen!2sin!4v1748501375245!5m2!1sen!2sin"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            border: 0,
            width: '100%',
            height: '520px',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default Location;
