import { AppBar, Box, Button, Container, Typography } from '@mui/material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MoviesCity
            </Typography>
            <Box
              sx={{
                display: { lg: 'flex' },
              }}
            >
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Movies
              </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                My Tickets
              </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Log in
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
      {children}
    </>
  );
}
