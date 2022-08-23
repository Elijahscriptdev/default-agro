import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string().email("The email address you entered is invalid").required("Email is required"),
    password: Yup.string().required("Password is required")
})

export const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email("The email address you entered is invalid").required("Email is required"),
})

export const resetPasswordValidationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords don't match!")
        .required('Required')
})


