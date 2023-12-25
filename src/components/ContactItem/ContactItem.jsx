import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Button, ListItem } from '@mui/material';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
      <p>
        {`${name} `}
        {number}
      </p>
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        variant="contained"
        fullWidth
        sx={{ mt: 0, mb: 2 }}
      >
        Delete
      </Button>
    </ListItem>
  );
};
