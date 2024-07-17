import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const movies: { id: number; title: string }[] = [
  {
    id: 1,
    title: 'The Pirates',
  },
  {
    id: 2,
    title: 'Star Wars',
  },
  {
    id: 3,
    title: 'Sonic in cinema',
  },
  {
    id: 4,
    title: 'Big Dreams',
  },
  {
    id: 5,
    title: 'Operator Joe',
  },
  {
    id: 6,
    title: 'Interstellar',
  },
  {
    id: 7,
    title: 'Wonderland',
  },
  {
    id: 8,
    title: 'Barbie',
  },
  {
    id: 9,
    title: 'Openheimer',
  },
  {
    id: 10,
    title: 'The Day after tomorrow',
  },
];

export function MoviesList() {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="https://placehold.co/500x500"
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
