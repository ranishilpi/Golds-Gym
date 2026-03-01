import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      sx={{
        mt: { sm: '32px', xs: '16px' },
        px: { xs: 2, sm: 3, md: '40px' },
        gap: { xs: 1, sm: 2 },
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', minWidth: 48, minHeight: 48 }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        gap={{ xs: 2, sm: 3, md: '40px' }}
        alignItems="center"
        sx={{ ml: { xs: 1, sm: 2, md: '60px' }, flexGrow: 1 }}
        fontFamily="Alegreya"
        fontSize={{ xs: '16px', sm: '18px', md: '22px' }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
            paddingBottom: '4px',
          }}
        >
          Home
        </Link>

        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            paddingBottom: '4px',
          }}
        >
          Exercises
        </a>
      </Stack>

      {/* Auth Section */}
      {!user ? (
        <Stack direction="row" gap={{ xs: 1, sm: 2 }} alignItems="center" flexShrink={0}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: 'none',
                borderColor: '#FF2625',
                color: '#FF2625',
                px: { xs: 2, sm: 3 },
                fontSize: { xs: '0.8125rem', sm: '0.875rem' },
              }}
            >
              Login
            </Button>
          </Link>

          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: 'none',
                bgcolor: '#FF2625',
                px: { xs: 2, sm: 3 },
                fontSize: { xs: '0.8125rem', sm: '0.875rem' },
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack direction="row" gap={{ xs: 1, sm: 2 }} alignItems="center" flexWrap="wrap" flexShrink={0}>
          <span style={{ color: '#3A1212', fontWeight: 600, fontSize: 'clamp(14px, 3vw, 16px)' }}>
            Hi, {user.name}
          </span>

          <Button
            variant="outlined"
            size="small"
            onClick={logout}
            sx={{
              textTransform: 'none',
              borderColor: '#FF2625',
              color: '#FF2625',
              px: { xs: 2, sm: 3 },
              fontSize: { xs: '0.8125rem', sm: '0.875rem' },
            }}
          >
            Logout
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default Navbar;

