import * as Yup from 'yup';


export const addTenantValidationSchema = Yup.object({
    name: Yup.string().required("Tenant Name is required"),
    description: Yup.string().required("Tenant Description is required"),
    country: Yup.string().required("Country is required"),
    currency: Yup.string().required("Currency is required"),
    sms_sender_id: Yup.string().notRequired(),
    custom_domain: Yup.string().notRequired(),
})

export const editTenantValidationSchema = Yup.object({
    name: Yup.string().required("Tenant Name is required"),
    description: Yup.string().required("Tenant Description is required"),
    country: Yup.string().required("Country is required"),
    currency: Yup.string().required("Currency is required"),
    sms_sender_id: Yup.string().notRequired(),
    custom_domain: Yup.string().notRequired(),
})
