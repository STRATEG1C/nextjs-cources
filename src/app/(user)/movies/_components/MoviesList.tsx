import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MoviesListProps {
  movies: Movie[];
}

export function MoviesList(props: MoviesListProps) {
  const { movies } = props;

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item lg={3} md={4} sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={movie.thumbnail}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
