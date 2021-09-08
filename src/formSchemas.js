import * as yup from "yup";

export const registerSchema = yup.object().shape({
    fName: yup
        .string('This field must contain only letters')
        .required('This field is required'),
    lName: yup
        .string('This field must contain only letters')
        .required('This field is required'),
    password: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    cPassword: yup
        .string()
        .required('This field is required')
        .oneOf([yup.ref('password'), null], 'Passwords don\'t match'),
    email: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .email('Invalid email'),
    cEmail: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .email('Invalid email')
        .oneOf([yup.ref('email'), null], 'Emails don\'t match'),
    birthDate: yup
        .date('Invalid date')
        .default(() => new Date(2000, 0, 1))
        .required('This field is required')

})

export const loginSchema = yup.object().shape({
    email: yup
        .string('This field must contain only letters')
        .email('Invalid email')
        .required('This field is required'),
    password: yup
        .string('This field must contain only letters')
        .required('This field is required')
})

export const changePasswordSchema = yup.object().shape({
    newPassword: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    cNewPassword: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .oneOf([yup.ref('newPassword'), null], 'Passwords don\'t match')
})