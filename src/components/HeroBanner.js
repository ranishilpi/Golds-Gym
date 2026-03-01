import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '100px', xs: '30px', sm: '50px' }, ml: { xs: 0, sm: '50px' }, px: { xs: 2, sm: 0 }, position: 'relative', overflow: 'hidden', minHeight: { lg: 480, md: 420 }, pb: { xs: 3, md: 6 } }} p={{ xs: 2, md: '20px' }}>
    <Box sx={{ maxWidth: { lg: 520, md: 450, sm: 400 }, position: 'relative', zIndex: 1 }}>
      <Typography color="#FF2625" fontWeight="600" sx={{ fontSize: { xs: '20px', sm: '24px', md: '26px' } }}>Fitness Club</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '28px', sm: '36px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography sx={{ fontSize: { xs: '16px', sm: '18px', md: '22px' } }} fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises <br /> personalized to you
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '100%', maxWidth: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: 'clamp(16px, 4vw, 22px)', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
    </Box>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
