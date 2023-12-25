import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
        }}
      >
        <NavLink
          style={{
            fontSize: 20,
            color: '#1976d2',
            textDecoration: 'none',
          }}
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            style={{
              fontSize: 20,
              color: '#1976d2',
              textDecoration: 'none',
            }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </Box>
    </nav>
  );
};
