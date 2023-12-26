import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { List, Typography } from '@mui/material';

export const ContactsList = () => {
  const listOfContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {listOfContacts.length > 0 ? (
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',

            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {listOfContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      ) : (
        <Typography sx={{ paddingTop: 2 }} component="h2" variant="h5">
          No contact exists
        </Typography>
      )}
    </>
  );
};
