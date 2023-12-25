import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        marginLeft: 'auto',
        height: 30,
        fontSize: 20,
        color: '#010101',
        gap: 10,
      }}
    >
      <Typography component="h2" variant="h6">
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
        sx={{ mt: 0, mb: 0, height: 30, fontSize: 16 }}
      >
        Log out
      </Button>
    </div>
  );
};
