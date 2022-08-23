import * as Yup from 'yup';

export const addUserValidationSchema = Yup.object({
    email: Yup.string().email("The email address you entered is invalid").required("Email is required"),
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string().required("Password is required"),
    mobile: Yup.string().notRequired(),
    bvn: Yup.string().notRequired(),
    tenant_id: Yup.string().notRequired()
})

export const editUserValidationSchema = Yup.object({
    email: Yup.string().email("The email address you entered is invalid").required("Email is required"),
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    role: Yup.string().required("Role is required"),
    mobile: Yup.string().notRequired(),
    bvn: Yup.string().notRequired(),
    tenant_id: Yup.string().notRequired()
})