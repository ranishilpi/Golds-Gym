import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt={{ xs: 4, sm: 6, md: '48px' }} justifyContent="center" p={{ xs: 1, sm: 2, md: '20px' }}>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', md: '36px', xs: '24px' } }} mb={{ xs: 2, sm: '49px' }} textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb={{ xs: 4, sm: '72px' }} width="100%" sx={{ maxWidth: { lg: 1170 } }}>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px', fontSize: { xs: '14px', sm: '16px' } },
            width: '100%',
            maxWidth: { lg: '1170px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
            '& .MuiOutlinedInput-root': { pr: { xs: '90px', sm: '100px' } },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '70px' },
            minWidth: '70px',
            height: '56px',
            position: 'absolute',
            right: 0,
            top: 0,
            fontSize: { lg: '20px', xs: '12px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: { xs: 1, sm: 2, md: '20px' } }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
