import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt={{ xs: 4, sm: 6, md: '80px' }} bgcolor="#FFF3F4">
    <Stack gap={{ xs: 2, md: '40px' }} sx={{ alignItems: 'center' }} flexWrap="wrap" px={{ xs: 2, sm: 3, md: '40px' }} pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100%', maxWidth: 200, height: 'auto' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '16px', sm: '20px' } }} mt={{ xs: 2, md: '41px' }} textAlign="center" pb={{ xs: 3, md: '40px' }} px={2}>Made with ❤️ by Shilpi Rani</Typography>
  </Box>
);

export default Footer;
