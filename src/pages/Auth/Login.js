import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = (location.state && location.state.from) ? location.state.from : '/';

  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setErr('');
    try {
      login(form);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' }, px: 2 }}>
      <Stack maxWidth={420} mx='auto' gap={2}>
        <Typography variant='h4' fontWeight={700}>Login</Typography>

        {err ? <Typography color='error'>{err}</Typography> : null}

        <form onSubmit={onSubmit}>
          <Stack gap={2}>
            <TextField
              label='Email'
              type='email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <TextField
              label='Password'
              type='password'
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <Button
              type='submit'
              variant='contained'
              sx={{ bgcolor: '#FF2625', textTransform: 'none' }}
            >
              Login
            </Button>

            <Typography>
              Don&apos;t have an account? <Link to='/signup'>Sign up</Link>
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Login;
