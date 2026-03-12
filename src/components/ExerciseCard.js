import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src="https://i.pinimg.com/originals/a4/87/49/a487496bb775fbf575787df765fcf47d.gif" alt={exercise.name} loading="lazy" />
    <Stack direction="row" flexWrap="wrap" sx={{ gap: { xs: 0.5, sm: 1 } }}>
      <Button size="small" sx={{ ml: { xs: 1, sm: '21px' }, color: '#fff', background: '#FFA9A9', fontSize: { xs: '12px', sm: '14px' }, borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button size="small" sx={{ ml: { xs: 0.5, sm: '21px' }, color: '#fff', background: '#FCC757', fontSize: { xs: '12px', sm: '14px' }, borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml={{ xs: 1, sm: '21px' }} color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '16px', sm: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
