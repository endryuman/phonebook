import { useDispatch, useSelector } from 'react-redux';
import Section from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { Filter } from '../../components/Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Container, Typography } from '@mui/material';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && !error ? (
        <p>Loading...</p>
      ) : (
        <>
          {contacts && contacts.length > 0 ? (
            <Section title="Contacts">
              <Filter />
              <ContactsList />
            </Section>
          ) : (
            <Container component="main" maxWidth="xs">
              <Typography component="h2" variant="h5">
                You don't have contacts
              </Typography>
            </Container>
          )}
        </>
      )}
    </>
  );
}
