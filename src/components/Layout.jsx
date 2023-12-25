import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
