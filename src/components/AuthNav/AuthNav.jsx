import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        style={{
          fontSize: 20,
          color: '#1976d2',
          textDecoration: 'none',
          marginLeft: 100,
        }}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        style={{
          fontSize: 20,
          color: '#1976d2',
          textDecoration: 'none',
          marginLeft: 100,
        }}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
