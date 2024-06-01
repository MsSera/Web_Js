import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: 'pink',  
    '&:hover': {
      backgroundColor: 'pink', 
    },
  },
}));

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required('Field required'),
  lastname: Yup.string().required('Field required'),
  bio: Yup.string(),
  image: Yup.mixed(),
  email: Yup.string().email('Invalid email').required('Field required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Field required'),
});

const SignupForm = () => {
  const router = useRouter();
  const classes = useStyles(); 
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Formik
      initialValues={{ firstname: '', lastname: '', bio: '', image: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await axios.post('/api/signup', values);
          setIsSuccess(true);
        } catch (error) {
          console.error('Signup error', error);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form>
          <Box mb={2}>
            <Field
              as={TextField}
              name="firstname"
              label="First Name"
              fullWidth
              error={touched.firstname && !!errors.firstname}
              helperText={touched.firstname && errors.firstname}
            />
          </Box>
          <Box mb={2}>
            <Field
              as={TextField}
              name="lastname"
              label="Last Name"
              fullWidth
              error={touched.lastname && !!errors.lastname}
              helperText={touched.lastname && errors.lastname}
            />
          </Box>
          <Box mb={2}>
            <Field
              as={TextField}
              name="bio"
              label="Bio"
              fullWidth
              error={touched.bio && !!errors.bio}
              helperText={touched.bio && errors.bio}
            />
          </Box>
          <Box mb={2}>
          <input
            id="image"
            name="image"
            type="file"
            onChange={(event) => {
              const file = event.currentTarget.files && event.currentTarget.files[0];
              if (file) {
                setFieldValue("image", file);
              }
            }}
          />

            <label htmlFor="image">Insert Image</label>
            {touched.image && errors.image && (
              <div style={{ color: "red" }}>{errors.image}</div>
            )}
          </Box>
          <Box mb={2}>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </Box>
          <Box mb={2}>
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={classes.button}
            disabled={isSubmitting || isSuccess}
          >
            {isSuccess ? 'Signup Successfully!' : 'Signup'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
