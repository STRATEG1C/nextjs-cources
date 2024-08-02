import React from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { MoviesList, Pagination } from './_components';
import { getMovies } from './_actions';

interface MoviesPageProps {
  params: {
    page: number;
  };
}

export default async function MoviesPage({ params }: MoviesPageProps) {
  const { page } = params;

  const movies = await getMovies();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box component="main" sx={{ margin: '20px 0' }}>
          <Typography variant="h3">Movies in our cinema</Typography>
          <Box sx={{ marginTop: '20px' }}>
            <MoviesList movies={movies} />
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <Pagination currentPage={page} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
