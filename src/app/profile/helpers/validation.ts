import * as Yup from 'yup';


export const editProfileValidationSchema = Yup.object({
    last_name: Yup.string().required("Last Name is required"),
    first_name: Yup.string().required("First Name is required"),
    mobile: Yup.string().required("Mobile Number is required"),
})


export const changePasswordValidationSchema = Yup.object({
    old_password: Yup.string().required("Password is required"),
    new_password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), null], "Passwords don't match!")
        .required('Required')
})
