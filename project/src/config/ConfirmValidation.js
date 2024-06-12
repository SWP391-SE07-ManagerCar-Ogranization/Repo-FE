import * as Yup from 'yup';

export const confirmPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, 'At least 8 characters')
    .required('Must be required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password did not match')
    .required('Must be required'),
});
