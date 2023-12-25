import { setFilteredContacts } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { Box, Container, TextField } from '@mui/material';

export const Filter = () => {
  const filterQuery = useSelector(getFilter);
  const dispatch = useDispatch();

  const showFilteredContacts = e => {
    dispatch(setFilteredContacts(e.target.value));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="filter"
          label="Find contacts by name"
          name="filter"
          autoComplete="none"
          autoFocus
          value={filterQuery}
          onChange={showFilteredContacts}
        />
      </Box>
    </Container>
  );
};
