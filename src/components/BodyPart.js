import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
          borderTop: '4px solid #FF2625',
          background: '#fff',
          borderBottomLeftRadius: '20px',
          width: { xs: '160px', sm: '200px', md: '270px' },
          height: { xs: '180px', sm: '220px', md: '282px' },
          minHeight: { xs: 180, sm: 220, md: 282 },
          cursor: 'pointer',
          gap: { xs: 2, md: '47px' },
        }
        : {
          background: '#fff',
          borderBottomLeftRadius: '20px',
          width: { xs: '160px', sm: '200px', md: '270px' },
          height: { xs: '180px', sm: '220px', md: '282px' },
          minHeight: { xs: 180, sm: 220, md: 282 },
          cursor: 'pointer',
          gap: { xs: 2, md: '47px' },
        }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography sx={{ fontSize: { xs: '16px', sm: '20px', md: '24px' } }} fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
