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
      sx={{ mt: { sm: '32px', xs: '20px' } }}
      px="40px"
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px' }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        gap="40px"
        alignItems="center"
        sx={{ ml: '60px', flexGrow: 1 }}
        fontFamily="Alegreya"
        fontSize="22px"
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
        <Stack direction="row" gap="16px" alignItems="center">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderColor: '#FF2625',
                color: '#FF2625',
                px: 3,
              }}
            >
              Login
            </Button>
          </Link>

          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                bgcolor: '#FF2625',
                px: 3,
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack direction="row" gap="16px" alignItems="center">
          <span style={{ color: '#3A1212', fontWeight: 600 }}>
            Hi, {user.name}
          </span>

          <Button
            variant="outlined"
            onClick={logout}
            sx={{
              textTransform: 'none',
              borderColor: '#FF2625',
              color: '#FF2625',
              px: 3,
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

