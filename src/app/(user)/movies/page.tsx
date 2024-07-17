import React from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { MoviesList } from './_components/MoviesList';

export default function MoviesPage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box component="main" sx={{ marginTop: '20px' }}>
          <Typography variant="h3">Movies List</Typography>
        </Box>
        <Box component="main" sx={{ marginTop: '20px' }}>
          <MoviesList />
        </Box>
      </Container>
    </>
  );
}
