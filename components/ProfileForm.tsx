import { Box, Typography, Container, Paper, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import useSWR from 'swr';
import axios from 'axios';

const ProfileSchema = Yup.object().shape({
  firstname: Yup.string().required('First Name is required'),
  lastname: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  bio: Yup.string().max(250, 'Bio must be at most 250 characters'),
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ProfileForm = () => {
  const { data, error, mutate } = useSWR('/api/profile', fetcher);
  const [isEditing, setIsEditing] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleEdit = () => setIsEditing(!isEditing);

  return (
    <div style={{ backgroundColor: '#228B22', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Paper style={{ padding: 20, marginTop: 20, backgroundColor: '#ffb6c1', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" gutterBottom style={{ color: '#333333', marginBottom: 20 }}>
            Profile
          </Typography>

          {!isEditing ? (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper style={{ padding: 10, backgroundColor: '#ffffff', marginBottom: 10 }}>
                    <Typography variant="subtitle1" gutterBottom style={{ color: '#333333' }}>
                      Name
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {data.user_firstname} {data.user_lastname}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper style={{ padding: 10, backgroundColor: '#ffffff', marginBottom: 10 }}>
                    <Typography variant="subtitle1" gutterBottom style={{ color: '#333333' }}>
                      Email
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {data.user_email}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper style={{ padding: 10, backgroundColor: '#ffffff', marginBottom: 10 }}>
                    <Typography variant="subtitle1" gutterBottom style={{ color: '#333333' }}>
                      Bio
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {data.user_bio}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" onClick={handleEdit} style={{ marginTop: 20, backgroundColor: '#ff69b4', color: '#ffffff' }}>
                Edit Profile
              </Button>
            </Box>
          ) : (
            <Formik
              initialValues={{
                firstname: data.user_firstname,
                lastname: data.user_lastname,
                email: data.user_email,
                bio: data.user_bio || '',
              }}
              validationSchema={ProfileSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await axios.put('/api/profile', values);
                  mutate(); // Refresh SWR data
                  setIsEditing(false);
                } catch (error) {
                  console.error('Profile update error', error);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        name="firstname"
                        label="First Name"
                        fullWidth
                        error={touched.firstname && !!errors.firstname}
                        helperText={touched.firstname && errors.firstname}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        name="lastname"
                        label="Last Name"
                        fullWidth
                        error={touched.lastname && !!errors.lastname}
                        helperText={touched.lastname && errors.lastname}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        name="bio"
                        label="Bio"
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      style={{ marginRight: 10, backgroundColor: '#ff69b4', color: '#ffffff' }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleEdit}
                      style={{ backgroundColor: '#ff1493', color: '#ffffff' }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default ProfileForm;
