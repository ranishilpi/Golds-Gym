import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(form);
    navigate('/', { replace: true });
  };

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' }, px: 2 }}>
      <Stack maxWidth={420} mx="auto" gap={2}>
        <Typography variant="h4" fontWeight={700}>Sign Up</Typography>

        <form onSubmit={onSubmit}>
          <Stack gap={2}>
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <TextField
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: '#FF2625', textTransform: 'none' }}
            >
              Create Account
            </Button>

            <Typography>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Signup;
